const Views = require('../views/itemView');
const dbConn = require('../config/connection');

const getRecipes = async (req, res) => {
  const selectRecipes = "SELECT * FROM recetas";
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(selectRecipes);
  conn.end();
  res.json(Views.generateJsonResult(results)); 

};

const getOneRecipe = async (req, res) => {
  const recipeItem = req.params.eachId;
  const selectItem = "SELECT * FROM recetas WHERE id=?";
  const conn = await dbConn.getConnection();
  const [results] = await conn.query(selectItem, recipeItem);
  conn.end();
  res.json(Views.generateJsonResult(results));
};

const createRecipe = async (req, res) => {
  const newRecipe = req.body;
  try {
    const insertSql = `INSERT INTO recetas (nombre, ingredientes, instrucciones) VALUES (?, ?, ?)`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( insertSql, 
      [
        newRecipe.nombre, 
        newRecipe.ingredientes, 
        newRecipe.instrucciones,
      ] 
    );
    conn.end();
    res.json(Views.generateSuccess(result.insertId));
  }
  catch (error){
    res.json({
         success: false, 
         message: error.sqlMessage
     });

  }
};


const updateRecipe = async (req, res) => {
  const recipeId = req.params.eachId;
  const {nombre, ingredientes, instrucciones} = req.body;

  try {
    const updateSql = `UPDATE recetas SET nombre= ?, ingredientes=?, instrucciones=? WHERE id=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( updateSql,[
      nombre, 
      ingredientes, 
      instrucciones, 
      recipeId
    ] )
    conn.end();
    res.json({
         success: true 
     });
    }
  catch (error) {
    res.json({
      success: false, 
      message: error.sqlMessage
    });
  }
 
}

const deleteRecipe = async (req, res) => {
  const recipeId = req.params.eachId;
  try {
    const deleteSql = `DELETE FROM recetas WHERE id=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( deleteSql,[recipeId] )
    conn.end();
    if (result.affectedRows === 1) {
      res.json(Views.generateSuccessMsg("This recipe has been remove succesfully"));
    } else {res.json(Views.generateErrorMsg("This id doesn't exit"));}
    }
  catch (error) {
    res.json({
      success: false, 
      message: error
    });
  }
};

module.exports = { getOneRecipe, getRecipes, createRecipe, updateRecipe, deleteRecipe };
