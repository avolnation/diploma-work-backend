const express = require('express');

const router = express.Router();

const subjectController = require('../controllers/subject.js');

router.post("/new-subject/", subjectController.newSubject);

module.exports = router;