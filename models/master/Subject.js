const mongoose = require("mongoose");

const Subject = new mongoose.Schema({
    name: { type: String, required: true },
    standardId: { type: mongoose.Types.ObjectId, ref: 'Standard', required: true }
})

module.exports = mongoose.model('Subject', Subject)