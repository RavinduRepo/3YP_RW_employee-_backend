// authRouter.js
const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.post("/logout", authController.logout);
router.post("/reset-password", authController.sendPasswordResetEmail);

module.exports = router;
