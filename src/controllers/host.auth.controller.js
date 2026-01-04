import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

/* ---------------- HOST REGISTER ---------------- */
export const hostRegister = async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      password,
      country,
      state,
      city,
      companyName,
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
        role: "HOST",
        hostProfile: {
          create: {
            companyName,
            country,
            state,
            city,
            bankName,
            accountName,
            accountNumber,
          },
        },
      },
    });

    res.status(201).json({
      success: true,
      message: "Host registered successfully",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};

/* ---------------- HOST LOGIN ---------------- */
export const hostLogin = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findUnique({ where: { email } });

  if (!user || user.role !== "HOST") {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(401).json({ success: false, message: "Invalid credentials" });
  }

  const token = generateToken(user);

  res.json({ success: true, token });
};
