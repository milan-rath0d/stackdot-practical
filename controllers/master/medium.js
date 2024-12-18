const Medium = require("../../models/master/medium");

exports.addMedium = async (req, res) => {
    try {
        const medium = new Medium(req.body)
        await medium.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getMedium = async (req, res) => {
    try {
        const medium = await Medium.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: medium })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}