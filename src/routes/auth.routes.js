
import { Router } from "express";
import {
  hostRegister,
  hostLogin,
} from "../controllers/host.auth.controller.js";

import {
  seekerRegister,
  seekerLogin,
} from "../controllers/seeker.auth.controller.js";

const router = Router();

// HOST
router.post("/host/register", hostRegister);
router.post("/host/login", hostLogin);

// SEEKER
router.post("/seeker/register", seekerRegister);
router.post("/seeker/login", seekerLogin);

export default router;
