var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
var dbConnection = mysql.createConnection({
  user: "root",
  password: "",
  database: "chat"
});

dbConnection.connect();

var getAllMessages = function(callback){

  var queryString = "SELECT * FROM messages";
  var queryArgs = [];

  dbConnection.query(queryString, queryArgs, function(err, results) {
    callback(results);
  });
};

var postMessage = function(message){
  var queryString = "INSERT INTO messages (text, user_id, room_id) VALUES (message)";
  var queryArgs = [];

  dbConnection.query(queryString, queryArgs, function(err) {
    callback(err);
  });
};

var getAllUsers = function() {

};

var addUser = function(user) {

};

exports.getAllMessages = getAllMessages;
exports.postMessage = postMessage;
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
