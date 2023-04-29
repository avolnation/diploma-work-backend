const express = require('express');

const router = express.Router();

const studentsController = require('../controllers/students.js');

router.post("/new-student/", studentsController.newStudent)

// router.post("/students", studentsController.newStudent)

router.get("/all-students", studentsController.getAllStudents)

// router.get("/students", studentsController.getAllStudents)

router.get("/", studentsController.getStudentsByParams)

module.exports = router;

// TODO: all-students, new-student => students
// TODO: GET запрос (students/:params) если понадобится (можно передать какие хочешь параметры) 