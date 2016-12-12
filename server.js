// require express and other modules
var express = require('express'),
    app = express();

// parse incoming urlencoded form data
// and populate the req.body object
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());



/************
 * DATABASE *
 ************/

var db = require('./models');

/**********
 * ROUTES *
 **********/

// Serve static files from the `/public` directory:
// i.e. `/images`, `/scripts`, `/styles`
app.use(express.static('public'));

/*
 * HTML Endpoints
 */

app.get('/', function homepage(req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/*
app.get('/api/places', function index(req, res) {
  res.json({place: places});
});
*/
//
app.get('/api/places/:id', function show(req, res) {
  var idd = req.params.id;
  db.Place.findOne({'_id': idd}, function(err, places) {
    res.json(places);
  }) 
});

/*
app.post('/api/places', function create(req, res) {
  var newPlace = req.body; 
  if (places.length > 0) {
    newPlace._id = places[places.length - 1]._id + 1;
  }
  else {
    newPlace._id = 1;
  }
  places.push(newPlace);
  res.json(newPlace); 
});

app.put('/api/places/:id', function update(req, res) {

  for (var i = 0; i < places.length; i++) {
    if (req.params.id == places[i]._id) {
    //    places[i].task = req.body.task;
    //    places[i].description = req.body.description;
        res.json(places[i]);
    }
  }
});

app.delete('/api/places/:id', function destroy(req, res) {
  for (var i = 0; i < places.length; i++) {
    if (req.params.id == places[i]._id) {
      places.splice(places[i], 1);  
    }
  }
  res.json(places[i]);
});

*/

//JSON API Endpoints
app.get('/api', function api_index(req, res) {
  // TODO: Document all your api endpoints below
  res.json({
    message: "Welcome to my personal API! Here's what you need to know...",
    documentation_url: "https://github.com/larry-kraus/express-personal-api/README.md",
    base_url: "https://enigmatic-brook-28013.herokuapp.com",
    endpoints: [
      {method: "GET", path: "/api", description: "Describes all available endpoints"},
      {method: "GET", path: "/api/profile", description: "Here's some stuff about me..."},
      {method: "POST", path: "/api/places", description: "Here are some of the cool places I've been..."},
      {method: "UPDATE", path: "/api/places/:id", description: "Update a place"},
      {method: "DELETE", path: "/api/places/:id", description: "Delete a place"}
    ]
  })
});

app.get('/api/profile', function profile_index(req, res) {
  res.json({
    name: "Larry Kraus",
    github_link: "https://github.com/larry-kraus",
    github_profile_image: "https://avatars0.githubusercontent.com/u/22946736?v=3&s=400",
    current_city: "Denver, CO",
    pets: [{name: "Timber", type: "dog", breed: "Labrador Retreiver, black"}, {name: "Reba", type: "dog", breed: "Labrador Retreiver, chocolate"}]
  });
});



app.get('/api/places', function places_index(req, res) {
  console.log("oh yeah");
  res.json(

)});

/**********
{name: "foo", type: "Cat", breed: "Siamese"}
 * SERVER *
 **********/

// listen on port 3000
app.listen(process.env.PORT || 3000, function () {
  console.log('Express server is up and running on http://localhost:3000/');
});
