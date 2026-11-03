const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const gameRoutes = require("./router/gameRoutes");
require("dotenv").config();

const app = express();

const PORT = process.env.PORT || 3000;

console.log("MongoDB URI exists:", !!process.env.MONGODB_URI);

// CORS
app.use(cors());

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("✅ MongoDB Connected Successfully");
  })
  .catch((err) => {
    console.error("❌ MongoDB Connection Error:", err);
  });

// Routes
const userRoutes = require("./router/userRoutes");

app.use("/api/users", userRoutes);
app.use("/api/games", gameRoutes);
// Test route
app.get("/", (req, res) => {
  res.send("Backend is running...");
});

// Start Server
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});