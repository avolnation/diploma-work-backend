const express = require('express');

const router = express.Router();

const attendanceController = require('../controllers/attendance.js');

router.get("/", attendanceController.getAttendanceByParams);

router.post("/", attendanceController.newAttendanceTemp);

router.delete("/", attendanceController.deleteAttendance);

router.get("/new-attend/:cardId", attendanceController.newAttendance);

router.get("/new-attend-test", attendanceController.newAttendanceTemp);

// router.get("/last-attendances", attendanceController.getLastTwentyAttendances);


module.exports = router;