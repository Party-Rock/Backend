/*jslint node: true, indent: 2,nomen:true */
'use strict';
var venues = require('./venuesRoutes');

module.exports = function (app) {
  app.use('/v1/venues', venues);
};
