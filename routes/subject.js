const express = require('express');

const router = express.Router();

const subjectController = require('../controllers/subject.js');

router.get("/", subjectController.getSubjectsByParams);

router.get("/get-subjects-by-group/:groupId", subjectController.getSubjectsByGroup);

router.post("/", subjectController.newSubject);

module.exports = router;