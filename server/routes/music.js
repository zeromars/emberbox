var MUSICIAN_FIXTURES = [{
  "id": "1",
  "first_name": "Corey",
  "last_name": "Taylor",
  "band": "3"
},
{
  "id": "2",
  "first_name": "Rodrigo",
  "last_name": "Sanchez",
  "band": "1"
},
{
  "id": "3",
  "first_name": "Gabriella",
  "last_name": "Quintero",
  "band": "1"
},
{
  "id": "4",
  "first_name": "Richard",
  "last_name": "Baker",
  "band": "2"
}];

var BAND_FIXTURES = [{
  "id": "1",
  "name": "Rodrigo y Gabriella"
},
{
  "id": "2",
  "name": "MGK"
},
{
  "id": "3",
  "name": "Slipknot"
}];

module.exports = function(app) {
  var express = require('express');
  var albumsRouter = express.Router();

  musicRouter.get('/', function(req, res) {
    res.jsonp({musicians: MUSICIAN_FIXTURES, bands: BAND_FIXTURES});
  });

  musicRouter.get('/:id', function(req, res) {
    var requestedMusician = MUSICIAN_FIXTURES.filter(function(musician) {
      if (musician.id === req.params.id) {
        var requestedBand = BAND_FIXTURES.filter(function(band) {
          if (band.id === musician.band) {            
            musician.bandName = band.name;
          }
        });        
        return musician;
      }
    })[0];
    res.jsonp({music: requestedMusician});
  });

  app.use('/api/tunes', musicRouter);
};

