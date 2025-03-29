const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const productRoutes = require("./routes/productRoutes");
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const authMiddleware = require("./middleware/authMiddleware");


dotenv.config();
console.log("MongoDB URI:", process.env.MONGO_URI);


const app = express();

// Middleware to parse JSON request body
app.use(express.json());

// Enable CORS
app.use(cors());

// Public routes (no authentication required)
app.use("/auth", authRoutes);

// Protected routes (authentication required)
app.use("/api/products", authMiddleware, productRoutes);
app.use("/api/user", authMiddleware, userRoutes);

// Database connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error("MongoDB Connection Failed", err));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
