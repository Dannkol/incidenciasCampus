import express from "express";

// Controllers

import { getAllEquipos } from "../controllers/equiposcontroller.js";

// Middlewareq
import authenticateToken from "../middleware/auth_token_jwt.js";


const router = express.Router();


router.get("/", authenticateToken ,getAllEquipos)

export default router;
