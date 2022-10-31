var express = require('express');
var router = express.Router();
var authen = require('../models/authenticator');
var pg_con = require('../models/pg_config');
var display_products = require('../models/TableDisplay');
var gen_box = require('../models/select_box');
var session;
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'ATN SHOP' });
});

router.post('/', function (req, res, next) {
  res.render('login', { title: 'ATN SHOP', message: 'Please input username and password' });
});

// Process for POST Request
router.post('/login', async function (req, res, next) {
  let username = req.body.username;
  let password = req.body.password;
  session = req.session;
  console.log(username+" : "+password);
  let [authenticated, shopId, role] = await authen(username, password);
  console.log(authenticated);
  //for user
  if (authenticated == true & role == 'user') {
    session.user_id = username;
    session.shopId = shop_id;
    session.role = role;
    res.redirect('/users');
  }
  // for admin
  else if (authenticated == true & role == 'director') {
    session.user_id = username;
    session.shop_id = shopId;
    session.role = role;
    res.redirect('/admin');
  }
  else 
  {
    res.render('login', {title: 'ATN SHOP', message: 'Wrong username or password!'});
  }
});




router.post('/login/shops', function (req, reks, next) {
  pg_con.connect(function (err) {
    var query = `SELECT * FROM shops`;
    pg_con.query(query, (err, data) => {
      if (err)
        console.log(err);
      else {
        console.log(data.rows);
        console.log('successfully connected to shops!')
        res.render('shops', {
          title: 'shops',
          message: 'Shops management',
          shopData: data.rows
        })
      }
    })
  })

});


// logout
router.get('/logout', function (req, res, next) {
  req.session.destroy();
  res.render('index', { title: 'ATN SHOP' });
})


module.exports = router;