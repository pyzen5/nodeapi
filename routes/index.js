var express = require('express');
var router = express.Router();
var customer = require('./customer');
var profile = require('./profile');

router.use('/customer', customer)
router.use('/profile', profile)

module.exports = router;
