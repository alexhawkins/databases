var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results) {
        res.writeHead(200);
        res.end(JSON.stringify(results) );
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(req.body, function(err){
        if (err) res.writeHead(501);
        else res.writeHead(201);
        res.end('');
      });

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res){},
    post: function (req, res) {
      models.users.post(req.body, function(err){
        if (err) res.writeHead(501);
        else res.writeHead(201);
        res.end('');
      });
    }
  }
};

