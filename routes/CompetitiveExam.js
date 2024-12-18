const express = require('express');
const exam = require('../controllers/master/CompetitiveExam');
const router = express.Router();

router.post('/add', exam.addExam)
router.get('/get', exam.getExam)

module.exports = router;