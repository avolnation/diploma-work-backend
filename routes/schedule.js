const express = require('express');

const router = express.Router();

const scheduleController = require('../controllers/schedule.js');

router.get("/", scheduleController.getSchedule);

router.get("/get-schedule-by-day-and-group", scheduleController.getScheduleByDayAndGroup);

router.post("/new-schedule/", scheduleController.newSchedule);

router.post("/edit-schedule/", scheduleController.editSchedule);

module.exports = router;
