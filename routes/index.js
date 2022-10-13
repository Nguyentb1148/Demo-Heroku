var express = require('express');
var router = express.Router();
var authen=require('../models/authenticator');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ATN SHOP' });
});
/* GET home page. */
router.post('/', function(req, res, next) {
  res.render('login', { title: 'ATN SHOP',message:"Please  input username and password" });
});
/* post login */
router.post('/login', async function(req, res, next) {
  let username=req.body.username;
  let password=req.body.password;
  console.log(username+ " : "+password)
  let authenticated=await authen(username,password)
  console.log(authenticated)
  if(authenticated==true){
    res.render('users', { title: 'Hello men' });
  }
  else
  {
    res.render('login', { title: 'ATN SHOP',message:"Wrong username or password" });
  }
});
module.exports = router;
