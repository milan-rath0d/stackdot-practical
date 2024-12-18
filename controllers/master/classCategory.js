const ClassCategory = require("../../models/master/classCategory");

exports.addClassCategory = async (req, res) => {
    try {
        const classCategory = new ClassCategory(req.body)
        await classCategory.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getClassCategory = async (req, res) => {
    try {
        const classCategory = await ClassCategory.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: classCategory })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}