//=========================== DATABASE CONNECTION ======================================

// Configure MySQL connection.
var mysql = require("mysql");

var connection;

// Set up my connection to check for JAWSDB for Heroku deployed version.
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password" ,
  database: "planit_db"
  });
};

// Establish connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  con.query("CREATE DATABASE planItdb", function (err, result) {
    if (err) throw err;
    console.log("Database created");
  });
});

//================================== EXPORTS ============================================

// Export connection for use by my ORM.
module.exports = connection;