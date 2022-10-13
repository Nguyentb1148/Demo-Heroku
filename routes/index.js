var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATN SHOP' });
});
/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('login', { title: 'ATN SHOP' });
});
/* GET login page. */
router.post('/login', function(req, res, next) {
  res.render('users', { title: 'ATN SHOP' });
});
/* GET login page. */
router.post('/login', function(req, res, next) {
  res.render('users', { title: 'ATN SHOP' });
});
module.exports = router;
