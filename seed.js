// This file allows us to seed our application with data
// simply run: `node seed.js` from the root of this project folder.

var db = require('./models');
var Place = require('./models/place.js');

var new_place = {city: "Copenhagen"};

var allPlaces = [{
      place: "Amsterdam",
      year: 2015,
      status: "vacation, #eurotrip15"
    },
    {
      place: "Dallas, TX",
      year: 2013,
      status: "lived there for a year and a half"
    },  
    {
      place: "Los Angeles",
      year: 2015,
      status: "work trip"
}];

db.Place.create(allPlaces, function(err, place){
	if (err){
    	return console.log("Error:", err);
  	}
  	console.log("Created new place", place._id)
    process.exit(); // we're all done! Exit the program.
});

module.exports = allPlaces;