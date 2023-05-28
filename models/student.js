const mongoose = require('mongoose');

const Student = new mongoose.Schema({
    cardId: {
        type: String
    },
    name: {
        type: String
    },
    surname: {
        type: String
    },
    patronymic: {
        type: String
    },
    dateOfBirth: {
        type: String
    },
    group: {
        type: mongoose.SchemaTypes.ObjectId,
        required: true,
        ref: "group"
    },
    subgroup: {
        type: Number,
        enum: [1, 2]
    }
})

module.exports = mongoose.model('student', Student);