const mysql = require('mysql2/promise');

// Conexión a la base de datos

async function getConnection() {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASS, // <-- Pon aquí tu contraseña o en el fichero /.env en la carpeta raíz
    database: process.env.DB_NAME || 'Clase', // --> Cámbialo por tu schema de MySQL
  });

  connection.connect();

  return connection;
}

module.exports = {getConnection};