const express = require('express');
const classCategory = require('../controllers/master/classCategory');
const router = express.Router();

router.post('/add', classCategory.addClassCategory)
router.get('/get', classCategory.getClassCategory)

module.exports = router;