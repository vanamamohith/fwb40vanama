var express = require('express');
var router = express.Router();
var client_count = 0;

function update()
{
  client_count++;
  document.getElementById('target').innerHTML='Value Now '+ client_count;
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
