const express = require('express');

const router = express.Router();

const scheduleController = require('../controllers/schedule.js');

router.post("/new-schedule/", scheduleController.newSchedule);

module.exports = router;