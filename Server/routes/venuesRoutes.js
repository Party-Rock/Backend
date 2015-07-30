var express = require('express'),
router = express.Router(),
VENUE = require('../models/venues');

router.post('/', function (req, res) {
  console.log('HOLA');
});

router.get('/', function  (req,res) {
  VENUE.find(function (err,venues) {
    if (err){
      return console.error('this shit works but '+ err);
    }
  res.send(venues);
  });
});


module.exports = router;
