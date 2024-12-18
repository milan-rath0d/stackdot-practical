const mongoose = require("mongoose");

const Standard = new mongoose.Schema({
    name: { type: String, required: true },
    classCategoryId: { type: mongoose.Types.ObjectId, ref: 'ClassCategory', required: true }
})

module.exports = mongoose.model('Standard', Standard)