const express = require('express');
const router = express.Router();
const instituteType = require('../controllers/master/InstituteType')

router.post('/add', instituteType.addInstituteType)
router.get('/get', instituteType.getInstituteType)

module.exports = router;