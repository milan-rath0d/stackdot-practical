const Board = require("../../models/master/board");

exports.addBoard = async (req, res) => {
    try {
        const board = new Board(req.body)
        await board.save();
        res.status(201).json({ message: "created!", success: true })
    } catch (err) {
        console.log(err)
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}

exports.getBoard = async (req, res) => {
    try {
        const board = await Board.find({})

        res.status(201).json({ message: "data get successfully!", success: true, data: board })
    } catch (err) {
        res.status(500).json({ success: false, message: "Error in creating", error: err })
    }
}