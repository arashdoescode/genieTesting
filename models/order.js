var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var OrderSchema = new Schema({
  placeName: String,
  orderName: String
});


module.exports = mongoose.model('Order', OrderSchema);
