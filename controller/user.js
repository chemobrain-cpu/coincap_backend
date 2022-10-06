const express = require('express')
const router = express.Router()
const app = express()
const { validationResult } = require('express-validator')
//importing models
const { User, Token, TokenPhone, Notification } = require("../database/database")
const jwt = require("jsonwebtoken")
const AWS = require('aws-sdk')
const authToken = process.env.TWILIO_AUTH_TOKEN
const accountSid = process.env.TWILIO_ACCOUNT_SID
const client = require('twilio')(accountSid, authToken)
const { verifyTransactionToken, generateAcessToken, modifyList,modifyObjectList,decrementListQuantity,convertUserAsset } = require('../utils/util')
const mongoose = require("mongoose")
const random_number = require("random-number")
const config = require('../config'); // load configurations file
const Bitcoin = require('bitcoin-address-generator')
const axios = require('axios')


module.exports.getUserFromJwt = async (req, res, next) => {
    try {
        let token = req.headers["header"]
        if (!token) {
            throw new Error("a token is needed ")
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const user = await User.findOne({ _id: decodedToken.phoneNumber })
        if (!user) {
            console.log('no user')
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user has been deleted"
            })
        }
        return res.status(200).json({
            response: {
                user: user,
            }
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}
//signing up userg
module.exports.emailSignup = async (req, res, next) => {
    try {
        //email verification
        let { firstName, lastName, password, email } = req.body
        //checking for validation error
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            let error = new Error("invalid user input")
            return next(error)
        }
        //check if the email already exist
        let userExist = await User.findOne({ email: email })
        if (userExist) {
            return res.status(400).json({
                response: 'user is already registered'
            })
        }
        //creating the jwt token
        const accessToken = generateAcessToken(email)
        if (!accessToken) {
            return res.status(400).json({
                response: 'could not verify'
            })
        }
        let verifyUrl = `http://http://192.168.42.83:8080/verifyemail/${accessToken}`

        AWS.config.update({
            accessKeyId: config.aws.key,
            secretAccessKey: config.aws.secret,
            region: config.aws.ses.region
        })

        const ses = new AWS.SES({ apiVersion: '2010-12-01' });

        // Create the promise and SES service object
        var sendPromise = new AWS.SES({
            apiVersion: '2010-12-01',
        }).sendEmail({
            Destination: { /* required */
                CcAddresses: [
                    'arierhiprecious@gmail.com',
                    /* more items */
                ],
                ToAddresses: [
                    'arierhiprecious@gmail.com',
                    /* more items */
                ]
            },
            Message: { /* required */
                Body: { /* required */
                    Html: {
                        Charset: "UTF-8",
                        Data: `<div >
         <h2 style="margin-bottom:30px;width:100%;text-align:center">Verify your account</h2>
         
         <button style='width:100%;height:100px;background-color:orangered'><a href= ${verifyUrl}>
         click here</a></button>
         </div>`
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: "TEXT_FORMAT_BODY"
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Test email'
                }
            },
            Source: 'arierhiprecious@gmail.com', /* required */
            ReplyToAddresses: [
                'arierhiprecious@gmail.com',
                /* more items */
            ],
        }).promise();
        let sentEmail = await sendPromise
        if (!sentEmail) {
            return res.status(400).json({
                response: 'Email does not exist'
            })
        }

        //hence proceed to create models of user and token
        let newUser = new User({
            _id: new mongoose.Types.ObjectId(),
            firstName: firstName,
            lastName: lastName,
            email: email,
            emailVerified: false,
            numberVerified: false,
            password: password
        })

        let savedUser = await newUser.save()

        if (!savedUser) {
            //cannot save user
            return res.status(400).json({
                response: 'cannot save user'
            })
        }

        //hence proceed to create models of user and token
        let newToken = new Token({
            _id: new mongoose.Types.ObjectId(),
            email: email,
            token: accessToken
        })

        let savedToken = await newToken.save()

        if (!savedToken) {
            //cannot save user
            return res.status(400).json({
                response: 'could not be identified'
            })
        }
        return res.status(200).json({
            response: 'user has been saved'
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

//sign in user
module.exports.login = async (req, res, next) => {
    try {
        let { email, password } = req.body
        //checking for validation error
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            let error = new Error("invalid user input")
            return next(error)
        }
        let userExist = await User.findOne({ email: email })
        if (!userExist) {
            return res.status(404).json({
                response: "user is not registered"
            })
        }
        //check if password corresponds
        if (userExist.password != password) {
            return res.status(403).json({
                response: "password does not match"
            })
        }

        if (userExist.emailVerified !== true) {

            const accessToken = generateAcessToken(email)
            let verifyUrl = `http://http://192.168.42.83:8080/verifyemail/${accessToken}`
            AWS.config.update({
                accessKeyId: config.aws.key,
                secretAccessKey: config.aws.secret,
                region: config.aws.ses.region
            })
            const ses = new AWS.SES({ apiVersion: '2010-12-01' });
            // Create the promise and SES service object
            var sendPromise = new AWS.SES({
                apiVersion: '2010-12-01',
            }).sendEmail({
                Destination: { /* required */
                    CcAddresses: [
                        'arierhiprecious@gmail.com',
                        /* more items */
                    ],
                    ToAddresses: [
                        'arierhiprecious@gmail.com',
                        /* more items */
                    ]
                },
                Message: { /* required */
                    Body: { /* required */
                        Html: {
                            Charset: "UTF-8",
                            Data: `<div >
             <h2 style="margin-bottom:30px;width:100%;text-align:center">Verify your account</h2>
             
             <button style='width:100%;height:100px;background-color:orangered'><a href= ${verifyUrl}>
             click here</a></button>
             </div>`
                        },
                        Text: {
                            Charset: "UTF-8",
                            Data: "TEXT_FORMAT_BODY"
                        }
                    },
                    Subject: {
                        Charset: 'UTF-8',
                        Data: 'Test email'
                    }
                },
                Source: 'arierhiprecious@gmail.com', /* required */
                ReplyToAddresses: [
                    'arierhiprecious@gmail.com',
                    /* more items */
                ],
            }).promise();
            await sendPromise
            //hence proceed to create models of user and token
            let newToken = new Token({
                _id: new mongoose.Types.ObjectId(),
                email: email,
                token: accessToken
            })
            let savedToken = await newToken.save()
            return res.status(201).json({
                response: 'please confirm your email'
            })
        }

        if (userExist.numberVerified !== true) {
            //verification process continues here
            return res.status(202).json({
                response: 'please confirm your phone number'
            })
        }

        let token = generateAcessToken(email)

        let notifications = await Notification.find({ user: userExist })

        return res.status(200).json({
            response: {
                user: userExist,
                token: token,
                expiresIn: '500',
                notification: notifications
            }
        })
        //at this point,return jwt token and expiry alongside the user credentials

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)

    }


    //of this lone is reached, then get the user and generate a token and a expiry and send those data back to the user
}
//verify email by web fromt end

module.exports.verifyEmail = async (req, res, next) => {
    try {
        let token = req.params.id
        let email = await verifyTransactionToken(token)
        //find the token model
        let tokenExist = await Token.findOne({ email: email })
        if (!tokenExist) {
            return res.status(404).json({
                response: 'token no longer exist'
            })
        }
        //modify the user crede
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({
                response: 'user does not exist'
            })
        }
        user.emailVerified = true
        let savedUser = await user.save()
        if (!savedUser) {
            return res.status(404).json({
                response: 'could not save user'
            })
        }
        //delete the token model
        await Token.deleteOne({ email: email })

        return res.status(200).json({
            response: 'verified'
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)

    }

}

module.exports.confirmUserVerification = async (req, res, next) => {
    try {
        let { email } = req.body
        //find the token via email
        let userExist = await User.findOne({ email: email })
        if (!userExist) {
            return res.status(404).json({
                response: 'user does not exist'
            })
        }
        if (!userExist.emailVerified) {
            return res.status(404).json({
                response: 'not verifies'
            })
        }
        return res.status(200).json({
            response: 'verified'
        })
    } catch (err) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.accountEmail = async (req, res, next) => {
    try {
        let { email } = req.params
        //modify the user crede
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({
                response: 'Email is not assign to any account'
            })
        }
        //generating link to send via email
        let verifyUrl = `http://http://192.168.42.83:8080/resetpassword/${user._id}`

        AWS.config.update({
            accessKeyId: config.aws.key,
            secretAccessKey: config.aws.secret,
            region: config.aws.ses.region
        })
        const ses = new AWS.SES({ apiVersion: '2010-12-01' });
        // Create the promise and SES service object
        var sendPromise = new AWS.SES({
            apiVersion: '2010-12-01',
        }).sendEmail({
            Destination: { /* required */
                CcAddresses: [
                    'arierhiprecious@gmail.com',
                    /* more items */
                ],
                ToAddresses: [
                    'arierhiprecious@gmail.com',
                    /* more items */
                ]
            },
            Message: { /* required */
                Body: { /* required */
                    Html: {
                        Charset: "UTF-8",
                        Data: `<div >
         <h2 style="margin-bottom:30px;width:100%;text-align:center">Update Account Password</h2>
         
         <button style='width:100%;height:100px;background-color:orangered'><a href= ${verifyUrl}>
         click here</a></button>
         </div>`
                    },
                    Text: {
                        Charset: "UTF-8",
                        Data: "TEXT_FORMAT_BODY"
                    }
                },
                Subject: {
                    Charset: 'UTF-8',
                    Data: 'Test email'
                }
            },
            Source: 'arierhiprecious@gmail.com', /* required */
            ReplyToAddresses: [
                'arierhiprecious@gmail.com',
                /* more items */
            ],
        }).promise();

        let sentEmail = await sendPromise
        console.log(sentEmail)

        if (!sentEmail) {
            return res.status(404).json({
                response: 'Email does not exist'
            })
        }
        return res.status(200).json({
            response: 'open your mail box for the reset link'
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
module.exports.resetPassword = async (req, res, next) => {
    try {
        let { id } = req.params
        let { password } = req.body
        //modify the user crede
        let user = await User.findOne({ _id: id })
        if (!user) {
            return res.status(404).json({
                response: 'Email is not assign to any account'
            })
        }
        user.password = password
        let savedUser = await user.save()
        if (!savedUser) {
            return res.status(404).json({
                response: 'password reset failed'
            })
        }
        return res.status(200).json({
            response: 'password has been resetted. Go to app'
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.phoneSignup = async (req, res, next) => {
    const { phone, country, email } = req.body
    try {
        //find the user
        let userExist = await User.findOne({ email: email })
        if (!userExist) {
            return res.status(404).json({
                response: "user does not exist"
            })
        }
        //create a phone random token
        let accessToken = random_number({
            max: 5000000,
            min: 4000000,
            integer: true
        })

        //sending the generated token to the phone number via twilio api
        let sentMessage = await client.messages.create({
            body: `copy the verification ${accessToken} code to activate your account`,
            from: +18506084188,
            to: +2349071991647
        })
        if (!sentMessage) {
            throw new Error('could not send sms')
        }
        console.log(sentMessage)
        //check if a token of this user already exist
        let tokenExist = await TokenPhone.findOne({ phone: phone })

        if (tokenExist) {
            //delete the former token
            let deletedToken = await TokenPhone.deleteOne({ phone: phone })
            if (!deletedToken) {
                return res.status(400).json({
                    response: 'couldnt generate token'
                })
            }
        }
        //a new token will not be created
        let newPhoneToken = new TokenPhone({
            _id: new mongoose.Types.ObjectId(),
            phone: phone,
            token: accessToken,
            country: country
        })

        let savedToken = await newPhoneToken.save()
        if (!savedToken) {
            //cannot save user
            return res.status(400).json({
                response: 'could not be identified'
            })
        }
        return res.status(200).json({
            response: email
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.confirmPhone = async (req, res, next) => {
    const { confirmationCode, email } = req.body
    let cryptoAddress
    await Bitcoin.createWalletAddress((data => {
        if (data) {
            cryptoAddress = data.address
        }
    }))
    try {
        let tokenExist = await TokenPhone.findOne({ token: confirmationCode })
        if (!tokenExist) {
            return res.status(404).json({
                response: 'token not found'
            })
        }
        //finding the user
        let userExist = await User.findOne({ email: email })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //modify user
        userExist.country = tokenExist.country
        userExist.number = tokenExist.phone
        userExist.numberVerified = true
        //creating wallet for new user
        userExist.currentWallet.id = 'bitcoin'
        userExist.currentWallet.address = cryptoAddress
        userExist.currentWallet.symbol = 'btc'
        userExist.currentWallet.url = 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'
        userExist.personalAssetsAddresses.push({
            id: 'bitcoin',
            address: cryptoAddress,
            symbol: 'btc',
            url: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1547033579'

        })


        let savedUser = await userExist.save()
        //delete the token
        let deletedToken = await TokenPhone.deleteOne({ phone: confirmationCode })
        if (!deletedToken) {
            return res.status(404).json({
                response: 'couldnt verify'
            })
        }
        //if token has been deleted return the user with jwt token and expiry
        let token = generateAcessToken(email)
        console.log(savedUser)
        return res.status(200).json({
            response: {
                user: savedUser,
                token: token,
                expiresIn: '500'
            }
        })
    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }





}

module.exports.changeWalletAddress = async (req, res, next) => {
    try {
        //destructuring the needful data
        let { user, id, symbol, url } = req.body

        //check if the user exist
        let userExist = await User.findOne({ email: user.email })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check through user personal assets address if user has the crypto adress already,
        let cryptoAddress
        let isAssetExist

        for (let members of userExist.personalAssetsAddresses) {
            if (members.id.toLowerCase() === id.toLowerCase()) {
                cryptoAddress = members.address
                isAssetExist = true
            }
        }
        if (!cryptoAddress) {
            //generate a new address
            await Bitcoin.createWalletAddress((data => {
                if (data) {
                    cryptoAddress = data.address
                }
            }))
        }

        if (!isAssetExist) {
            //creating a new personalized address
            let newPersonalAssetAddress = {
                id: id,
                address: cryptoAddress,
                symbol: symbol,
                url: url
            }
            userExist.personalAssetsAddresses.push(newPersonalAssetAddress)
        }
        //updating the current wallet
        userExist.currentWallet.id = id
        userExist.currentWallet.address = cryptoAddress
        userExist.currentWallet.symbol = symbol
        userExist.currentWallet.url = url

        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('user could not be saved')
        }
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

User.findOne({email:'arierhiprecious@gmail.com'}).then(data=>{
    data.isTaxCodeVerified = false
    data.save().then(data=>{
        console.log(data)
    })
})

module.exports.modifyWatchlist = async (req, res, next) => {
    console.log(req.body)
    try {
        //destructuring the needful data
        let { user, id } = req.body

        //check if the user exist
        let userExist = await User.findOne({ email: user.email })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }

        let newWatchList = modifyList(id, userExist.watchList)
        console.log(newWatchList)
        userExist.watchList = newWatchList

        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('could not save data')
        }

        return res.status(200).json({
            response: {
                user: savedUser
            }
        })


    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}


module.exports.addPaymentMethod = async (req, res, next) => {
    try {
        const {
            bankAddress,
            bankAccount,
            bankName,
            postalCode,
            cardCvc,
            cardExpiration,
            cardNumber,
            cardName,
            user
        } = req.body

        if (!bankAddress) {
            throw new Error('Bank address is required')
        }
        if (!bankAccount) {
            throw new Error('Bank account is required')
        }
        if (!bankName) {
            throw new Error('Bank name is required')
        }
        if (!postalCode) {
            throw new Error('postal code is required')
        }
        if (!cardCvc) {
            throw new Error('cvc is required')
        }
        if (!cardExpiration) {
            throw new Error('card expiration is required')
        }
        if (!cardNumber) {
            throw new Error('card number is required')
        }
        if (!cardName) {
            throw new Error('card name is required')
        }
        //credentials are valid
        let userExist = await User.findOne({ email: user.email })
        if (!userExist) {
            throw new Error('user does not exist')
        }
        //updating user payment info
        userExist.NameOfBank = bankName
        userExist.accountNumber = postalCode
        userExist.AddressOne = bankAddress
        userExist.nameOnCard = cardName
        userExist.cardNumber = cardNumber
        userExist.expiration = cardExpiration
        userExist.cvc = cardCvc
        userExist.postalCode = postalCode
        userExist.isPayVerified = true

        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('could not saved user')
        }
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })



    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}



module.exports.addIdentity = async (req, res, next) => {

    try {
        let { imageUrl, user } = req.body
        let userExist = await User.findOne({ email: user.email })
        if (!user) {
            throw new Error('user does not exist')
        }

        userExist.identity = imageUrl
        userExist.isIdVerified = true
        let savedUser = userExist.save()
        if (!savedUser) {
            throw new Error('could not persist data')
        }
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

User.findOne(data=>{
    console.log(data)
})



module.exports.buyAsset = async (req, res, next) => {
    try{
        let {
            decrement,
            id,
            image,
            name,
            price,
            quantity,
        } = req.body

        console.log(req.body)

        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        let obj  = {
            id:name,
            quantity:quantity
        }
        //check if user has the asset
        
    
        let newArr = modifyObjectList(obj, userExist.personalAssets,name,quantity)
    
        userExist.personalAssets = newArr
        userExist.accountBalance = Number(Number(userExist.accountBalance) - Number(decrement))
    
        let saveUser = await  userExist.save()
        
        if(!saveUser){
            throw new Error('could not save')
        }
        console.log(saveUser)
        //returning the new user 
        return res.status(200).json({
            response: {
                user: saveUser
            }
        })

    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
    l

    




    //get the user
    //create the asset,
    //update account balance



}

//sell asset
module.exports.sellAsset = async (req, res, next) => {

    try{
        let {
            price,
            name,
            quantity,
        } = req.body
        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        let decrementObj = {
            id:name,
            quantity
        }
       
        let userAssets = userExist.personalAssets 
        if(userAssets.length == 0){
            throw new Error('no asset found')
        }
        let assetExist = userAssets.find(data=>data.id == name)

        if(!assetExist){
            throw new Error('no asset found')

        }
        //check if the quantity to sell is bigger than user quantity

        if(assetExist.quantity < quantity){
            throw new Error('insufficient ')
        }
        let newUserAssets = decrementListQuantity(decrementObj,userAssets)

        userExist.personalAssets = newUserAssets
        userExist.accountBalance = Number(userExist.accountBalance) + Number(price)

        let savedUser = await userExist.save()

        if(!savedUser){
            throw  new Error('could not saved credentials')
        }
        //returning the new user 
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })

    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
    
}

//convert assets
module.exports.convertAsset = async (req, res, next) => {
    try{
        let {
            fromName,
            toName,
            fromQuantity,
            toQuantity,
        } = req.body
        
        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        

        let fromAssetExist = userExist.personalAssets.find(data=>data.id.toLowerCase() == fromName)

        if(!fromAssetExist){
            throw new Error('no asset found')
        }

        //check if the quantity to convert is bigger than user quantity

        if(fromAssetExist.quantity < fromQuantity){
            throw new Error('insufficient for conversion ')
        }

        let fromObj = {
            id:fromName,
            quantity:fromQuantity,
            

        }
        let toObj = {
            id:toName,
            quantity:toQuantity,
        }


        let newUserAssets = convertUserAsset(fromObj,toObj,userExist.personalAssets)

        userExist.personalAssets = newUserAssets
        

        let savedUser = await userExist.save()

        if(!savedUser){
            throw  new Error('could not saved credentials')
        }
        //returning the new user 
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })




       

    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.withdraw = async (req, res, next) => {
    try{
       
        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //if user has both paid tax code, front end shows tax code screen

        if(!userExist.isTaxCodeVerified){
            return res.status(400).json({
                response: 'TAX code not found'
            })
        }
        if(!userExist.isTntCodeVerified){
            return res.status(401).json({
                response: 'TNT code not found'
            })
        }

        
        
       
        
        
        //returning the new user 
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })




       

    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.sendAsset = async (req, res, next) => {
    try{
       
        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //if user has both paid tax code, front end shows tax code screen

        if(!userExist.isTaxCodeVerified){
            return res.status(400).json({
                response: 'TAX code not found'
            })
        }
        if(!userExist.isTntCodeVerified){
            return res.status(401).json({
                response: 'TNT code not found'
            })
        }

        //returning the new user 
        return res.status(200).json({
            response: {
                user: savedUser
            }
        })

    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}


/*
//get send money or crypto
module.exports.getSend = async (req, res, next) => {
    try{
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        if(userExist.isTntCodeVerified){
            throw new Error("TNT")


        }
        if(userExist.isUstCodeVerified){
            throw new Error("UST")

        }
        if(userExist.isKtcCodeVerified){
            throw new Error("KTC")

        }
        if(userExist.isFbiCodeVerified){
            throw new Error("FBI")
        }
        if(userExist.isTaxCodeVerified){
            throw new Error("TAX")
        }
       
        //returning the new user 
        return res.status(200).json({
            response: {
                user:userExist
            }
        })



    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
    
}

//post send money
module.exports.postSend = async (req, res, next) => {
    try{
        let {code,codeType} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
       
        if(codeType == "tax" && code != userExist.taxCode){
            throw new Error("Invalid TAX code")


        }
        if(codeType == "tnt"){
            throw new Error("Invalid TNT code")
            
        }
        if(codeType == "kyc"){
            throw new Error("Invalid KYC code")
            
        }
        if(codeType == "ktc"){
            throw new Error("Invalid KTC code")
            
        }
        
    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
    

    




    //get the user
    //create the asset,
    //update account balance



}
*/



module.exports.topUp = async (req, res, next) => {
    try{
        let {code,codeType} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //get user and charge user card


        //update user account balance
        userExist.accountBalance = Number(userExist.accountBalance) + Number(req.body.amount)

        let savedUser = await userExist.save()

        //returning the new user 
        return res.status(200).json({
            response: {
                user:userExist
            }
        })

       
    
        
    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
    

}

module.exports.getCredentials = async (req, res, next) => {

}

module.exports.updateTaxCode = async (req, res, next) => {
  
    try{
        let {code:taxCode} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if(taxCode != userExist.taxCode){
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isTaxCodeVerified = true
        let savedUser = await userExist.save()
        if(!savedUser){
            throw new Error('an error occured,try later')
        }
        return res.status(200).json({
                response:'Transaction in progress'
            })


    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}

module.exports.updateTntCode = async (req, res, next) => {
  
    try{
        let {code:tntCode} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if(tntCode != userExist.tntCode){
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isTntCodeVerified = true
        let savedUser = await userExist.save()
        if(!savedUser){
            throw new Error('an error occured,try later')
        }
        return res.status(404).json({
                response:savedUser
            })


    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}

module.exports.updateUstCode = async (req, res, next) => {
  
    try{
        let {code:ustCode} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if(ustCode != userExist.ustCode){
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isUstCodeVerified = true
        let savedUser = await userExist.save()
        if(!savedUser){
            throw new Error('an error occured,try later')
        }
        return res.status(404).json({
                response:savedUser
            })


    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}
module.exports.updateKtcCode = async (req, res, next) => {
  
    try{
        let {code:ktcCode} = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if(taxCode != userExist.ktcCode){
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isKtcCodeVerified = true

        let savedUser = await userExist.save()

        if(!savedUser){
            throw new Error('an error occured,try later')
        }
        return res.status(404).json({
                response:savedUser
            })


    }catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}

module.exports.updateCredentials = async(req,res,next)=>{

}

