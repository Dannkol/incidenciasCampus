import jwt from 'jsonwebtoken';

import users from "../models/usuarios.js";
import jwtconfig from '../config/jwtconfig.js';

const authorization = async (req, res) => {
  const secretKey = jwtconfig.secret_key;

  try {

    const user = await users.getUser(Object.values(req.body));

    console.log(user);

    const auth = user.email === Object.values(req.body)[0] && user.password == Object.values(req.body)[1];
    if (!auth) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    } else {
      // Generar el token JWT
      const token = jwt.sign({ id: user.id, nombre: user.nombre }, secretKey, {
        expiresIn: "1h",
      });

      // Responder con el token
      res.json({ token });
    }
  } catch (error) {
    console.log(error);
    throw error;
  }
};

export default authorization ;