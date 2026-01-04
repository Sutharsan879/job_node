// import express from "express";
// import cors from "cors";

// import authRoutes from "./routes/auth.routes.js";
// import jobRoutes from "./routes/job.routes.js";
// import adminRoutes from "./routes/admin.routes.js";
// import paymentRoutes from "./routes/payment.routes.js";

// const app = express();

// app.use(cors());
// app.use(express.json());

// /**
//  * ✅ PUBLIC BASE ROUTE (IMPORTANT)
//  */
// app.get("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     message: "Job Marketplace API is running",
//     status: "OK",
//   });
// });

// /**
//  * API ROUTES
//  */
// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/admin", adminRoutes);
// app.use("/api/payments", paymentRoutes);

// export default app;

// const express = require("express");
// const cors = require("cors");

// const authRoutes = require("./routes/auth.routes");
// const jobRoutes = require("./routes/job.routes");

// const app = express();

// app.use(cors({ origin: true }));
// app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ status: "API running" });
// });

// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);

// module.exports = app;
import express from "express";

// route imports
import authRoutes from "./routes/auth.routes.js";
import jobRoutes from "./routes/job.routes.js";
import hostRoutes from "./routes/host.routes.js";
import seekerRoutes from "./routes/seeker.routes.js";

const app = express();

/* -------------------- MIDDLEWARES -------------------- */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* -------------------- HEALTH CHECK -------------------- */
app.get("/", (req, res) => {
  res.status(200).json({
    status: "OK",
    message: "Job Node API is running",
  });
});

/* -------------------- API ROUTES -------------------- */
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);

app.use("/api/host", hostRoutes);
app.use("/api/seeker", seekerRoutes);
/* -------------------- 404 HANDLER -------------------- */
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "API route not found",
  });
});

export default app;
