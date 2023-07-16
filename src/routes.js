import express from "express";

// Controllers

import authController from "./controllers/authcontroller.js";

// Middlewareq

import authDTO from "./middleware/DTO_auth.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Api sistema de insidencias");
});

router.post("/auth", authDTO , authController)

export default router;
