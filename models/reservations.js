/*jslint node: true, indent: 2,nomen:true */
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

var reservationSchema = mongoose.Schema({
    userId: ObjectId,
    ownerId: ObjectId,
    venueId: ObjectId,
    rentedDate: Date
  });


module.exports = mongoose.model('Reservations', reservationSchema);
