const mongoose = require('mongoose');

const Absenteeism = new mongoose.Schema({
    studendId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    type: { // Поле, указывающее на (не)уважительность пропуска
        type: Number,
        enum: [0, 1], // 0 - неуважительная, 1 - уважительная
        required: true
    },
    hoursNumber: {
        type: Number,
        required: true
    },
    subjectId: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true
    }
})

module.exports = mongoose.model('absenteeism', Absenteeism);