const express = require('express');
const standard = require('../controllers/master/Standard');
const router = express.Router();

router.post('/add', standard.addStandard)
router.get('/get/:classCategoryId', standard.getStandard)

module.exports = router;