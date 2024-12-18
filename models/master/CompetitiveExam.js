const mongoose = require("mongoose");

const CompetitiveExam = new mongoose.Schema({
    name: { type: String, required: true },

})

module.exports = mongoose.model('CompetitiveExam', CompetitiveExam)