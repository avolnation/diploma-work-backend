const mongoose = require('mongoose');

const Group = new mongoose.Schema({
    title: String
})

module.exports = mongoose.model('group', Group);