import { Router } from "express";
import {
  postJob,
  applyJob,
  approveSeeker,
  completeJob,
} from "../controllers/job.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

router.post("/post", authMiddleware, postJob);
router.post("/apply", authMiddleware, applyJob);
router.post("/approve", authMiddleware, approveSeeker);
router.post("/complete", authMiddleware, completeJob);

export default router;
