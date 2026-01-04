import express from "express";
import { registerSeeker, loginSeeker } from "../controllers/seeker.auth.controller.js";

const router = express.Router();

router.post("/register", registerSeeker);
router.post("/login", loginSeeker);

export default router;
