var async = require('async');
var request = require('request');


var Order = require('../../models/order');

// GST function
function GSTCalculation(price) {
  return 0.06 * price;
}

// deliveryFees algorithm
function deliveryFees(origin, destination) {
  result = origin + destination;
  return result;

}

// Algorithm for total price
function totalPrice(price, deliveryFees, gst) {
  totalPrice = price + deliveryFees + gst
  return totalPrice
}

module.exports = function(app, express) {

  app.post('/order', function(req, res, next) {

    var name = req.body.name;
    var order = req.body.order;
    var instruction = req.body.instruction;
    var collectionAddress = req.body.collectionAddress;
    var deliveryAddress = req.body.deliveryAddress;
    var postCode = req.body.postCode;
    var city = req.body.city;
    var estimatePrice = req.body.estimatePrice;
    var amountCash = req.body.amountOfCash;


  });

  app.get('/order-getting', function(req, res, next) {
    res.json("Hello World");
  });

  app.post('/order-test', function(req, res, next) {
    var placeName = req.body.placeName;
    var orderName = req.body.orderName;

    var order = new Order();
    order.placeName = req.body.placeName;
    order.orderName = req. body.orderName;
    // Need to use Socket.io for realtime communication
    order.save(function(err) {
      if (err) return next(err);
      res.json("Successfully ordered");
    });

  });


  // List of restaurants nearby to point A
  // app.get('/places', function(req, res, next) {
  //   Place.find({}, function(err, places) {
  //     if (err) {
  //       res.json(err);
  //     } else {
  //       res.json(places);
  //     }
  //   });
  // });

  // Single place id
  // app.get('/places/:id', function(req, res, next) {
  //   Place.findOne(req.params.id, function(err, place) {
  //     if (err) {
  //       res.json(err);
  //     } else {
  //       res.json(place);
  //     }
  //   });
  // });

  // Every Place will have many foods
  // app.get('/places/:menu', function(req, res, next) {
  //   Menu.findOne(req.params.menu, function(err, menus) {
  //     if (err) {
  //       res.json(err);
  //     } else {
  //       res.json(menus);
  //     }
  //   });
  // });

  app.get('/testMapApi', function(req, res, next) {
    request('https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyBGh-q5NCZI8CkBpArgDTBv4SLlxzLVnpI', function (error, response, body) {
      if (!error && response.statusCode == 200) {
        console.log(body) // Show the HTML for the Google homepage.
        console.log(body.destination_addresses);
        // res.json({ body: body, address: body.origin_addresses[0]});
      }
    })
  })

}
