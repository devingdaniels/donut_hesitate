// Get an instance of mysql we can use in the app
const mysql = require("mysql");

// Create a 'connection pool' using the provided credentials
const pool = mysql.createPool({
  connectionLimit: 10,
  host: "",
  user: "",
  password: "",
  database: "",
});

// Export it for use in our application
module.exports.pool = pool;
