const University = require("../../models/master/University");


exports.addUniversity = async (req, res) => {
    try {
        const uni = new University(req.body)
        await uni.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getUniversity = async (req, res) => {
    try {
        const uni = await University.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: uni })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}