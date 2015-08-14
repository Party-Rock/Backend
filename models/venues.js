/*jslint node: true, indent: 2,nomen:true */
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.Types.ObjectId;

var venueSchema = mongoose.Schema({
    name: String,
    position: {
      lat: Number,
      long: Number,
      colonia: String
    },
    description: String,
    imageURL: [String],
    size: Number,
    capacity: Number,
    rentedDate: [Date],
    price: Number,
    features: [{feature: String, option: Boolean, _id : false }],
    ratingAverage: Number,
    rating: [{grade: Number, comment: String, userId: ObjectId}]
  });


module.exports = mongoose.model('Venues', venueSchema);
