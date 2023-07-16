import express from "express";

// Controllers

import { getAllEquipos , getAllEquiposMarcas } from "../controllers/equiposcontroller.js";

import { getAllDiademas , updateDiademas , createDiadema , deleteDiadema } from "../controllers/diademascontroller.js";

// Middlewareq
import authenticateToken from "../middleware/auth_token_jwt.js";
import marcaDTO from "../middleware/DTO_marca.js";


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

router.get("/:marca", authenticateToken ,marcaDTO , getAllEquiposMarcas)



/**
 * get all accesorios mouse
 */

router.get("/accesorio/mouse", authenticateToken, getAllDiademas)

/**
 * get update mouse
 * 
 * rcibe 
 * 
 *{
 * 
 *  "marca": "Logitech",
 *  "descripcion": "diademas Logitech",  
 *  "serial": "12345s"
 *
 *}
 *
 * y un id por parametro
 *
 * devuelve
 * 
 * {
 *   "messeger": "Update diademas",
 *   "data": {
 *       "marca": "Logitech",
 *       "descripcion": "diademas Logitech",
 *       "serial": "12345s"
 *   }
 * }
 * 
 */
router.put("/accesorio/mouse/:id", authenticateToken, updateDiademas)


router.post("/accesorio/mouse", authenticateToken, createDiadema)



router.delete("/accesorio/mouse/:id", authenticateToken, deleteDiadema )



export default router;
