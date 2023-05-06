const express = require('express');

const router = express.Router();

const absenteeismController = require('../controllers/absenteeism.js');

router.get("/", absenteeismController.findByParams);

module.exports = router;