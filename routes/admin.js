const express = require('express')
const router = express.Router()
//importing controllers
const {verifyAdmin}  = require("../utils/util")

const { body} = require('express-validator')

const {signupAdmin,loginAdmin,getUsers,getUser,updateUser,sendMessage,sendEmail,getUserFromJwt} = require("../controller/admin")

router.post("/auth/adminsignup",signupAdmin)

router.post("/auth/adminLogin",loginAdmin)

//log admin by force
router.get("/auth/adminbytoken",getUserFromJwt)

router.get("/auth/users",getUsers)
router.get("/auth/user/:id",getUser)
router.put("/auth/updateuser",updateUser)
router.post("/auth/message/:id",sendMessage)
router.post("/auth/emailuser",sendEmail)

module.exports.router = router
