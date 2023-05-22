const express = require('express');

const router = express.Router();

const groupsController = require('../controllers/groups.js');

router.post("/", groupsController.newGroup)

router.get("/", groupsController.getAllGroups)

module.exports = router;