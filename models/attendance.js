const mongoose = require('mongoose');

const AttendanceRecord = new mongoose.Schema({
    date: String,
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'student'
    }
})

module.exports = mongoose.model('attendance-record', AttendanceRecord);