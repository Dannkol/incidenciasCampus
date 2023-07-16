import express from "express";

const router = express.Router();

import CrearInsidencia from "../controllers/insidenciascontroller.js";

// Middleware
import insidenciasDTO from "../middleware/DTO_insidencias.js";
import authenticateToken from "../middleware/auth_token_jwt.js";


// Endpoin para crear una nueva insidencia
// obtiene el nombre y id del usuario por medio del token
// espera
// {
//     "nombre_insidencia": "No enciende",
//     "descripcion_insidencia": "breve descripcion",
//     "equipo": 1,
//     "lugar": 1,
//     "fecha": "2023-07-16",
//     "nivel": 3,
//     "categoria": 2
// }
// Devuelve
// {
//     "message": "Insidencia creada",
//     "data": [
//       {
//         "trainer": "jholver",
//         "nombre": "No enciende",
//         "descripcion": "breve descripcion",
//         "equipo": "CP-123",
//         "categoria": "hardware",
//         "nivel": "critica",
//         "lugar": "apolo"
//       }
//     ]
// }
router.post("/create", authenticateToken , insidenciasDTO , CrearInsidencia)

export default router;