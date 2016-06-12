/*jshint node:true*/
var MUSICIAN_FIXTURES = [{
  "id": "1",
  "first_name": "Corey",
  "last_name": "Taylor",
  "band_id": "3"
},
{
  "id": "2",
  "first_name": "Rodrigo",
  "last_name": "Sanchez",
  "band_id": "1"
},
{
  "id": "3",
  "first_name": "Gabriella",
  "last_name": "Quintero",
  "band_id": "1"
},
{
  "id": "4",
  "first_name": "Richard",
  "last_name": "Baker",
  "band_id": "2"
},
{
  "id": "5",
  "first_name": "Jesse",
  "last_name": "Leach",
  "band_id": "4"
},
{
  "id": "6",
  "first_name": "Sid",
  "last_name": "Wilson",
  "band_id": "3"
}]; 

var BAND_FIXTURES = [{  
  "id": "1",
  "band_id": "1",
  "name": "Rodrigo y Gabriella"
},
{
  "id": "2",
  "band_id": "2",
  "name": "MGK"
},
{
  "id": "3",
  "band_id": "3",
  "name": "Slipknot"
},
{
  "id": "4",
  "band_id": "4",
  "name": "Killswitch Engage"
}];

module.exports = function(app) {
  var express = require('express');
  var serverRouter = express.Router();

  serverRouter.get('/', function(req, res) { 
    res.jsonp({musicians: MUSICIAN_FIXTURES, bands: BAND_FIXTURES});
  });

  serverRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  serverRouter.get('/:id', function(req, res) {
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

  serverRouter.put('/:id', function(req, res) {
    res.send({
      'server': {
        id: req.params.id
      }
    });
  });

  serverRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/server', require('body-parser').json());
  app.use('/api/musicians', serverRouter);
};
