const Standard = require("../../models/master/standard");

exports.addStandard = async (req, res) => {
    try {
        const standard = new Standard(req.body)
        await standard.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getStandard = async (req, res) => {
    try {
        const standard = await Standard.find({ classCategoryId: req.params.classCategoryId })

        res.status(201).json({ message: "data get successfully!", success: true, data: standard })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}