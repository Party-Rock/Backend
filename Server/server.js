/*jslint node: true, indent: 2,nomen:true */
'use strict';
// BASE SETUP
// =============================================================================
var express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  mongoose = require('mongoose'),
  mongoURL = 'mongodb://localhost:27017/PartyRock', //esta madre es temporal, es para hacerlo localmente, después cambiamos la direccion
  router = express.Router(),
  myRoutes = require('./routes/index');

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var port = process.env.PORT || 8080; // set our port

mongoose.connect(mongoURL);
// ROUTES
// =============================================================================

router.use(function (next) {
  next();
});

myRoutes(app);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Hola ocioso, esta n puerto' + port);
