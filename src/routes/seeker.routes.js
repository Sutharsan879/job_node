import express from "express";
import {
  seekerRegister,
  seekerLogin,
} from "../controllers/seeker.auth.controller.js";

const router = express.Router();

// SEEKER AUTH
router.post("/register", seekerRegister);
router.post("/login", seekerLogin);

export default router;
