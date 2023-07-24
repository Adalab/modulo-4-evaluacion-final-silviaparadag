// IMPORTS

const express = require("express");
const cors = require("cors");
const env = require('dotenv');
env.config();

console.log(process.env);


// Run SERVER

const server = express();

// Arrange SERVER

server.use(cors());
server.use(express.json({limit: "100mb"}));
// template engine
server.set('view engine', 'ejs');



// Connect DATA BASE
const dbConn = require('./config/connection');
const itemsController = require('./controllers/itemsController');



// LISTEN server

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Ya se ha arrancado nuestro servidor: http://localhost:${port}/`);
});


// Endpoints

// GET /api/items
// sql -> SELECT

server.get("/api/items", async (req, res) => {
  itemsController.getItem(req, res);
});


server.get("/api/items/:eachuser", async (req, res) => {
  itemsController.getOneItem(req, res);
});


// POST /api/newitem
// sql  -> INSERT INTO () VALUES ()


server.post("/api/newitem", async (req,res) => {
  itemsController.createItem(req, res);
});


// 3.- PUT 
// sql -> UPDATE 

server.put("/api/kittens/:eachuser/:idItem", async (req,res) => {
itemsController.updateItem(req,res);
});


// 4.- DELETE 
// sql -> DELETE 

server.delete("/api/kittens/:eachuser/:idItem", async (req,res) => {

  itemsController.deleteItem(req,res)
});



// endpoint EJS template engine
server.get('/api/items/:idItem', async (req, res) => {
  const eachId = req.params.idItem;
  const sql = `SELECT * FROM author INNER JOIN projects ON fk_author = idautor WHERE idprojects= ? `;
  const conn = await getConnection();
  const [results] = await conn.query(sql, eachId);
  res.render('pageDetail', results[0]);
})




// STATIC SERVER
// npm run publish-react
server.use(express.static("./src/public_html"));


const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

const staticServerPathImages = './src/public-images/';
server.use(express.static(staticServerPathImages));