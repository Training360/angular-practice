var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('users', {
    title: 'Users',
    lead: 'This page shows a list of users.'
  });
});

module.exports = router;
