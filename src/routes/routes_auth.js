import express from "express";

// Controllers

import authController from "../controllers/authcontroller.js";
import { crearUsuario } from "../controllers/usuariocontroller.js";

// Middlewareq

import authDTO from "../middleware/DTO_auth.js";

const router = express.Router();

// {
//     "email" : "devjgi@gmail.com",
//     "password" : "12345"
// }

router.post("/auth", authDTO , authController);


/**
 *
 * {
 *
 *    "nombre" : "daniel",
 *    "apellido" : "Manosalva",
 *    "password" : "12345",
 *    "doc_usuario" : "12348589",
 *    "tipo_documento" : 1,
 *    "telefono" : "12345",
 *    "movile" : "+57212345",
 *    "email" : "manosalva@gmail.com",
 *    "email_coords" : "manosalva@campuslands.com",
 *    "tel_fijo_coords" : "+15535435",
 *    "tel_movile_coords" : "+575898385"
 *
 * }
 *
 */

router.post("/user/create", crearUsuario);



export default router;
