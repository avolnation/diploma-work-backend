const express = require('express');

const router = express.Router();

const studentsController = require('../controllers/students.js');

router.post("/new-student/", studentsController.newStudent)

router.get("/all-students", studentsController.getAllStudents)

module.exports = router;