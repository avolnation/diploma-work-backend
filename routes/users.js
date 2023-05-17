const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.js');

router.get("/login", usersController.loginUser);

router.get("/forgot-password", usersController.forgotPassword);

router.post("/register", usersController.newUser);

module.exports = router;