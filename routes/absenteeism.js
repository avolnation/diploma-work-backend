const express = require('express');

const router = express.Router();

const absenteeismController = require('../controllers/absenteeism.js');

router.get("/", absenteeismController.findByParams);

router.post("/", absenteeismController.editAbsenteeism);

router.delete("/", absenteeismController.deleteAbsenteeism);

module.exports = router;