// const Absenteeism = require("../models/absebteeism.js");

// exports.newRecord = (req, res, next) => {

//     new Absenteeism()
//         .save()


// }

import { argv } from 'node:process'

const mongoose = require('mongoose');
const MONGODB_URI = 'mongodb+srv://avolnation:34Q1WPNVgV6pxUeD@cluster0.sfcysht.mongodb.net/diploma-database';

const Group = require('../models/group.js')

const mandatoryPercentTime = 0.7;


mongoose.connect(MONGODB_URI)
    .then(res => {
        Group.find({}).then(res => {
            console.log(res)
        })
    })