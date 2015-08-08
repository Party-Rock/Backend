/*jslint node: true, indent: 2,nomen:true */
'use strict';
var venues = require('./venuesRoutes'),
  users = require('./userRoutes'),
  reservations = require('./reservationsRoutes');

module.exports = function (app) {
  app.use('/v1/users', users);
  app.use('/v1/venues', venues);
  app.use('/v1/reservations', reservations);
};
