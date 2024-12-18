const CompetitiveExam = require("../../models/master/CompetitiveExam");

exports.addExam = async (req, res) => {
    try {
        const exam = new CompetitiveExam(req.body)
        await exam.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getExam = async (req, res) => {
    try {
        const exam = await CompetitiveExam.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: exam })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}