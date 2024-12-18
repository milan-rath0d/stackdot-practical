const mongoose = require("mongoose");

const Registration = new mongoose.Schema({
    instituteTypeId: { type: mongoose.Types.ObjectId, ref: "instituteType", required: true },
    boardId: { type: mongoose.Types.ObjectId, ref: "Board" },
    mediumId: { type: mongoose.Types.ObjectId, ref: "Medium" },
    classCategoryId: { type: mongoose.Types.ObjectId, ref: "ClassCategory" },
    standardId: { type: mongoose.Types.ObjectId, ref: "Standard" },
    subjectIds: [{ type: mongoose.Types.ObjectId, ref: "Medium" }],
    universityId: { type: mongoose.Types.ObjectId, ref: "University" },
    degreeTypeId: { type: mongoose.Types.ObjectId, ref: "Degree" },
    compatitiveExamId: { type: mongoose.Types.ObjectId, ref: "CompetitiveExamId" },
    createdAt: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Registration', Registration)