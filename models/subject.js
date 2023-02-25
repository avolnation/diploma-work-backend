const mongoose = require('mongoose');

const Subject = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    group: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'group',
        required: true,
    },
    abbreviature: {
        type: String,
        required: true
    },
    subjectType: {
        type: String,
        enum: ["Лекция", "Практика", "Лабораторное занятие"],
        required: true
    },
    lecturer: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('subject', Subject);