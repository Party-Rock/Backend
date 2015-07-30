/*jslint node: true, indent: 2,nomen:true */
'use strict';

var express = require('express'),
  router = express.Router(),
  VENUE = require('../models/venues');

router.post('/', function (req, res) {
  var venue = new VENUE({
    name: req.body.name,
    position: {
      lat: req.body.lat,
      long: req.body.long
    },
    imageURL: [],
    size: req.body.size,
    price: req.body.size,
    features: [],
    ratingAverage: 0,
    rating: []
  });
  venue.save(function (err) {
    if (err) {
      return console.error(err);
    }
    res.status(200)
      .send({
        saved: true,
        _id: venue.id
      });
  });
});

router.get('/', function (req, res) {
  VENUE.find(function (err, venues) {
    if (err) {
      return console.error(err);
    }
    console.log(req.params);
    res.send(venues);
  });
});


module.exports = router;
