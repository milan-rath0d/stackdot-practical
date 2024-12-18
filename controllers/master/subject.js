const Subject = require("../../models/master/subject");

exports.addSubject = async (req, res) => {
    try {
        const subjects = new Subject(req.body)
        await subjects.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getSubject = async (req, res) => {
    try {
        const subjects = await Subject.find({ standardId: req.params.standardId })
        res.status(201).json({ message: "data get successfully!", success: true, data: subjects })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}