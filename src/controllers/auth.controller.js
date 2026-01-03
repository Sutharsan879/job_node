import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

/**
 * LOGIN
 */
export const login = async (req, res) => {
  try {
    const { email, phone, password } = req.body;

    // TEMP response (DB logic comes later)
    if (!password) {
      return res.status(400).json({ message: "Password is required" });
    }

    return res.status(200).json({
      success: true,
      message: "Login successful",
      token: "dummy-jwt-token",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * REGISTER
 */
export const register = async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;

    if (!name || !password) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    return res.status(201).json({
      success: true,
      message: "User registered successfully",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * VERIFY OTP (Firebase later)
 */
export const verifyOtp = async (req, res) => {
  try {
    const { otp } = req.body;

    if (!otp) {
      return res.status(400).json({ message: "OTP required" });
    }

    return res.status(200).json({
      success: true,
      message: "OTP verified",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

/**
 * FORGOT PASSWORD
 */
export const forgotPassword = async (req, res) => {
  try {
    const { phone } = req.body;

    if (!phone) {
      return res.status(400).json({ message: "Phone number required" });
    }

    return res.status(200).json({
      success: true,
      message: "OTP sent to phone number",
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
