var mongoose = require('mongoose'),
Schema = mongoose.Schema;

var PlaceSchema = new Schema({
    place: String,
    year: Number,
    status: String
  });



var Place = mongoose.model('Place', PlaceSchema);

var place = new Place({place: "Amsterdam"});
place.year = 2015;
place.status = "vacation, #eurotrip15";
place.save();

module.exports = Place;
