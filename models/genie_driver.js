var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var GenieDriverSchema = new Schema({
  associate: { type: Schema.Types.ObjectId, ref: 'User'},
  history: [{ type: String }],
});

module.exports = mongoose.model('GenieDriver', GenieDriverSchema);
