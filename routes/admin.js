var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource(admin)');
  res.render('admin',{title: 'Admin page',name:'nguyen'});       
});
router.post('/', function(req, res, next) {
  // res.send('respond with a resource(admin)');
  res.render('login',{title: 'login',name:'nguyen'});       
});

module.exports = router;
