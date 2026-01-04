import express from "express";
import { registerHost, loginHost } from "../controllers/host.auth.controller.js";

const router = express.Router();

router.post("/register", registerHost);
router.post("/login", loginHost);

export default router;
