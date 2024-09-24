const express = require("express");
const router = express.Router();

const {
    handleGetUserSignup,
    handlePostUserSignup,
    handleGetUserLogin,
    handlePostUserLogin,
} = require("../controllers/userAuth.controllers");


// routes:



router.get("/signup", handleGetUserSignup);
router.get("/login", handleGetUserLogin);
router.post("/signup", handlePostUserSignup);
router.post("/login", handlePostUserLogin);


module.exports = router;