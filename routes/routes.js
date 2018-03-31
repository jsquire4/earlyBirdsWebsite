var express = require('express');
var router = express.Router();

router.get('/', function(req, res){
  res.render('home', {user: req.user});
});

router.get('/about', function(req, res){
  res.render('about');
});

router.get('/products', function(req, res){
  res.render('products');
});

module.exports = router; 