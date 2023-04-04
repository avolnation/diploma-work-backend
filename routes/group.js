const express = require('express');

const router = express.Router();

const groupsController = require('../controllers/groups.js');

router.post("/new-group/", groupsController.newGroup)

router.get("/get-all-groups", groupsController.getAllGroups)

module.exports = router;