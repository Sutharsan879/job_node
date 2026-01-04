import bcrypt from "bcryptjs";
import prisma from "../config/prisma.js";
import { generateToken } from "../utils/jwt.js";

export const registerSeeker = async (req, res) => {
  const { name, email, password, phone, skills } = req.body;

  const existing = await prisma.seeker.findUnique({ where: { email } });
  if (existing) {
    return res.status(400).json({ message: "Seeker already exists" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const seeker = await prisma.seeker.create({
    data: {
      name,
      email,
      password: hashedPassword,
      phone,
      skills,
    },
  });

  res.status(201).json({
    message: "Seeker registered successfully",
    seekerId: seeker.id,
  });
};

export const loginSeeker = async (req, res) => {
  const { email, password } = req.body;

  const seeker = await prisma.seeker.findUnique({ where: { email } });
  if (!seeker) {
    return res.status(404).json({ message: "Seeker not found" });
  }

  const isMatch = await bcrypt.compare(password, seeker.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Invalid credentials" });
  }

  const token = generateToken({ id: seeker.id, role: "SEEKER" });

  res.json({
    message: "Seeker login successful",
    token,
  });
};
