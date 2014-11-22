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

  var queryString = "SELECT * FROM ??";
  var queryArgs = ['messages'];

  dbConnection.query(queryString, queryArgs, function(err, results) {
    callback(results);
  });
};

var postMessage = function(data, callback){
  console.log('posting message');
  var queryString = "INSERT INTO messages (text, user_id, room_id) VALUES (?, ?, ?)";
  var queryArgs = [data.text, data.user_id, data.room_id];

  dbConnection.query(queryString, queryArgs, function(err) {
    callback(err);
  });

};

var getAllUsers = function() {

};

var addUser = function(data, callback) {
  var queryString = "INSERT INTO users (name) VALUES (?)";
  var queryArgs = [data.username];

  dbConnection.query(queryString, queryArgs, function(err) {
    callback(err);
  });
};

exports.getAllMessages = getAllMessages;
exports.postMessage = postMessage;
exports.getAllUsers = getAllUsers;
exports.addUser = addUser;
