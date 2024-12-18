const Degree = require("../../models/master/Degree");

exports.addDegree = async (req, res) => {
    try {
        const degree = new Degree(req.body)
        await degree.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getDegree = async (req, res) => {
    try {
        const degree = await Degree.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: degree })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}