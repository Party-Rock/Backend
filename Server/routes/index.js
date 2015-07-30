var venues = require('./venuesRoutes');

module.exports = function (app) {
  app.use('/v1/venues', venues);
};
