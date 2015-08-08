/*jslint node: true, indent: 2,nomen:true */
'use strict';
var express = require('express'),
  router = express.Router(),
  Reservation = require('../models/reservations'),
  expressJoi = require('express-joi'),
  validateReservation = {
    userId: expressJoi.Joi.types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
    ownerId: expressJoi.Joi.types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
    venueId: expressJoi.Joi.types.String().regex(/^[0-9a-fA-F]{24}$/).required(),
    rentedDate: expressJoi.Joi.types.Date().required()
  };

router.get('/', function (req, res) {
  Reservation.find(
    req.query,
    function (err, reservations) {
      if (err) {
        return console.error(err);
      }
      console.log(req.params);
      res.send(reservations);
    }
  );
});


router.get('/:_id', function (req, res) {
  Reservation
    .findOne({
      _id: req.params._id
    },
      function (err, reservation) {
        if (err) {
          return console.error(err);
        }
        if (reservation) {
          res.send(reservation);
        } else {
          var reservationMessage = req.params._id + 'does not exists.';
          res.send({
            'status': '404 not found',
            'message': reservationMessage
          });
        }
      });
});

router.delete('/:_id', function (req, res) {
  Reservation.remove({
    _id: req.params._id
  },
    function (err, reservation) {
      if (err) {
        return console.error(err);
      }
      if (reservation.result === 0) {
        res.send({
          success: true,
          message: 'No reservation with that ID found'
        });
      } else {
        res.send({
          success: true,
          message: 'Reservations with ID deleted: ' + req.params._id
        });
      }
    });
});

router.patch('/:_id', function (req, res) {
  Reservation
    .findByIdAndUpdate(req.path.substring(1),
      req.body,
      function (err, reservation) {
        if (err) {
          return console.error(err);
        }
        res.send({
          success: true,
          message: 'Reservations with ID UPDATED: ' + req.params._id,
          updatedReservation: reservation
        });
      });
});


router.post('/', expressJoi.joiValidate(validateReservation), function (req, res) {
  var reservation = new Reservation({
    userId: req.body.userId,
    ownerId: req.body.ownedId,
    venueId: req.body.venueId,
    rentedDate: req.body.rentedDate
  });
  reservation.save(function (err) {
    if (err) {
      return res.send({Error: err});
    }
    res.status(200)
      .send({
        saved: true,
        _id: reservation.id,
        object: reservation
      });
  });
});

// ===============Debug purposes only==================

router.delete('/', function (req, res) {
  Reservation.remove(function (err) {
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
module.exports = router;
