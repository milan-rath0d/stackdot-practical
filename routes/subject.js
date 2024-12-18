const express = require('express');
const subject = require('../controllers/master/subject');
const router = express.Router();

router.post('/add', subject.addSubject)
router.get('/get/:standardId', subject.getSubject)

module.exports = router;