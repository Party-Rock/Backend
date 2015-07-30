var mongoose = require('mongoose');

var venueSchema = mongoose.Schema({
  name: String,
  position: {lat: Number, long: Number},
  imageURL: Array,
  size: Number,
  price: Number,
  features: Array,
  ratingAverage: Number,
  rating: Array
});


module.exports = mongoose.model('Venues', venueSchema);
