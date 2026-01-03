import { Router } from "express";
import {
  login,
  register,
  verifyOtp,
  forgotPassword,
} from "../controllers/auth.controller.js";

const router = Router();

router.post("/login", login);
router.post("/register", register);
router.post("/verify-otp", verifyOtp);
router.post("/forgot-password", forgotPassword);

export default router;
