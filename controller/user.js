require('dotenv').config()
const express = require('express')
const router = express.Router()
const app = express()
const { validationResult } = require('express-validator')
//importing models
const { User, Token, TokenPhone, Notification, Admin } = require("../database/database")
const jwt = require("jsonwebtoken")
const AWS = require('aws-sdk')
const { verifyTransactionToken, generateAcessToken, modifyList, modifyObjectList, decrementListQuantity, convertUserAsset, verifyEmailTemplate, passwordResetTemplate, upgradeTemplate, adminResolveTemplate, notificationObject } = require('../utils/util')
const mongoose = require("mongoose")
const random_number = require("random-number")
const config = require('../config'); // load configurations file
const axios = require('axios')
const Bitcoin = require('bitcoin-address-generator')
const Mailjet = require('node-mailjet')

//process.env.MAILJET_SECRETKEY
//process.env.MAILJET_APIKEY

/*


User.deleteMany().then(Data=>{
    console.log(Data)
})


User.find().then(Data=>{
    console.log(Data)
})


TokenPhone.deleteMany().then(Data=>{
    console.log(Data)
})
Notification.deleteMany().then(Data=>{
    console.log(Data)
})


*/




module.exports.getUserFromJwt = async (req, res, next) => {
    
    try {
        let token = req.headers["header"]
        if (!token) {
            throw new Error("a token is needed ")
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        console.log(decodedToken)
        const user = await User.findOne({ email: decodedToken.phoneNumber })
        if (!user) {
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user has been deleted"
            })
        }

        let notifications = await Notification.find({ user: user })

        return res.status(200).json({
            response: {
                user: user,
                notification: notifications
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
            let error = new Error("user is already registered")
            return next(error)
        }
        //creating the jwt token
        const accessToken = generateAcessToken(email)

        if (!accessToken) {
            let error = new Error("could not be  verified")
            return next(error)
        }


        let verifyUrl = `http://www.coincap.cloud/verifyemail/${accessToken}`


        // Create mailjet send email
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
        )


        const request = await mailjet.post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "arierhiprecious@gmail.com",
                            "Name": "Coincap"
                        },
                        "To": [
                            {
                                "Email": `${email}`,
                                "Name": `${firstName}`
                            }
                        ],
                        "Subject": "Account Verification",
                        "TextPart": `Dear ${email}, welcome to Coincap! please click the link  ${verifyUrl}  to verify your email!`,
                        "HTMLPart": verifyEmailTemplate(verifyUrl, email)
                    }
                ]
            })





        if (!request) {
            let error = new Error("please use a valid email")
            return next(error)

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
            let error = new Error("user could not be saved")
            return next(error)
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
            let error = new Error("an error occured on the server")
            return next(error)
        }

        return res.status(200).json({
            response: 'user has been saved'
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

//sign in user with different response pattern
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
                response: "user is not yet registered"
            })
        }
        //check if password corresponds
        if (userExist.password != password) {
            let error = new Error("Password does not match")
            return next(error)
        }
        //if email is not verified,send email verification link
        if (userExist.emailVerified !== true) {

            const accessToken = generateAcessToken(email)

            let verifyUrl = `http://www.coincap.cloud/verifyemail/${accessToken}`


            // Create mailjet send email
            const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
            )

            const request = await mailjet.post("send", { 'version': 'v3.1' })
                .request({
                    "Messages": [
                        {
                            "From": {
                                "Email": "arierhiprecious@gmail.com",
                                "Name": "Coincap"
                            },
                            "To": [
                                {
                                    "Email": `${email}`,
                                    "Name": `${userExist.firstName}`
                                }
                            ],
                            "Subject": "Account Verification",
                            "TextPart": `Dear ${email}, welcome to Coincap! please click the link  ${verifyUrl}  to verify your email!`,
                            "HTMLPart": verifyEmailTemplate(verifyUrl, email)
                        }
                    ]
                })




            if (!request) {
                let error = new Error("please use a valid email")
                return next(error)
            }


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

        if (userExist.numberVerified != true) {
            //verification process continues here
            return res.status(202).json({
                response: 'please confirm your phone number'
            })
        }

        let token = generateAcessToken(email)

        //at this point,return jwt token and expiry alongside the user credentials
        return res.status(200).json({
            response: {
                user: userExist,
                token: token,
                expiresIn: '500',
            }
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)

    }
}

