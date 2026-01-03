import prisma from "../config/prisma.js";

export const getUsers = async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
};

export const getJobs = async (req, res) => {
  res.json([]);
};
