import { Router } from "express";
import { getUsers, getJobs } from "../controllers/admin.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.get("/users", authMiddleware, getUsers);
router.get("/jobs", authMiddleware, getJobs);

export default router;
