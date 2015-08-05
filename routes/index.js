/*jslint node: true, indent: 2,nomen:true */
'use strict';
var venues = require('./venuesRoutes'),
  users = require('./userRoutes');

module.exports = function (app) {
  app.use('/v1/users', users);
  app.use('/v1/venues', venues);
};
