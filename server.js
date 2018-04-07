var express = require('express');
var app = express(); 
var path = require('path');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongo = require('mongodb');
var cookieParser = require('cookie-parser');
var flash = require('connect-flash');
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
var mysql = require('mysql');
var helpers = require('handlebars-helpers')();
var util = require('util');
var favicon = require('serve-favicon');
  

  var fs = require('fs');
  require('dotenv').config();
  
// ROUTES AND REQUIRED FILES
  var routes = require('./routes/routes');

  
// HANDLEBARS ENGINE SETUP
  var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
  app.engine('handlebars', handlebars.engine);
  app.set('view engine', 'handlebars');
  app.use(express.static(__dirname + '/public'));
  app.use(favicon(path.join(__dirname, 'public/images', 'favicon.ico')));


// SET PORT AND PUBLIC DIRECTORIES
  app.disable('x-powered-by');
  app.listen(process.env.PORT || 8080, function(){
    console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
  });
  
  
// MIDDLEWARE
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({extended: false}));

// ROUTING

  app.use('/', routes);

  app.use(function(err, req, res, next){
    console.error(err.stack);
    res.status(500);
    res.render('500');
  });

  app.get('*', function(req, res){
    res.render('404');
  });

module.exports = app;
  