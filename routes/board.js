const express = require('express');
const board = require('../controllers/master/board');
const router = express.Router();

router.post('/add', board.addBoard)
router.get('/get', board.getBoard)

module.exports = router;