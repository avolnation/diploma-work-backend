const mongoose = require('mongoose');

const Schedule = new mongoose.Schema({
    dayOfTheWeek: {
        type: "String",
        enum: ["Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"],
        required: true
    }, 
    weekParity: {
        type: Number,
        enum: [0, 1, 2], // 0 - чётная неделя, 1 - нечётная (чётная - под, нечётная - над, если не совпадает, добавить ! в сравнениях где нужно), 2 - каждую неделю
        required: true
    },
    group: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'group',
        required: true,
    },
    pairNumber: {
        type: "String",
        required: true
    },
    subject: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'subject'
    },
    subgroup: {
        type: Number,
        enum: [0, 1, 2], // 0 - общая пара, 1 - первая подгруппа, 2 - вторая подгруппа
        required: true 
    },
    classroom: {
        type: String
    }
})

module.exports = mongoose.model('schedule', Schedule);