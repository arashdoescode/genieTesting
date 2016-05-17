var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
  owner: { type: Schema.Types.ObjectId, ref: 'Place' },
  name: String,
  categories: [{ type: String, unique: true }],
  description: String,
  price: Number
});

module.exports = mongoose.model('Menu', MenuSchema);
