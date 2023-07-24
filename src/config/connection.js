const mysql = require('mysql2/promise');

// Conexión a la base de datos

async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
  });

  connection.connect();

  return connection;
}

module.exports = {getConnection};