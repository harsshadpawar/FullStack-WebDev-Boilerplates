import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

//custom routes
import userRouter from "./routes/auth.route.js";

dotenv.config();

const PORT = process.env.PORT || 4000;
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use(
  cors({
    origin: process.env.BASE_URL,
    credentials: true,
    methods: ["GET", "POST", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.get("/", (req, res) => {
  res.status(200).json({
    sucess: true,
    message: "server is running",
  });
});

app.use("/api/v1/users", userRouter);

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
