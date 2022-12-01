const express = require('express')
const router = express.Router()
//importing controllers
const {verifyAdmin}  = require("../utils/util")
const { body} = require('express-validator')

const {signupAdmin,loginAdmin,getUsers,getUser,getAdmins,getAdmin,deleteAdmin,updateUser,updateAdmin,upgradeUser,sendMessage,sendEmail,getUserFromJwt} = require("../controller/admin")

router.post("/auth/adminsignup",signupAdmin)
router.post("/auth/adminLogin",loginAdmin)


//log admin by force
router.get("/auth/adminbytoken",getUserFromJwt)
router.get("/auth/users",getUsers)
router.get("/auth/user/:id",getUser)
router.get("/auth/admins",getAdmins)
router.get("/auth/admin/:id",getAdmin)
router.get("/auth/deleteadmin/:id",deleteAdmin)
router.put("/auth/updateuser",updateUser)
router.put("/auth/updateadmin",updateAdmin)
router.put("/auth/upgradeuser",upgradeUser)
router.post("/auth/message/:id",sendMessage)
router.post("/auth/emailuser",sendEmail)

module.exports.router = router
