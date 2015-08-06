/*jslint node: true, indent: 2,nomen:true */
'use strict';
var express = require('express'),
  router = express.Router(),
  Venue = require('../models/venues'),
  expressJoi = require('express-joi'),
  validateVenue = {
<<<<<<< HEAD:Server/routes/venuesRoutes.js

    name: expressJoi.Joi.types.String().min(5).max(30).required(),
    size: expressJoi.Joi.types.Number().positive().required(),
    price: expressJoi.Joi.types.Number().positive().required()
  };
router.patch('/feature/:id', expressJoi.joiValidate({feature: expressJoi.Joi.types.String().required()}), function (req, res) {

=======
    capacity: expressJoi.Joi.types.Number().positive().required(),
    name: expressJoi.Joi.types.String().min(5).max(30).required(),
    size: expressJoi.Joi.types.Number().positive().required(),
    price: expressJoi.Joi.types.Number().positive().required(),
  };

router.patch('/feature/:id', function (req, res) {
>>>>>>> User:routes/venuesRoutes.js
  Venue
      .findByIdAndUpdate(req.path.substring(9),
      {$push: {features: {feature: req.body.feature, option: req.body.option}}},
      function (err, result) {
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
<<<<<<< HEAD:Server/routes/venuesRoutes.js

=======
>>>>>>> User:routes/venuesRoutes.js
      });
});

router.patch('/photo/:_id', expressJoi.joiValidate({imageURL : expressJoi.Joi.types.String().required()}), function (req, res) {
  Venue
    .findByIdAndUpdate(req.path.substring(7),
      {$push: {imageURL: req.body.imageURL}},
      function (err, result) {
        console.log(result);
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
      });
});
<<<<<<< HEAD:Server/routes/venuesRoutes.js

router.patch('/busyDate/:_id', expressJoi.joiValidate({busyDate : expressJoi.Joi.types.Date().required()}), function (req, res) {
  console.log(req.path.substring(10));
  Venue
    .findByIdAndUpdate(req.path.substring(10),
      {$push: {busyDate: req.body.busyDate}},
      function (err, result) {
        console.log(result);
        if (err) {
          console.error(err);
          return res.status(404);
        }
        res.send(result);
      });
});
=======
>>>>>>> User:routes/venuesRoutes.js


router.post('/', expressJoi.joiValidate(validateVenue), function (req, res) {
  var venue = new Venue({
    name: req.body.name,
    position: {
      lat: req.body.lat,
      long: req.body.long
    },
    imageURL: [],
    size: req.body.size || 0,
    price: req.body.size || 0,
    features: [],
    busyDate: [],
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
  Venue
    .find(
      req.query,
      function (err, venues) {
        if (err) {
          return console.error(err);
        }
        console.log(req.params);
        res.send(venues);
      }
<<<<<<< HEAD:Server/routes/venuesRoutes.js
    );
=======
      console.log(req.params);
      res.send(venues);
    }
  );
>>>>>>> User:routes/venuesRoutes.js
});

router.get('/:_id', function (req, res) {
  Venue
    .findOne({
      _id: req.params._id
    },
<<<<<<< HEAD:Server/routes/venuesRoutes.js
      function (err, user) {
=======
      function (err, venueTemp) {
>>>>>>> User:routes/venuesRoutes.js
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
<<<<<<< HEAD:Server/routes/venuesRoutes.js
    function (err, user) {
=======
    function (err, venueTemp) {
>>>>>>> User:routes/venuesRoutes.js
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
<<<<<<< HEAD:Server/routes/venuesRoutes.js
  Venue
    .remove(function (err) {
      if (err) {
        return console.error(err);
      }
      console.log(req.params);
      res.send({
        succes: true,
        message: 'Everything was deleted'
      });
=======
  Venue.remove(function (err) {
    if (err) {
      return console.error(err);
    }
    console.log(req.params);
    res.send({
      succes: true,
      message: 'Everything was deleted'
>>>>>>> User:routes/venuesRoutes.js
    });
});

router.patch('/:_id', function (req, res) {
<<<<<<< HEAD:Server/routes/venuesRoutes.js
  Venue.update({
    _id: req.params._id
  },
    function (err, user) {
      if (err) {
        return console.error(err);
      }
      if (user.result === 0) {
        res.send({
          success: true,
          message: 'No user with that ID found'
        });
      } else {
=======
  Venue
    .findByIdAndUpdate(req.path.substring(1),
      req.body,
      function (err, venue) {
        if (err) {
          return console.error(err);
        }
>>>>>>> User:routes/venuesRoutes.js
        res.send({
          success: true,
          message: 'Users with ID UPDATED: ' + req.params._id,
          updatedUser: venue
        });
<<<<<<< HEAD:Server/routes/venuesRoutes.js
      }
    });
=======
      });
>>>>>>> User:routes/venuesRoutes.js
});

module.exports = router;
