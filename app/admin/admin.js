var async = require('async');

module.exports = function(app, express) {


  // Admin Dashboard
  app.get('/dashboard', function(req, res, next) {
    res.render('admin/dashboard');
  });

  app.get('/')

  app.post('/deactivate-genie', function(req, res, next) {
    // Write some logic
  });

  app.post('/activate-genie', function(req, res, next) {
    // false === deactivate
    GenieDriver.findOne(req.body.id, function(err, foundGenie) {
      if (foundGenie && (foundGenie.status === false)) {
        foundGenie.status = true;
        // Do some validations as well
        return res.redirect('/genie-list-users');
      } else {
        // Do some validations
        return res.redirect('/genie-list-users');
      }
    });
  });

  app.get()






}
