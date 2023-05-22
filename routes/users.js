const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.js');

router.get("/", usersController.loginAndForgotPasswordHandler);

router.post("/", usersController.userDataHandler);

module.exports = router;