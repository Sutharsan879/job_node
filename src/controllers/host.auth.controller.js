import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

export const registerHost = async (req, res) => {
  const { name, email, password, phone, company } = req.body;

  const existing = await prisma.host.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ message: "Host already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const host = await prisma.host.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone,
      company,
    },
  });

  res.status(201).json({
    message: "Host registered successfully",
    hostId: host.id,
  });
};

export const loginHost = async (req, res) => {
  const { email, password } = req.body;

  const host = await prisma.host.findUnique({ where: { email } });
  if (!host) {
    return res.status(404).json({ message: "Host not found" });
  }

  const isMatch = await bcrypt.compare(password, host.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({ id: host.id, role: "HOST" });

  res.json({
    message: "Host login successful",
    token,
  });
};
