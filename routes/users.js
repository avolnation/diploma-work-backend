const express = require('express');

const router = express.Router();

const usersController = require('../controllers/users.js');

router.get("/", usersController.getRequestsHandler);

router.post("/", usersController.postRequestsHandler);

module.exports = router;