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

app.use(express.json());
app.use(cors({origin:"http://localhost:5173",credentials:true}));
app.use(cookieParser())
app.use("/api/v1/auth", UserRouter);

mongoose.connect(CONNECTION_URL);

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/blog", blogRoute);

app.get("/", (req, res) => {
  res.status(200).send("<h1> welcome to blog app </h1>");
});

mongoose
  .connect(CONNECTION_URL)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`server is running in http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log(err));
