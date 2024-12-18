const express = require('express');
const uni = require('../controllers/master/university');
const router = express.Router();

router.post('/add', uni.addUniversity)
router.get('/get', uni.getUniversity)

module.exports = router;