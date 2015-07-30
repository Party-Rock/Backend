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

router.use(function(req, res, next) {
  console.log('La madre entró a las rutas');
  next();
});

myRoutes(app);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
