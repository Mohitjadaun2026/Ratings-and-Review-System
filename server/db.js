const mysql = require('mysql2');

const db = mysql.createConnection({
  host: '217.21.87.103',
  user: 'u133932327_mohit', // use your MySQL username
  password: 'Mohit@0824jadaun',  // use your MySQL password
  database: 'u133932327_mohit'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('Connected to MySQL database.');
});

module.exports = db;
