var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      db.getAllMessages(callback);

    }, // a function which produces all the messages
    post: function (data, callback) {
      db.postMessage(data, callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {
      db.getAllUsers();
    },
    post: function (data) {
      db.addUser();
    }
  }
};


