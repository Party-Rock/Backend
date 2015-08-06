/*jslint node: true, indent: 2,nomen:true */
var mongoose = require('mongoose'),
  ObjectId = mongoose.Schema.ObjectId;

var venueSchema = mongoose.Schema({
    name: String,
    position: {
      lat: Number,
      long: Number,
      colonia: String
    },
    imageURL: [String],
    size: Number,
    capacity: Number,
    price: Number,
    features: [{feature: String, option: Boolean, _id : false }],
    ratingAverage: Number,
    rating: [{grade: Number, comment: String, userId: ObjectId}]
  });


module.exports = mongoose.model('Venues', venueSchema);
