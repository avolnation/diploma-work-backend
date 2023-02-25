const express = require('express');

const router = express.Router();

const groupsController = require('../controllers/groups.js');

router.post("/new-group/", groupsController.newGroup)

module.exports = router;