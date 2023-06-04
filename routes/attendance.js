const express = require('express');

const router = express.Router();

const attendanceController = require('../controllers/attendance.js');

router.get("/", attendanceController.getAttendanceByParams);

router.post("/", attendanceController.newAttendance);

router.delete("/", attendanceController.deleteAttendance);

module.exports = router;