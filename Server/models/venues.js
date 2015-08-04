var mongoose = require('mongoose'),
ObjectId = mongoose.Schema.ObjectId;

var venueSchema = mongoose.Schema({
  name: String,
  position: {
    lat: Number,
    long: Number
  },
  imageURL: [String],
  size: Number,
  price: Number,
  features: [{feature:String,option: Boolean, _id : false }],
  ratingAverage: Number,
  rating: [{grade: Number, comment: String, userId: ObjectId}]
});


module.exports = mongoose.model('Venues', venueSchema);
