const mongoose = require('mongoose');

const User = new mongoose.Schema({
    login: {
        type: String, 
        required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
        type: String,
    },
    surname: {
        type: String
    },
    role: {
        type: String,
        default: 'user',
        enum: ['user', 'admin', 'teacher']
    },
    token: {
        type: String,
        required: true
    },
    resetToken: {
        type: String,
        default: ''
    },
    resetTokenExpiration: {
        type: String,
        default: ''
    }
})

module.exports = mongoose.model('user', User);