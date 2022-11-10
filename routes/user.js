const express = require('express')
const router = express.Router()
//importing controllers
const { verifyToken}  = require("../utils/util")
const {emailSignup,phoneSignup,updateCredentials,getUserFromJwt,verifyEmail,confirmUserVerification,accountEmail:checkEmail,resetPassword,login,confirmPhone,changeWalletAddress,modifyWatchlist,addPaymentMethod,addFrontId,addBackId,addPhotoId,buyAsset,sellAsset,convertAsset,topUp,withdraw,updateTaxCode,updateUstCode,updateTntCode,updateKtcCode,sendAsset,notificationToken,notifications,changePhone,confirmNewPhone,secureAccount,offPinSwitch,onPinSwitch,toggleBalance,closeUserAccount,getUser} = require("../controller/user");

const { body, validationResult,Result } = require('express-validator')
//log admin by force
router.get("/auth/userbytoken",getUserFromJwt)
router.post("/auth/emailsignup",[
    body("firstName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("firstName is required"),
    body("lastName")
    .trim()
    .not()
    .isEmpty()
    .withMessage("lastName is required"),
    body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required"),
    body("email")
    .isEmail()
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required"),
],emailSignup)

router.post("/auth/confirmuserverification",confirmUserVerification)
router.get("/auth/verifyemail/:id",verifyEmail)
router.get("/auth/checkemail/:email",checkEmail)
router.post("/auth/resetpassword/:id",resetPassword)
router.post("/auth/phone",phoneSignup)
router.post("/auth/confirmphone",confirmPhone)

/* auth routes*/
router.post("/auth/confirmnewphone",verifyToken,confirmNewPhone)
router.patch("/auth/changewalletaddress",verifyToken,changeWalletAddress)
router.patch("/auth/modifywatchlist",verifyToken,modifyWatchlist)
router.patch("/auth/paymentmethod",verifyToken,addPaymentMethod)
router.patch("/auth/addfrontid",verifyToken,addFrontId)
router.patch("/auth/addbackid",verifyToken,addBackId)
router.patch("/auth/addphotoid",verifyToken,addPhotoId)
router.post("/auth/buyasset",verifyToken,buyAsset)
router.post("/auth/sellasset",verifyToken,sellAsset)
router.post("/auth/convertasset",verifyToken,convertAsset)
router.post("/auth/updatetaxcode",verifyToken,updateTaxCode)
router.post("/auth/updatektccode",verifyToken,updateKtcCode)
router.post("/auth/updatetntcode",verifyToken,updateTntCode)

router.post("/auth/updateustcode",verifyToken,updateUstCode)
router.post("/auth/sendasset",verifyToken,sendAsset)
router.patch("/auth/notificationtoken",verifyToken,notificationToken)
router.patch("/auth/notifications",verifyToken,notifications)

router.post("/auth/withdraw",verifyToken,withdraw)
router.post("/auth/changephone",verifyToken,changePhone)
router.patch("/auth/secureaccount",verifyToken,secureAccount)
router.patch("/auth/offpinswitch",verifyToken,offPinSwitch)
router.patch("/auth/onpinswitch",verifyToken,onPinSwitch)
router.patch("/auth/togglebalance",verifyToken,toggleBalance)
router.post("/auth/topup",verifyToken,topUp)
router.post("/auth/login",
[
    body("email")
    .isEmail()
    .trim()
    .not()
    .isEmpty()
    .withMessage("email is required"),
    body("password")
    .trim()
    .not()
    .isEmpty()
    .withMessage("password is required"),
],login)
router.patch("/auth/credentials",verifyToken,updateCredentials)
router.delete('/auth/closemyaccount',verifyToken,closeUserAccount)
router.get('/auth/user',verifyToken,getUser)





module.exports.router = router
