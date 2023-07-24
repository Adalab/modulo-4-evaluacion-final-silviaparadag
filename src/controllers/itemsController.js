const Views = require('../views/itemView');
const dbConn = require('../config/connection');

const getItem = async (req, res) => {
  const selectProducts = "SELECT * FROM tablename";

  const conn = await getConnection();
  const [results] = await conn.query(selectProducts);

  console.log(results);

  conn.end();

  res.json(results);

};

const getOneItem = async (req, res) => {
  const userItem = req.params.eachuser;
  const selectItem = "SELECT * FROM tablename WHERE columName=?";

  const conn = await dbConn.getConnection();
  const [results] = await conn.query(selectItem, userItem);
  console.log(results);
  conn.end();

  res.json(Views.generateJsonResult());
};

const createItem = async (req, res) => {
  const userItem = req.params.eachuser;
  const newItem = req.body;
  try {
    const insertSql = `INSERT INTO cats (userItem, imageUrl, nameItem, raceItem, descItem) VALUES (?, ?, ?, ?, ?)`;

    const conn = await dbConn.getConnection();
    const [result] = await conn.query( insertSql, 
      [
        userItem, 
        newItem.imageUrl, 
        newItem.nameItem, 
        newItem.raceItem ,
        newItem.descItem
      ] 
    );
    // estos nombres pueden no ser igual a la table, pq estos vienen del FRONT, pero sí similares.
    conn.end();
    console.log(result);
    res.json(Views.generateSuccess());
  }
  // ver views/itemView.js donde están las respuestas json
  
  catch (error) {
    res.json({
         success: false, 
         message: error
     });

  }
};

const createItem2 = async (req, res) => {
const body = req.body;
  console.log(body);
  // si queremos probar que funciona, podemos poner: res.json({msg: 'holis'});

  let insertItem = `INSERT INTO 'tableA name' (columA_name, columA_name2, columA_name3) 
  VALUES (?, ?, ?)`

  const conn = await getConnection();
  const [result] = await conn.query(insertItem, [
    body.columA_name, 
    body.columA_name2, 
    body.columA_name3
  ]);

  const idItem = result.insertId;
  console.log(result);

  let insertProject = `INSERT INTO 'tableB name' (columB_name, columB_name2, columB_name3, columB_name4, columB_name5) 
  VALUES (?, ?, ?, ?, ?)`;

  const [resultB] = await conn.query(insertProject, [
    body.columB_name, 
    body.columB_name2, 
    body.columB_name3, 
    body.columB_name4, 
    body.columB_name5,
    idItem
  ]);

  conn.end();

  console.log(resultB);
  res.json({msg: 'holis'});
};
// la respuesta del INsert es un objeto de datos, no como el select, que son filas. 


const updateItem = async (req, res) => {
  const ownerCat = req.params.eachuser;
  const kittenId = req.params.idItem;
  const {url, name_, race, desc_} = req.body;

  try {
    const updateSql = `UPDATE cats SET imageUrl= ?, nameCat=?, raceCat=?, desCat=? WHERE idCat=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( updateSql,[
      url, 
      name_, 
      race, 
      desc_,   
      kittenId
    ] )
    conn.end();
    res.json({
         success: true 
     });
    }
  catch (error) {
    res.json({
      success: false, 
      message: error
    });
  }
 
}

const deleteItem = async (req, res) => {
    // const userItem = req.params.eachuser;
  // const eachIdItem = req.params.idItem; 
  // esto es lo mismo que el destructuring de: ->
  const {userItem, eachIdItem } = req.params; 
  
  try {
    const deleteSql = `DELETE FROM tablename WHERE idItem=? AND userItem=?`;
    const conn = await dbConn.getConnection();
    const [result] = await conn.query( deleteSql,[eachIdItem,userItem] )
    // TENEMOS QUE MANTENER EL ORDEN DE LOS ? EN LOS PARÁMETROS
    conn.end();
    res.json({
      success: true 
     });
    }
  catch (error) {
    res.json({
      success: false, 
      message: error
    });
  }
};

module.exports = { getOneItem, getItem, createItem, createItem2, updateItem, deleteItem };