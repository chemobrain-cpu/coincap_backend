const express = require('express')
const router = express.Router()
//importing controllers
const {verifyAdmin}  = require("../utils/util")

const { body} = require('express-validator')

const {signupAdmin,loginAdmin,getUsers,getUser,updateUser,sendMessage,sendEmail,getUserFromJwt} = require("../controller/admin")

router.post("www.coincap.cloud/auth/adminsignup",signupAdmin)

router.post("www.coincap.cloud/auth/adminLogin",loginAdmin)

//log admin by force
router.get("www.coincap.cloud/auth/adminbytoken",getUserFromJwt)

router.get("www.coincap.cloud/auth/users",getUsers)
router.get("www.coincap.cloud/auth/user/:id",getUser)
router.put("www.coincap.cloud/auth/updateuser",updateUser)
router.post("www.coincap.cloud/auth/message/:id",sendMessage)
router.post("www.coincap.cloud/auth/emailuser",sendEmail)

module.exports.router = router
