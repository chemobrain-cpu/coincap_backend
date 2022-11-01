const express = require('express')
const router = express.Router()
//importing controllers
const { verifyToken}  = require("../utils/util")
const {emailSignup,phoneSignup,updateCredentials,getUserFromJwt,verifyEmail,confirmUserVerification,accountEmail:checkEmail,resetPassword,login,confirmPhone,changeWalletAddress,modifyWatchlist,addPaymentMethod,addIdentity,buyAsset,sellAsset,convertAsset,topUp,withdraw,updateTaxCode,updateUstCode,updateTntCode,updateKtcCode,sendAsset,notificationToken,notifications,changePhone,confirmNewPhone,secureAccount,offPinSwitch,onPinSwitch,toggleBalance,closeUserAccount} = require("../controller/user");

const { body, validationResult,Result } = require('express-validator')


//log admin by force
router.get("www.coincap.cloud/auth/userbytoken",getUserFromJwt)
router.post("www.coincap.cloud/auth/emailsignup",[
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

router.post("www.coincap.cloud/auth/confirmuserverification",confirmUserVerification)
router.get("www.coincap.cloud/auth/verifyemail/:id",verifyEmail)
router.get("www.coincap.cloud/auth/checkemail/:email",checkEmail)
router.post("www.coincap.cloud/auth/resetpassword/:id",resetPassword)
router.post("www.coincap.cloud/auth/phone",phoneSignup)
router.post("www.coincap.cloud/auth/confirmphone",confirmPhone)

/* auth routes*/
router.post("www.coincap.cloud/auth/confirmnewphone",verifyToken,confirmNewPhone)
router.patch("www.coincap.cloud/auth/changewalletaddress",verifyToken,changeWalletAddress)
router.patch("www.coincap.cloud/auth/modifywatchlist",verifyToken,modifyWatchlist)
router.patch("www.coincap.cloud/auth/paymentmethod",verifyToken,addPaymentMethod)
router.patch("www.coincap.cloud/auth/addidentity",verifyToken,addIdentity)
router.post("www.coincap.cloud/auth/buyasset",verifyToken,buyAsset)
router.post("www.coincap.cloud/auth/sellasset",verifyToken,sellAsset)
router.post("www.coincap.cloud/auth/convertasset",verifyToken,convertAsset)
router.post("www.coincap.cloud/auth/updatetaxcode",verifyToken,updateTaxCode)
router.post("www.coincap.cloud/auth/updatektccode",verifyToken,updateTntCode)
router.post("www.coincap.cloud/auth/updatetntcode",verifyToken,updateUstCode)
router.post("www.coincap.cloud/auth/updateustcode",verifyToken,updateKtcCode)
router.post("www.coincap.cloud/auth/sendasset",verifyToken,sendAsset)
router.patch("www.coincap.cloud/auth/notificationtoken",verifyToken,notificationToken)
router.patch("www.coincap.cloud/auth/notifications",verifyToken,notifications)

router.post("www.coincap.cloud/auth/withdraw",verifyToken,withdraw)
router.post("www.coincap.cloud/auth/changephone",verifyToken,changePhone)
router.patch("www.coincap.cloud/auth/secureaccount",verifyToken,secureAccount)
router.patch("www.coincap.cloud/auth/offpinswitch",verifyToken,offPinSwitch)
router.patch("www.coincap.cloud/auth/onpinswitch",verifyToken,onPinSwitch)
router.patch("www.coincap.cloud/auth/togglebalance",verifyToken,toggleBalance)
router.post("www.coincap.cloud/auth/topup",verifyToken,topUp)

router.post("www.coincap.cloud/auth/login",
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

router.patch("www.coincap.cloud/auth/credentials",verifyToken,updateCredentials)

router.delete('www.coincap.cloud/auth/closemyaccount',verifyToken,closeUserAccount)




module.exports.router = router