module.exports.verifyEmail = async (req, res, next) => {
    try {
        let token = req.params.id
        let email = await verifyTransactionToken(token)
        //find the token model
        console.log(email)
        let tokenExist = await Token.findOne({ email: email })
        if (!tokenExist) {
            let error = new Error("token does not exist")
            return next(error)
        }
        //modify the user credential
        let user = await User.findOne({ email: email })
        if (!user) {
            return res.status(404).json({
                response: 'user does not exist'
            })
        }
        user.emailVerified = true
        let savedUser = await user.save()
        if (!savedUser) {
            let error = new Error("an error occured on the server")
            return next(error)
        }
        //delete the token model
        await Token.deleteOne({ email: email })

        return res.status(200).json({
            response: 'verified'
        })

    } catch (error) {
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
            let error = new Error("Verify your email to continue")
            return next(error)
        }
        return res.status(200).json({
            response: 'Email has been verified'
        })
    } catch (err) {
        console.log(err)
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
        let verifyUrl = `http://www.coincap.cloud/resetpassword/${user._id}`


        // Create mailjet send email
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
        )

        const request = await mailjet.post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "arierhiprecious@gmail.com",
                            "Name": "Coincap"
                        },
                        "To": [
                            {
                                "Email": `${email}`,
                                "Name": "passenger 1"
                            }
                        ],
                        "Subject": "Account Verification",
                        "TextPart": `Dear ${email}, welcome to Coincap! please click the link  ${verifyUrl}  to verify your email!`,
                        "HTMLPart": verifyEmailTemplate(verifyUrl, email)
                    }
                ]
            })




        if (!request) {
            let error = new Error("please use a valid email")
            return next(error)
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
                response: 'you are not allowed to do this'
            })
        }

        user.password = password

        let savedUser = await user.save()
        if (!savedUser) {
            let error = new Error("could not change password")
            return next(error)
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
    try {
        var { phone, country, email } = req.body
        //creating country and phone number
        let format = country.replace(/\D/g, "");
        phone = `+${format}${phone}`

        let arr = []

        for (let i = 0; i < country.length; i++) {
            if (country[i] === '(') {
                break

            } else {
                arr.push(country[i])

            }
        }

        country = (arr.join(''))
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

       
        const url = 'https://api.mailjet.com/v4/sms-send';
 
         const data = {
             Text: `copy the verification ${accessToken} code to activate your account`,
             To:phone,
             From: "coincap"
         };
 
         // Specifying headers in the config object
         const con = { 'content-type': 'application/json', 'Authorization': `Bearer ${process.env.SMSTOKEN}` };
 
         //let sentMessage = await axios.post(url, data, con)

         let sentMessage = false
 
         if (!sentMessage) {
             //send email instead
                 // Create mailjet send email
            const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
                )
    
                const request = await mailjet.post("send", { 'version': 'v3.1' })
                    .request({
                        "Messages": [
                            {
                                "From": {
                                    "Email": "arierhiprecious@gmail.com",
                                    "Name": "Coincap"
                                },
                                "To": [
                                    {
                                        "Email": `${userExist.email}`,
                                        "Name": `${userExist.firstName}`
                                    }
                                ],
                                "Subject": "Account Verification",
                                "TextPart": `Coincap verificatioon code is ${accessToken}
                                `,
                                "HTMLPart": `<div>
                                <p>
                                Coincap verificatioon code is ${accessToken}
                                </p>
                                
                                </div>`
                            }
                        ]
                    })
    
    
    
    
                if (!request) {
                    let error = new Error("could not verify.Try later")
                    return next(error)
                }


            
         }
         

        //check if a token of this user already exist
        let tokenExist = await TokenPhone.findOne({ phone: phone })

        if (tokenExist) {
            //delete the former token
            let deletedToken = await TokenPhone.deleteOne({ phone: phone })
            if (!deletedToken) {
                let error = new Error("an error occured")
                return next(error)
            }
        }
        //a new token will now be created
        let newPhoneToken = new TokenPhone({
            _id: new mongoose.Types.ObjectId(),
            phone: phone,
            token: accessToken,
            country: country
        })

        let savedToken = await newPhoneToken.save()
        console.log(savedToken)
        if (!savedToken) {
            //cannot save user
            let error = new Error("an error occured")
            return next(error)
        }
        return res.status(200).json({
            response: email
        })
    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.changePhone = async (req, res, next) => {
    const { phone } = req.body
    try {
        //find the user
        let userExist = await User.findOne({ email: req.user.email })
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




        
        const url = 'https://api.mailjet.com/v4/sms-send';

        const data = {
            Text: `copy the verification ${accessToken} code to activate your account`,
            To: phone,
            From: "coincap"
        };

        // Specifying headers in the config object
        const con = { 'content-type': 'application/json', 'Authorization': `Bearer ${process.env.SMSTOKEN}` };

        let sentMessage = await axios.post(url, data, con)

        if (!sentMessage) {
            let error = new Error("could not send sms,please check and make sure your number format is correct")
            return next(error)
        }


        //check if a token of this user already exist and delete

        let tokenExist = await TokenPhone.findOne({ phone: phone })

        if (tokenExist) {
            //delete the former token
            let deletedToken = await TokenPhone.deleteOne({ phone: phone })
            if (!deletedToken) {
                throw new Error('an error occured')
            }
        }
        //a new token will now be created
        let newPhoneToken = new TokenPhone({
            _id: new mongoose.Types.ObjectId(),
            phone: phone,
            token: accessToken,

        })

        let savedToken = await newPhoneToken.save()
        console.log(savedToken)
        if (!savedToken) {
            //cannot save user
            throw new Error('an error occured')
        }

        return res.status(200).json({
            response: 'a code has been sent to the phone.continue to verify'
        })

    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
//confirm new phone
module.exports.confirmNewPhone = async (req, res, next) => {
    const { confirmationCode } = req.body

    try {
        let userExist = await User.findOne({ email: req.user.email })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }


        let tokenExist = await TokenPhone.findOne({ token: confirmationCode })

        if (!tokenExist) {
            throw new Error('the token does not exist or has been used')
        }


        //modify user
        userExist.number = tokenExist.phone

        let savedUser = await userExist.save()
        //delete the token
        if (!savedUser) {
            throw new Error('an error occured on the server')
        }

        await TokenPhone.deleteOne({ phone: confirmationCode })


        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}


module.exports.confirmPhone = async (req, res, next) => {

    const { confirmationCode, email } = req.body
    let cryptoAddress

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
        //create new notification for the user
        let newNotification = new Notification({
            _id: new mongoose.Types.ObjectId(),
            topic: 'welcome',
            text: `welcome to coincap. top up your account and start trading today if your account is low`,
            actionText: 'trade now',
            notification: 'welcome',
            showStatus: false,
            user: userExist._id
        })
        let savedNotification = await newNotification.save()

        await Bitcoin.createWalletAddress((data => {
            if (data) {
                cryptoAddress = data.address
            }
        }))
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

        userExist.notifications.push(savedNotification)

        let savedUser = await userExist.save()
        if(!savedUser){
            let error = new Error("an error occured")
            return next(error)
            
        }
        //delete the token
        let deletedToken = await TokenPhone.deleteOne({ phone: confirmationCode })

        if (!deletedToken) {
            let error = new Error("an error occured")
            return next(error)
        }
        //if token has been deleted return the user with jwt token and expiry
        let token = generateAcessToken(email)
        
        //send an email to admin
        let admin = await Admin.find()
        let admin_email = admin[0].email


        // Create mailjet send email
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY, process.env.MAILJET_SECRETKEY
        )

        const request = await mailjet.post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "arierhiprecious@gmail.com",
                            "Name": "Coincap"
                        },
                        "To": [
                            {
                                "Email": `${admin_email}`,
                            }
                        ],
                        "Subject": "Account Verification",
                        "TextPart": `Dear ${admin_email}, welcome ${userExist.email}!`,
                        "HTMLPart": `<h1>new user</h1>
                        <p>Dear ${admin_email}, welcome ${userExist.email}!</>`
                    }
                ]
            })

        if (!request) {
            let error = new Error("an error occured on the server")
            return next(error)
        }



        const request2 = await mailjet.post("send", { 'version': 'v3.1' })
            .request({
                "Messages": [
                    {
                        "From": {
                            "Email": "arierhiprecious@gmail.com",
                            "Name": "Coincap"
                        },
                        "To": [
                            {
                                "Email": `${email}`,
                            }
                        ],
                        "Subject": "Account Verification",
                        "TextPart": `Dear ${email}, welcome to coincap trading platform!`,
                        "HTMLPart": `<h1>Welcome</h1>
                        <p>Dear ${email}, welcome  to coincap trading platform! Fund your account and start trading now.Ensure to secure your account and do not share your login credential with anyone</>`
                    }
                ]
            })

        if (!request2) {
            let error = new Error("an error occured on the server")
            return next(error)
        }
        


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
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.modifyWatchlist = async (req, res, next) => {
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
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
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
            nameOnCard,
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
        if (!nameOnCard) {
            throw new Error('name on card is required')
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

        userExist.nameOnCard = nameOnCard


        userExist.cardNumber = cardNumber
        userExist.expiration = cardExpiration
        userExist.cvc = cardCvc
        userExist.postalCode = postalCode
        userExist.isPayVerified = true

        let savedUser = await userExist.save()
        if (!savedUser) {
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"

        return next(error)
    }

}

module.exports.addFrontId = async (req, res, next) => {

    try {
        let { imageUrl, user } = req.body
        let userExist = await User.findOne({ email: user.email })
        if (!user) {
            throw new Error('user does not exist')
        }
        userExist.frontIdUrl = imageUrl
        userExist.isFrontIdVerified = true
        let savedUser = await userExist.save()
        if (!savedUser) {
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
module.exports.addBackId = async (req, res, next) => {

    try {
        let { imageUrl, user } = req.body
        let userExist = await User.findOne({ email: user.email })
        if (!user) {
            throw new Error('user does not exist')
        }
        userExist.backIdUrl = imageUrl
        userExist.isBackIdVerified = true
        let savedUser = await userExist.save()
        if (!savedUser) {
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
module.exports.addPhotoId = async(req,res,next)=>{
    try {
        let { imageUrl, user } = req.body
        let userExist = await User.findOne({ email: user.email })
        if (!user) {
            throw new Error('user does not exist')
        }
        userExist.photo = imageUrl
        let savedUser = await userExist.save()
        if (!savedUser) {
            let error = new Error("an error occured")
            return next(error)
        }

        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}


module.exports.buyAsset = async (req, res, next) => {
    try {
        let {
            decrement,
            name,
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
        //check if user can purchase
        if (Number(userExist.accountBalance) < Number(decrement)) {
            let error = new Error("cannot make the purchase due to low balance")
            return next(error)

        }
        let obj = {
            id: name,
            quantity: quantity
        }
        //check if user has the asset


        let newArr = modifyObjectList(obj, userExist.personalAssets, name, quantity)

        console.log(newArr)

        userExist.personalAssets = newArr



        let newAccountBalance = Number(Number(userExist.accountBalance) - Number(decrement))

        userExist.accountBalance = newAccountBalance

        let saveUser = await userExist.save()

        if (!saveUser) {
            let error = new Error("an error occured")
            return next(error)
        }

        //returning the new user 
        return res.status(200).json({
            response: saveUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
//sell asset
module.exports.sellAsset = async (req, res, next) => {

    try {
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
            id: name,
            quantity
        }

        let userAssets = userExist.personalAssets
        if (userAssets.length == 0) {
            throw new Error('no asset found')
        }
        let assetExist = userAssets.find(data => data.id.toLowerCase() === name.toLowerCase())

        if (!assetExist) {
            throw new Error('no asset found')

        }
        //check if the quantity to sell is bigger than user quantity

        if (assetExist.quantity < quantity) {
            throw new Error('insufficient ')
        }
        let newUserAssets = decrementListQuantity(decrementObj, userAssets)

        userExist.personalAssets = newUserAssets
        let newAccountBalance = Number(userExist.accountBalance) + Number(price)

        userExist.accountBalance = newAccountBalance

        let savedUser = await userExist.save()

        if (!savedUser) {
            throw new Error('could not saved credentials')
        }
        //returning the new user 
        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}
//convert assets
module.exports.convertAsset = async (req, res, next) => {
    try {
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

        let fromAssetExist = userExist.personalAssets.find(data => data.id.toLowerCase() == fromName)

        if (!fromAssetExist) {
            throw new Error('no asset found')
        }

        //check if the quantity to convert is bigger than user quantity

        if (fromAssetExist.quantity < fromQuantity) {
            throw new Error('insufficient for conversion ')
        }

        let fromObj = {
            id: fromName,
            quantity: fromQuantity,


        }
        let toObj = {
            id: toName,
            quantity: toQuantity,
        }

        let newUserAssets = convertUserAsset(fromObj, toObj, userExist.personalAssets)

        userExist.personalAssets = newUserAssets

        let savedUser = await userExist.save()

        if (!savedUser) {
            throw new Error('could not saved credentials')
        }
        //returning the new user 
        return res.status(200).json({
            response: savedUser
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.withdraw = async (req, res, next) => {
    try {
        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //if user has both paid tax code, front end shows tax code screen

        if (!userExist.isTaxCodeVerified) {
            return res.status(400).json({
                response: 'TAX code not found'
            })

        }
        if (!userExist.isTntCodeVerified) {
            return res.status(401).json({
                response: 'TNT code not found'
            })
        }
        if (!userExist.isUstCodeVerified) {
            return res.status(402).json({
                response: 'UST code not found'
            })
        }

        //returning the new user 
        return res.status(200).json({
            response: userExist
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.sendAsset = async (req, res, next) => {
    try {

        //buy algorithm
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //if user has both paid tax code, front end shows tax code screen


        if (!userExist.isTaxCodeVerified) {
            return res.status(400).json({
                response: 'TAX code not found'
            })
        }
        if (!userExist.isTntCodeVerified) {
            return res.status(401).json({
                response: 'TNT code not found'
            })
        }
        if (!userExist.isUstCodeVerified) {
            return res.status(402).json({
                response: 'UST code not found'
            })
        }

        //returning the new user 
        return res.status(300).json({
            response: 'Transaction successful'
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}
module.exports.topUp = async (req, res, next) => {
    try {
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //get user and charge user card
        throw new Error('an error occured on the server')

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}
module.exports.updateTaxCode = async (req, res, next) => {
    try {
        let { taxCode } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if (taxCode != userExist.taxCode) {
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isTaxCodeVerified = true
        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('an error occured,try later')
        }
        return res.status(200).json({
            response: 'Transaction in progress'
        })


    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}
module.exports.updateTntCode = async (req, res, next) => {

    try {
        let {tntCode } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if (tntCode != userExist.tntCode) {
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isTntCodeVerified = true
        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('an error occured,try later')
        }
        return res.status(200).json({
            response: 'Transaction in progress'
        })


    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}

module.exports.updateUstCode = async (req, res, next) => {
    
    try {
        let { ustCode } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if (ustCode != userExist.ustCode) {
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isUstCodeVerified = true
        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('an error occured,try later')
        }
        return res.status(200).json({
            response: 'Transaction in progress'
        })


    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}
module.exports.updateKtcCode = async (req, res, next) => {

    try {
        let { code: ktcCode } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //check if tax code match
        if (taxCode != userExist.ktcCode) {
            throw new Error('incorrect code,please contact support')
        }
        //update tax code boolean
        userExist.isKtcCodeVerified = true

        let savedUser = await userExist.save()

        if (!savedUser) {
            throw new Error('an error occured,try later')
        }
        return res.status(200).json({
            response: 'Transaction in progress'
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.notificationToken = async (req, res, next) => {
    try {
        let { notificationToken } = req.body
        //find the user
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //modifying the token field
        userExist.notificationToken = notificationToken
        let savedUser = await userExist.save()
        if (!savedUser) {
            throw new Error('an error occured,try later')
        }
        //triggering push naotifications on expo server
        const title = 'Credit';
        const body = `welcome to coincap. top up your account and start trading today if your account is low!`;
        await notificationObject.sendNotifications([userExist.notificationToken], title, body);

        return res.status(200).json({
            response: savedUser
        })


    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }



}
//get all notifications for a specific user
module.exports.notifications = async (req, res, next) => {
    try {

        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //get all notifications that belongs to this user

        let userNotifications = await Notification.find({ user: req.user._id })


        //filtering the notifications
        let arr = userNotifications.filter(data => data.user.toString() === req.user._id.toString())


        return res.status(200).json({
            response: {
                arr: arr,
                user: req.user
            }

        })






    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.updateCredentials = async (req, res, next) => {
    try {
        let { firstName, lastName } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        //get all notifications that belongs to this user
        userExist.lastName = lastName
        userExist.firstName = firstName
        let savedUser = await userExist.save()


        return res.status(200).json({
            response: savedUser

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.secureAccount = async (req, res, next) => {
    try {
        let { pin } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        //get all notifications that belongs to this user
        userExist.pin = pin

        let savedUser = await userExist.save()


        return res.status(200).json({
            response: savedUser

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}
module.exports.offPinSwitch = async (req, res, next) => {
    try {
        let { pin } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        //get all notifications that belongs to this user
        userExist.isRequiredPin = false

        let savedUser = await userExist.save()


        return res.status(200).json({
            response: savedUser

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.onPinSwitch = async (req, res, next) => {
    try {
        let { pin } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        //get all notifications that belongs to this user
        userExist.isRequiredPin = true

        let savedUser = await userExist.save()


        return res.status(200).json({
            response: savedUser

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.toggleBalance = async (req, res, next) => {
    try {
        let { bool } = req.body
        let userExist = await User.findOne({ _id: req.user._id })
        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        //get all notifications that belongs to this user
        userExist.isHideBalance = bool

        let savedUser = await userExist.save()

        return res.status(200).json({
            response: savedUser

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}

module.exports.closeUserAccount = async (req, res, next) => {
    //algorithm
    try {
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        
        //deleting notification of user
        await Notification.deleteOne({user:req.user})
        //deleting phone token
        await Token.deleteOne({email:req.user.email})
        //delete tokenPhone
        await TokenPhone.deleteOne({phone:req.user.phone})

        let deletedUser =  await User.deleteOne({ email: req.user.email })

        if (!deletedUser) {
            throw new Error('user has been deleted')
        }
        return res.status(200).json({
            response: "sucessfully closed account"

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)

    }


}


module.exports.getUser = async (req, res, next) => {
    //algorithm
    try {
        let userExist = await User.findOne({ _id: req.user._id })

        if (!userExist) {
            throw new error('you are not authorized to do this')
        }
        
        
        return res.status(200).json({
            response:userExist

        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)

    }


}












































