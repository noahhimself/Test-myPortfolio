var express = require('express');
var mailgun = require('mailgun');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;
