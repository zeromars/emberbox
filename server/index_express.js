// To use it create some files under `routes/`
// e.g. `server/routes/ember-hamsters.js`
//
// module.exports = function(app) {
//   app.get('/ember-hamsters', function(req, res) {
//     res.send('hello');
//   });
// };
var express = require('express');
var app = express();

var music = require('./routes/music');

app.use('/api/tunes', music);
//app.use(express.static('../app'));
app.listen(3000, function () {
  console.log('Starting app!');
});