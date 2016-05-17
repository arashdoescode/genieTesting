
// User data
var bcrypt = require('bcryptjs');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({

  email: { type: String, unique: true, lowercase: true },
  password: { type: String, select: false },
  firstname: { type: String },
  lastname: { type: String },
  displayName: String,
  purchasedOrders: [{ type: String }],
  phoneNumber: Number,
  lastFourDigits: Number,
  facebook: String,
  location: String,

});

UserSchema.pre('save', function(next) {
  var user = this;
  if (!user.isModified('password')) {
    return next();
  }
  bcrypt.genSalt(10, function(err, salt) {
    bcrypt.hash(user.password, salt, function(err, hash) {
      user.password = hash;
      next();
    });
  });
});

module.exports = mongoose.model('User', UserSchema);
