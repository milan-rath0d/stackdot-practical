const mongoose = require("mongoose");

const ClassCategory = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('ClassCategory', ClassCategory)