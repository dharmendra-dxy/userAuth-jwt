const express = require("express");
const router = express.Router();

const {
    handleGetUserSignup,
    handlePostUserSignup,
    handleGetUserLogin,
    handlePostUserLogin,
    handleGetUserLogout
} = require("../controllers/userAuth.controllers");


// routes:



router.get("/signup", handleGetUserSignup);
router.get("/login", handleGetUserLogin);
router.get("/logout", handleGetUserLogout);
router.post("/signup", handlePostUserSignup);
router.post("/login", handlePostUserLogin);



module.exports = router;