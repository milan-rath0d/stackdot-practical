const mongoose = require("mongoose");

const Board = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Board', Board)