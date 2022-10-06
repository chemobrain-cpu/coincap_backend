const express = require('express')
const router = express.Router()
//importing controllers
const { verifyToken}  = require("../utils/util")
const {emailSignup,phoneSignup,getCredentials,updateCredentials,getUserFromJwt,verifyEmail,confirmUserVerification,accountEmail:checkEmail,resetPassword,login,confirmPhone,changeWalletAddress,modifyWatchlist,addPaymentMethod,addIdentity,buyAsset,sellAsset,convertAsset,topUp,withdraw,updateTaxCode,updateUstCode,updateTntCode,updateKtcCode,sendAsset} = require("../controller/user");
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
router.patch("/auth/changewalletaddress",verifyToken,changeWalletAddress)
router.patch("/auth/modifywatchlist",verifyToken,modifyWatchlist)
router.patch("/auth/paymentmethod",verifyToken,addPaymentMethod)
router.patch("/auth/addidentity",verifyToken,addIdentity)
router.post("/auth/buyasset",verifyToken,buyAsset)
router.post("/auth/sellasset",verifyToken,sellAsset)
router.post("/auth/convertasset",verifyToken,convertAsset)
router.post("/auth/updatetaxcode",verifyToken,updateTaxCode)
router.post("/auth/updatektccode",verifyToken,updateTntCode)
router.post("/auth/updatetntcode",verifyToken,updateUstCode)
router.post("/auth/updateustcode",verifyToken,updateKtcCode)
router.post("/auth/sendasset",verifyToken,sendAsset)
/*
router.post("/auth/updatetaxcode",verifyToken,postSend)
router.get("/auth/sendasset",verifyToken,getSend)

*/
router.post("/auth/withdraw",verifyToken,withdraw)



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

router.get("/auth/credentials/:id",verifyToken,getCredentials)
router.put("/auth/credentials/:id",verifyToken,updateCredentials)


module.exports.router = router
