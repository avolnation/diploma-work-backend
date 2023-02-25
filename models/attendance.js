const mongoose = require('mongoose');

const AttendanceRecord = new mongoose.Schema({
    date: String, 
    cardId: {type: String, required: true},
    student: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: 'student'
    },
    recordType: {
        type: String,
        enum: ["in", "out"], // enum разрешает для данного поля только введённые в списке значения 
        required: true
    },
    //TODO: Вход/выход поле +
})

module.exports = mongoose.model('attendance-record', AttendanceRecord);