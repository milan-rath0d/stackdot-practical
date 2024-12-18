const InstituteType = require("../../models/master/instituteType")


exports.addInstituteType = async (req, res) => {
    try {
        const instituteType = new InstituteType(req.body)
        await instituteType.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getInstituteType = async (req, res) => {
    try {
        const instituteType = await InstituteType.find({})

        res.status(201).json({ message: "institute get successfully!", success: true, data: instituteType })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}