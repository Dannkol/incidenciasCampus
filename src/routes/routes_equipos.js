import express from "express";

// Controllers

import { getAllEquipos , getAllEquiposMarcas } from "../controllers/equiposcontroller.js";

import { getAllDiademas , updateDiademas , createDiadema , deleteDiadema } from "../controllers/diademascontroller.js";

import {
    getAllMouse,
    createMouse,
    updateMouse,
    deleteMouse
} from "../controllers/mousecontroller.js"

import {
    getAllTeclado,
    createTeclado,
    updateTeclado,
    deleteTeclado
} from "../controllers/tecladocontroller.js"

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


// LOS ACCESORIOS RECIBEN LOS MISMOS PARAMETROS

/**
 * get all accesorios mouse
 */

router.get("/accesorio/diademas", authenticateToken, getAllDiademas)

/**
 * put update mouse
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
router.put("/accesorio/diademas/:id", authenticateToken, updateDiademas)

// post create mouse
// {
//     "marca": "Acer",
//     "descripcion": "diademas Acer",
//     "serial": "12as26"
// }

router.post("/accesorio/diademas", authenticateToken, createDiadema)


// delate mouse
// id

router.delete("/accesorio/diademas/:id", authenticateToken, deleteDiadema )

// CRUD mouse
// recibe los mismos parametros que las diademas
router.get("/accesorio/mouse", authenticateToken, getAllMouse)

router.put("/accesorio/mouse/:id", authenticateToken, updateMouse)

router.post("/accesorio/mouse", authenticateToken, createMouse)

router.delete("/accesorio/mouse/:id", authenticateToken, deleteMouse)


// CRUD teclado
// recibe los mismos parametros que las diademas
router.get("/accesorio/teclado", authenticateToken, getAllTeclado)

router.put("/accesorio/teclado/:id", authenticateToken, updateTeclado)

router.post("/accesorio/teclado", authenticateToken, createTeclado)

router.delete("/accesorio/teclado/:id", authenticateToken, deleteTeclado)

export default router;
