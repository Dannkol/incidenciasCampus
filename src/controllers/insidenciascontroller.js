import jwt from "jsonwebtoken";

import jwtconfig from "../config/jwtconfig.js";

import insidencias from "../models/insidencias.js"

const CrearInsidencia = async (req, res) => {
    try {
          // Verificar y decodificar el token
        const token = req.headers.authorization;
        const decoded = jwt.verify(token, jwtconfig.secret_key); // Decode del token con la clave secreta
      
        const newInsidencia = await insidencias.CreateInsidencia(Object.values(req.body), decoded.id)
      
      
        res.status(201).json({
          message: "Insidencia creada",
          data: newInsidencia
        });

    } catch (error) {
        console.log(error);
        throw error;
    }



};

export default CrearInsidencia
