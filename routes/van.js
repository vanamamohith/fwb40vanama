var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('van', { title: 'Search Result Van ' });
});

module.exports = router;
