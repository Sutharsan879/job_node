import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

/* ---------------- SEEKER REGISTER ---------------- */
export const seekerRegister = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      country,
      state,
      city,
      experience,
      jobTitle,
      bankName,
      accountName,
      accountNumber,
    } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await prisma.user.create({
      data: {
        name,
        email,
        phone,
        password: hashedPassword,
        role: "SEEKER",
        seekerProfile: {
          create: {
            country,
            state,
            city,
            experience,
            jobTitle,
            bankName,
            accountName,
            accountNumber,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Seeker registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ---------------- SEEKER LOGIN ---------------- */
export const seekerLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await prisma.user.findUnique({
      where: { email },
      include: { seekerProfile: true },
    });

    if (!user || user.role !== "SEEKER") {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid credentials",
      });
    }

    const token = generateToken(user);

    res.json({
      success: true,
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};
