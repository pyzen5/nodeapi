var express = require('express');
var router = express.Router();
var customer = require('./customer');

router.use('/customer', customer)

module.exports = router;
