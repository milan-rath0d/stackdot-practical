const express = require('express');
const degree = require('../controllers/master/degree');
const router = express.Router();

router.post('/add', degree.addDegree)
router.get('/get', degree.getDegree)

module.exports = router;