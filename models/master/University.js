const mongoose = require("mongoose");

const University = new mongoose.Schema({
    name: { type: String, required: true },

})

module.exports = mongoose.model('University', University)