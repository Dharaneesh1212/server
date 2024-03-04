import express from "express";
import blogRoute from "./routes/blogRoutes.js";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import { UserRouter } from "./routes/user.js";
import cookieParser from "cookie-parser";

dotenv.config();

const PORT = process.env.PORT;
const CONNECTION_URL = process.env.CONNECTION_URL;

const app = express();

// Middleware to handle CORS and cookies
app.use(
  cors({
    origin: ["http://localhost:5173", "https://loquacious-cendol-f126cc.netlify.app"],
    credentials: true,
  })
);
app.use(cookieParser());

// Middleware to handle JSON and form data with increased payload limit
app.use(express.json({ limit: "500mb" }));
app.use(express.urlencoded({ extended: true }));

// Routes for authentication and blog
app.use("/api/v1/auth", UserRouter);
app.use("/api/v1/blog", blogRoute);

// Default route
app.get("/", (req, res) => {
  res.status(200).send("<h1>Welcome to the blog app</h1>");
});

// Connect to MongoDB only once
mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running at http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });
