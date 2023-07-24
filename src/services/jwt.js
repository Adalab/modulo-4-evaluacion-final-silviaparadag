const jwt = require('jsonwebtoken');


// Funciones JWT

const generateToken = (payload) => {
  const token = jwt.sign(payload, 'secreto', { expiresIn: '1h' });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, 'secreto');
    return decoded;
  } catch (err) {
    return null;
  }
};

const removeBearerKeyword = (token) => {
  if( token.startsWith('Bearer') ) {
    return token.replace('Bearer ','');
  }
  if( token.startsWith('bearer') ) {
    return token.replace('bearer ','');
  }
  return token;
}

const authenticateToken = (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  const decoded = verifyToken(removeBearerKeyword(token));

  if (!decoded) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  req.user = decoded;
  next();
};

module.exports = {generateToken,verifyToken,authenticateToken};


//   --------------------- ESTO SERÍA EN INDEX VER EJERCICIO IVAN 4.9 TEST----------------------------------- 
/* PROCESO REGISTER | LOGIN | LOGOUT | VER LO QUE TIENE EL USUARIO, SUS FAVORITOS, ARTÍCULOS, ETC 

// Funcines TOKEN para encriptar contraseñas
const generateToken = (payload) => {
  const token = jwt.sign(payload, "secret_key", { expiresIn: "1h" });
  return token;
};

const verifyToken = (token) => {
  try {
    const decoded = jwt.verify(token, "secret_key");
    return decoded;
  } catch (err) {
    return null;
  }
};

const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"];
  console.log(token);

  if (!token) {
    return res.status(401).json({ error: "Token no proporcionado" });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ error: "Token inválido" });
  }

  req.user = decoded;
  next();
};

// ENDPOINTS

// Endpoint REGISTER
app.post("/api/register", async (req, res) => {
  const username = req.body.email;
  const password = req.body.password;
  console.log(password);

  const passwordHash = await bcrypt.hash(password, 10);
  console.log(passwordHash);

  let sql = "INSERT INTO user (email,password) VALUES (?,?)";
  let user = {
    email: email,
    passwordHash: passwordHash,
  };

  jwt.sign(user, "secret_key", async (err, token) => {
    if (err) {
      res.status(400).send({ msg: "Error" });
    } else {
      const connection = await getConnection();
      const [results, fields] = await connection.query(sql, [
        email,
        passwordHash,
      ]);
      connection.end();
      res.json({ msg: "success", token: token, id: results.insertId });
    }
  });
});

// Endpoint LOGIN
app.post("/api/login", async (request, response) => {
  const body = request.body;

  //Buscar si el usuario existe en la bases de datos
  let sql = "SELECT * FROM user WHERE email= ?";
  const connection = await getConnection();
  const [users, fields] = await connection.query(sql, [body.email]);
  connection.end();
  const user = users[0];
  console.log(user);

  //verificar si la contraeña
  const passwordCorrect =
    user === null ? false : await bcrypt.compare(body.password, user.password);

  //Sino existe el usuario o el password no es correcto
  if (!(user && passwordCorrect)) {
    return response.status(401).json({
      error: "Invalid username or password",
    });
  }

  //Crear el token para enviar al front
  const userForToken = {
    email: user.email,
    id: user.id,
  };
  const token = generateToken(userForToken);

  //enviar la respuesta correcta
  response.status(200).json({ token, email: user.email });
});

// Endpoint CONSULTAR INFO
app.get("/articles", authenticateToken, async (req, res) => {
  let sql = "SELECT * FROM article WHERE email = ?";

  const connection = await getConnection();
  const [articles, fields] = await connection.query(sql, [req.user.email]);
  connection.end();

  const response = {
    articles: articles,
  };
  res.json(response);
});


// Endpoint Close session LOGOUT
app.put("/api/logout", async (req, res) => {
  const authHeader = req.headers["authorization"];
  jwt.sign(authHeader, "", { expiresIn: 1 }, (logout, err) => {
    if (logout) {
      res.send({ msg: "Has sido desconectado" });
    } else {
      res.send({ msg: "Error" });
    }
  });
});
*/
// PROCESO REGISTER | LOGIN | LOGOUT | VER LO QUE TIENE EL USUARIO, SUS FAVORITOS, ARTÍCULOS, ETC 
//   -------------------------------------------------------- 