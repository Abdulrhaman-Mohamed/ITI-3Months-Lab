const router = require("express").Router();
const {authLogin,authRegsiter} = require("../Controller/authController")
const {verifyTokenAsync ,generateTokenAsync} = require("../Services/tokenOperation")

router.post("/login",verifyTokenAsync,authLogin);

router.post("/regsiter",authRegsiter)


module.exports = router;