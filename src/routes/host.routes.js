import express from "express";
import {
  hostRegister,
  hostLogin,
} from "../controllers/host.auth.controller.js";

const router = express.Router();

// HOST AUTH
router.post("/register", hostRegister);
router.post("/login", hostLogin);

export default router;
