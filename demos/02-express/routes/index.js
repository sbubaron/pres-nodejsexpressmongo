var express = require('express');
var router = express.Router();
var debug = require('debug')('02-express:index-route')

/* GET home page. */
router.get('/', function(req, res, next) {
  
  debug("index route");
  
  res.render('index', { title: 'Express' });
});


router.get('/test', function(req, res, next) {
  
  debug("test route");
  
  res.render('index', { title: 'Test Variable Express' });
});

module.exports = router;
