const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "hyfuser",
  password: "hyfpassword",
  database: "hyfusers_database",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

pool.query("SELECT 1 + 1 AS solution", function (error, results, fields) {
  if (error) throw error;
  console.log("The solution is: ", results[0].solution);
});

module.exports = pool;
/**
 * 
  CREATE USER 'hyfuser'@'localhost' IDENTIFIED WITH mysql_native_password BY 'hyfpassword';
GRANT ALL PRIVILEGES ON hyfusers_database.* TO 'hyfuser'@'localhost';
FLUSH PRIVILEGES;

 */
