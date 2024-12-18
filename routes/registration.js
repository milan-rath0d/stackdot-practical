const express = require('express');
const router = express.Router();
const registration = require('../controllers/registration')

router.post('/registration', registration.Registration)

module.exports = router;