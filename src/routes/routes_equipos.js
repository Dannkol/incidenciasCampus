import express from "express";

// Controllers

import { getAllEquipos , getAllEquiposMarcas } from "../controllers/equiposcontroller.js";

// Middlewareq
import authenticateToken from "../middleware/auth_token_jwt.js";


const router = express.Router();



router.get("/", authenticateToken , getAllEquipos)

// Get por marca
// devuelve los equipos donde un accesorio
// coicida con la marca
// /api/equipos/Logitech
// resultado
// {
//     "query": [
//       {
//         "equipo": "CP-123",
//         "marca_diadema": "Logitech",
//         "marca_mouse": "Logitech",
//         "marca_teclado": "Logitech",
//         "descripcion_eq": "Equipo en perfecto estado",
//         "lugar": "apolo",
//         "desc_lugar": "Salon de clase"
//       },
//       {
//         "equipo": "CP-155",
//         "marca_diadema": "Logitech",
//         "marca_mouse": "Logitech",
//         "marca_teclado": "Acer",
//         "descripcion_eq": "Equipo en perfecto estado",
//         "lugar": "apolo",
//         "desc_lugar": "Salon de clase"
//       }
//     ]
//  }

router.get("/:marca", authenticateToken , getAllEquiposMarcas)


export default router;
