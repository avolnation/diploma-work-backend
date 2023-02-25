const express = require('express');

const router = express.Router();

const attendanceController = require('../controllers/attendance.js');

router.get("/new-attend/:cardId", attendanceController.newAttendance);

router.get("/last-attendances", attendanceController.getLastTwentyAttendances);

module.exports = router;