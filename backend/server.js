
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./services/auth/auth.routes.js";
import testRoutes from "./services/auth/auth.test.routes.js";
import productRoutes from "./services/products/product.routes.js";
import cartRoutes from "./services/cart/cart.routes.js";
import orderRoutes from "./services/orders/order.routes.js";
import adminRoutes from "./services/admin/admin.routes.js";
import vendorRoutes from "./services/vendor/vendor.routes.js";
import paymentRoutes from "./services/payment/payment.routes.js";

dotenv.config();

const app = express();

const allowedOrigins = [
  "http://localhost:5173",
  "https://vinit-multi-vendor-ecommerce.netlify.app"
];

// CORS must run before API routes
app.use(cors({
  origin: allowedOrigins,
  credentials: true,
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());

// Health check
app.get("/", (req, res) => {
  res.send("API Running");
});

// API routes
app.use("/api/auth", authRoutes);
app.use("/api/test", testRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/admin", adminRoutes);
app.use("/api/vendor", vendorRoutes);
app.use("/api/payment", paymentRoutes);

const PORT = process.env.PORT || 5000;

connectDB();

app.listen(PORT, "0.0.0.0", () => {
  console.log(`Server running on port ${PORT}`);
});
