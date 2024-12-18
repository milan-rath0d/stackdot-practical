const express = require('express');
const medium = require('../controllers/master/medium');
const router = express.Router();

router.post('/add', medium.addMedium)
router.get('/get', medium.getMedium)

module.exports = router;