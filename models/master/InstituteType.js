const mongoose = require("mongoose");

const InstituteType = new mongoose.Schema({
    name: { type: String, required: true }
})

module.exports = mongoose.model('InstituteType', InstituteType)