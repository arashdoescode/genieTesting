var async = require('async');

var User = require('../models/user');
var GenieDriver = require('../models/genie-driver');
var Merchant = require('../models/merchant');

module.exports = function(app, express) {
  // website uses cookies while api use HTTP

  // GENIE-DRIVER ROUTE -- NO TOUCHING CUNT FUCK

  // Landing page // or home page.
  app.get('/', function(req, res, next) {
    if (req.user) {
      res.render('main/home');
    } else {
      res.render('main/landing');
    }
  });

  // Become a genie driver link
  app.get('/become-genie', function(req, res, next) {
    res.render('main/become-genie');
  });

  // register as a genie
  app.post('/become-genie', function(req, res, next) {
    async.waterfall([
      function(callback) {
        User.findOne(req.body.email, function(err, foundUser) {
          if (foundUser) {
            var genie = new GenieDriver();
            genie.associate = foundUser.id;
            genie.save(function(err) {
              if (err) {
                return next(err);
              } else {
                req.logIn(user, function(err) {
                  if (err) return next(err);
                  res.redirect('/genie/profile');
                });
              }
            });
          } else {
            var user = new User();
            user.email = req.body.email;
            user.firstname = req.body.firstname;
            user.lastname = req.body.lastname;
            user.password = req.body.password;
            user.phoneNumber = req.body.phoneNumber;
            user.save(function(err) {
              if (err) {
                return next(err);
              } else {
                callback(user);
              }
            });
          }
        });
      },
      function(user) {
        var genie = new GenieDriver();
        genie.associate = foundUser.id;
        genie.save(function(err) {
          if (err) {
            return next(err);
          } else {
            req.logIn(user, function(err) {
              if (err) return next(err);
              res.redirect('/genie/profile');
            });
          }
        });
      }
    ]);
  });


  // MERCHANT ROUTE -- NO TOUCHING CUNT FUCK


  // become a merchant link this won't be associated with become-merchant
  app.get('/merchant', function(req, res, next) {


  });

  // post the data to a Merchant Schema
  app.post('/become-merchant', function(req, res, next) {
    var merchant = new Merchant();
    merchant.email = req.body.email;
    merchant.name = req.body.name;
    merchant.password = req.body.password;
    merchant.phoneNumber = req.body.phoneNumber;
    merchant.save(function(err) {
      if (err) return next(err);
      req.logIn(merchant, function(err) {
        if (err) return next(err);
        res.redirect('/merchant/profile');
      });
    });
  });

  app.post('/post-menu', function(req, res, next) {
    //
  });


}
