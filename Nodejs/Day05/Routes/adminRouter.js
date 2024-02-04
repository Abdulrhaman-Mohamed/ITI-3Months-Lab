const router = require("express").Router();
const getUsers = require("../Controller/adminController")
const {verifyTokenAsync} = require("../Services/tokenOperation")
const checkRole = require("../Services/authorizationOperations")


router.get("/users",verifyTokenAsync,checkRole("admin"),getUsers)


module.exports = router;
