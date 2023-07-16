import express from "express";

// Controllers

import authController from "../controllers/authcontroller.js";

// Middlewareq

import authDTO from "../middleware/DTO_auth.js";

const router = express.Router();


router.post("/auth", authDTO , authController)

export default router;
