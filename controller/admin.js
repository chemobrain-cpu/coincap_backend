const express = require('express')
const router = express.Router()
const app = express()
const { body, validationResult, Result } = require('express-validator')
//importing models
const { Admin, User, Notification } = require("../database/database")
//import {env} from "../enviroment"
const jwt = require("jsonwebtoken")
const AWS = require('aws-sdk')
const authToken = process.env.TWILIO_AUTH_TOKEN
const accountSid = process.env.TWILIO_ACCOUNT_SID
const client = require('twilio')(accountSid, authToken)
const { generateAcessToken } = require('../utils/util')
const mongoose = require("mongoose")
const config = require('../config'); // load configurations file




module.exports.signupAdmin = async (req, res, next) => {

    try {
        const { userEmail, userPassword, userSecretKey } = req.body

        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            let error = new Error("invalid user input")

            return next(error)
        }


        //check for secret key
        if (userSecretKey !== 'coinbaseclone') {
            throw new Error('secret key incorrect')
            return;
        }
        //deleting all previous admin
        let deletedAdmins = await Admin.deleteMany()
        if (!deletedAdmins) {
            return
        }

        //creating a new user 
        let newAdmin = new Admin({
            _id: new mongoose.Types.ObjectId(),
            email: userEmail,
            password: userPassword


        })
        //saving the user
        let savedAdmin = await newAdmin.save()
        if (!savedAdmin) {
            let error = new Error("resource not saved")
            return next(error)
        }

        const adminToSend = await Admin.findOne({ _id: savedAdmin._id })

        const accessToken = generateAcessToken(adminToSend._id)
        return res.status(200).json({
            response: {
                admin: adminToSend,
                token: accessToken,
                expiresIn: 500,

            }
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }
}

module.exports.loginAdmin = async (req, res, next) => {

    try {
        const { userEmail, userPassword } = req.body
        const errors = validationResult(req)
        if (!errors.isEmpty()) {
            let error = new Error("invalid user input")
            return next(error)
        }

        let adminExist = await Admin.findOne({ email: userEmail })
        if (!adminExist) {
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user does not exist"
            })
        }
        //authenticate user i.e checking password
        let passwordFromStorage = adminExist.password
        if (passwordFromStorage !== userPassword) {
            return res.status(404).json({
                response: "password incorrect"
            })
        }
        const accessToken = generateAcessToken(adminExist._id)

        const adminToSend = await Admin.findOne({ _id: adminExist._id })

        return res.status(200).json({
            response: {
                admin: adminToSend,
                token: accessToken,
                expiresIn: 500,
            }
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)

    }

}

module.exports.getUserFromJwt = async (req, res, next) => {
    try {
        let token = req.headers["header"]
        if (!token) {
            console.log('no token')
            throw new Error("a token is needed oh")
        }
        const decodedToken = jwt.verify(token, process.env.SECRET_KEY)
        const admin = await Admin.findOne({ _id: decodedToken.phoneNumber })
        if (!admin) {
            console.log('no user')
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user has been deleted"
            })
        }
        console.log('reached')
        return res.status(200).json({
            response: {
                admin: admin,
            }
        })



    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)

    }

}

module.exports.getUsers = async (req, res, next) => {
    try {
        //get all users
        let adminExist = await Admin.findOne({ email: req.user.email })

        if (!adminExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //getting all the users from the backend
        let allUsers = await User.find()
        if (!allUsers) {
            return res.status(404).json({
                response: 'users not found'
            })
        }

        return res.status(200).json({
            response: allUsers
        })

    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}
module.exports.getUser = async (req, res, next) => {
    try {
        //get all users
        let clientId = req.params.id
        let adminExist = await Admin.findOne({ email: req.user.email })

        if (!adminExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //getting all the users from the backend
        let user = await User.findOne({ _id: clientId })
        if (!user) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        console.log(user)
        return res.status(200).json({
            response: user
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }

}
module.exports.updateUser = async (req, res, next) => {
    try {
        let {
            AddressOne,
            NameOfBank,
            accountNumber,
            accountBalance,
            cardNumber,
            cvc,
            expiration,
            nameOnCard,
            postalCode,
            firstName,
            lastName,
            email,
            country,
            number
        } = req.body
        let current_balance
        let savedUserToSend
        //get all users
        let adminExist = await Admin.findOne({ email: req.user.email })

        if (!adminExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //getting the users from the backend
        let user = await User.findOne({ email: email })
        //update user credentials
        current_balance = user.accountBalance

        user.firstName = firstName || ""
        user.lastName = lastName || ""
        user.email = email || ""
        user.country = country || " "
        user.number = number || ""
        user.AddressOne = AddressOne || " "
        user.NameOfBank = NameOfBank || " "
        user.accountNumber = accountNumber || " "
        user.accountBalance = accountBalance || " "
        user.cardNumber = cardNumber || " "
        user.cvc = cvc || " "
        user.expiration = expiration || " "

        user.nameOnCard = nameOnCard || " "
        user.postalCode = postalCode || " "
        //updating code

        user.ktcCode = ktcCode
        user.taxCode = taxCode
        user.ustCode = ustCode
        user.tntCode = tntCode

        let savedUser = await user.save()


        if (!user.accountBalance != accountBalance) {
            //initialised the notification

            //trigger notification if acountBalance changes
            let newNotification = new Notification({
                 _id: new mongoose.Types.ObjectId(),
                topic: 'gift',
                text: `you have recieved ${Number(savedUser.accountBalance) - Number(current_balance)} from anonymous persons`,
                actionText: 'trade now',
                notification: 'gift',
                showSatatus: false,
                user: savedUser
            })

            let savedNotification = await newNotification.save()
            if (!savedNotification) {
                throw new Error('notification failed to create')
            }
            let userToSend = await User.findOne({email:savedUser.email})

            if(!userToSend){
                throw new Error('could not retrieve user')
            }
            userToSend.notifications.push(savedNotification)

            savedUserToSend = await userToSend.save()
            
            if(!savedUserToSend){
                throw new Error('could not retrieve user')

            }
            return res.status(200).json({
                response: savedUserToSend
            })

        }
        

        return res.status(200).json({
            response:savedUser 
        })

    } catch (error) {
        console.log(error)
        error.message = error.message || "an error occured try later"
        return next(error)
    }



}

module.exports.sendMessage = async (req, res, next) => {

}
module.exports.sendEmail = async (req, res, next) => {
    try {
        //get all users
        const { text, id: clientId } = req.body

        let adminExist = await Admin.findOne({ email: req.user.email })

        if (!adminExist) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //getting all the users from the backend
        let user = await User.findOne({ _id: clientId })
        if (!user) {
            return res.status(404).json({
                response: 'user not found'
            })
        }
        //send email
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
     <h2 style="margin-bottom:30px;width:100%;text-align:center">Email from coinbase pro</h2>
     
     <p style='width:100%;height:100px;'>${text}</p>
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
            throw new Error('Email could not be saved')
        }


        return res.status(200).json({
            response: user
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}