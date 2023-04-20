const mongoose = require('mongoose');

const Absenteeism = new mongoose.Schema({
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'student'
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
    subject: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'subject'
    }
})

module.exports = mongoose.model('absenteeism', Absenteeism);