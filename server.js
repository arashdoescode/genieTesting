// Require all the libraries
var express = require('express'); // for creating REST api
var bodyParser = require('body-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var request = require('request');

var config = require('./config');

var app = express();

mongoose.connect(config.MONGO_URI, function(err) {
  if (err) {
    console.log(err);
  } else {
    console.log("Connected to the database");
  }
});

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));

require('./app/api/auth')(app, express);
require('./app/api/main')(app, express);
// app.use();

app.listen(config.PORT, function(err) {
  if (err) throw err;
  console.log("Server is Running on port 3000");
});
