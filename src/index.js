const express = require("express");
const cors = require("cors");
const env = require('dotenv');
env.config();


const server = express();


server.use(cors());
server.use(express.json({limit: "100mb"}));
server.set('view engine', 'ejs');


const itemsController = require('./controllers/itemsController');
const dbConn = require('./config/connection');


const port = process.env.PORT || 4000;
server.listen(port, () => {
  console.log(`Ya se ha arrancado nuestro servidor: http://localhost:${port}/`);
});


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


server.get('/receta/:eachId', async (req, res) => {
  const recipeId = req.params.eachId;
  const sql = `SELECT * FROM recetas WHERE id= ? `;
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(sql, recipeId);
  res.render('detail', results[0]);
})


const staticServerPathWeb = './src/public-react';
server.use(express.static(staticServerPathWeb));

const pathServerPublicStyles = './src/public-css';
server.use(express.static(pathServerPublicStyles));

const staticServerPathImages = './src/public-images/';
server.use(express.static(staticServerPathImages));