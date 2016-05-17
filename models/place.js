var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var PlaceSchema = new Schema({
  name: String,
  address: String,
  timeOpen: String,
  timeClosed: String,
  menus: [{
    category: { type: String },
    name: { type: String },
    description: { type: String },
    price: Number
  }]
});

module.exports = mongoose.models('Place', PlaceSchema);
