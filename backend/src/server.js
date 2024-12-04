const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();

// Import routes
const dataUtamaRoutes = require("./routes/dataUtamaRoutes");
const dataEntitasRoutes = require("./routes/dataEntitasRoutes");
const dataPungutanRoutes = require("./routes/dataPungutanRoutes");

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api/data-utama", dataUtamaRoutes);
app.use("/api/data-entitas", dataEntitasRoutes);
app.use("/api/data-pungutan", dataPungutanRoutes);

app.get("/", (req, res) => {
  res.send("Hello from server");
});

// Database Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB at localhost");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
