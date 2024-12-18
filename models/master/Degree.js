const mongoose = require("mongoose");

const Degree = new mongoose.Schema({
    name: { type: String, required: true },

})

module.exports = mongoose.model('Degree', Degree)