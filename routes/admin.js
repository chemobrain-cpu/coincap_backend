const express = require('express')
const router = express.Router()
//importing controllers
const {verifyAdmin}  = require("../utils/util")

const { body} = require('express-validator')

const {signupAdmin,loginAdmin,getUsers,getUser,updateUser,sendMessage,sendEmail,getUserFromJwt} = require("../controller/admin")

router.post("/auth/adminSignup",[
    body("userEmail")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required"),
    body("userPassword")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required"),
    body("userSecretKey")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required"),
],signupAdmin)

router.post("/auth/adminLogin",[
    body("userEmail")
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required"),
    body("userPassword")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required"),
   
],loginAdmin)

//log admin by force
router.get("/auth/adminbytoken",getUserFromJwt)

router.get("/auth/users",verifyAdmin,getUsers)
router.get("/auth/user/:id",verifyAdmin,getUser)
router.put("/auth/updateuser",verifyAdmin,updateUser)
router.post("/auth/message/:id",verifyAdmin,sendMessage)
router.post("/auth/emailuser",verifyAdmin,sendEmail)

module.exports.router = router
