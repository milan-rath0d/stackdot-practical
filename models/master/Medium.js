const mongoose = require("mongoose");

const Medium = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('Medium', Medium)