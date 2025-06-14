const mysql = require('mysql2');

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root', // use your MySQL username
  password: 'Mohit@123',  // use your MySQL password
  database: 'ratings_db'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;