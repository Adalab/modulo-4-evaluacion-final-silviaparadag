// IMPORTS

const express = require("express");
const cors = require("cors");
const env = require('dotenv');
env.config();

// Run SERVER

const server = express();

// Arrange SERVER

server.use(cors());
server.use(express.json({limit: "100mb"}));
server.set('view engine', 'ejs');


// Connect DATA BASE
const itemsController = require('./controllers/itemsController');


// LISTEN server

const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Ya se ha arrancado nuestro servidor: http://localhost:${port}/`);
});


// Endpoints

server.get("/recetas", async (req, res) => {
  console.log('Holis');
  itemsController.getRecipes(req, res);
});

server.get("/recetas/:eachId", async (req, res) => {
  itemsController.getOneRecipe(req, res);
});

server.post("/recetas", async (req,res) => {
  itemsController.createRecipe(req, res);
});

server.put("/recetas/:eachId", async (req,res) => {
itemsController.updateRecipe(req,res);
});

server.delete("/recetas/:eachId", async (req,res) => {
  itemsController.deleteRecipe(req,res)
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