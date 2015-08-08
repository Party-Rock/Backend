/*jslint node: true, indent: 2,nomen:true */
'use strict';
var express = require('express'),
  router = express.Router(),
  Venue = require('../models/venues'),
  expressJoi = require('express-joi'),
  validateVenue = {
    name: expressJoi.Joi.types.String().min(5).max(30).required(),
    size: expressJoi.Joi.types.Number().positive().required(),
    capacity: expressJoi.Joi.types.Number().positive().required(),
    price: expressJoi.Joi.types.Number().positive().required()
  };

router.patch('/feature/:id', function (req, res) {
  Venue
      .findByIdAndUpdate(req.path.substring(9),
      {$push: {features: {feature: req.body.feature, option: req.body.option}}},
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
      });
});

router.patch('/photo/:_id', expressJoi.joiValidate({imageURL : expressJoi.Joi.types.String().required()}), function (req, res) {
  Venue
    .findByIdAndUpdate(req.path.substring(7),
      {$push: {imageURL: req.body.imageURL}},
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
      });
});

router.patch('/rented/:_id', function (req, res) {
  console.log(req.path.substring(8));
  Venue
    .findByIdAndUpdate(req.path.substring(8),
      {$push: {rentedDate: req.body.rentedDate}},
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
      });
});

router.post('/', expressJoi.joiValidate(validateVenue), function (req, res) {
  var venue = new Venue({
    name: req.body.name,
    position: {
      lat: req.body.lat,
      long: req.body.long
    },
    imageURL: [],
    capacity: req.body.capacity || 0,
    size: req.body.size || 0,
    price: req.body.price || 0,
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
        _id: venue.id,
        object: venue
      });
  });
});

router.get('/', function (req, res) {
  Venue.find({$or: [req.query, {'size': {$lte: req.query.size || 0 }},
    {'capacity': {$lte: req.query.capacity || 0}},
      {'price': {$lte: req.query.price || 0 }}]},
    function (err, venues) {
      if (err) {
        return console.error(err);
      }
      console.log(req.params);
      res.send(venues);
    });
});

router.get('/:_id', function (req, res) {
  Venue
    .findOne({
      _id: req.params._id
    },
      function (err, venueTemp) {
        if (err) {
          return console.error(err);
        }
        if (venueTemp) {
          res.send(venueTemp);
        } else {
          var venueTempMessage = req.params._id + 'does not exists.';
          res.send({
            'status': '404 not found',
            'message': venueTempMessage
          });
        }
      });
});

router.delete('/:_id', function (req, res) {
  Venue.remove({
    _id: req.params._id
  },
    function (err, venueTemp) {
      if (err) {
        return console.error(err);
      }
      if (venueTemp.result === 0) {
        res.send({
          success: true,
          message: 'No venueTemp with that ID found'
        });
      } else {
        res.send({
          success: true,
          message: 'Users with ID deleted: ' + req.params._id
        });
      }
    });
});

router.delete('/', function (req, res) {
  Venue.remove(function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(req.params);
    res.send({
      succes: true,
      message: 'Everything was deleted'
    });
  });
});

router.patch('/:_id', function (req, res) {
  Venue
    .findByIdAndUpdate(req.path.substring(1),
      req.body,
      function (err, venue) {
        if (err) {
          return console.error(err);
        }
        res.send({
          success: true,
          message: 'Users with ID UPDATED: ' + req.params._id,
          updatedUser: venue
        });
      });
});

module.exports = router;
