import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoute from "./routes/auth.js";
import usersRoute from "./routes/users.js";
import hotelsRoute from "./routes/hotels.js";
import roomsRoute from "./routes/rooms.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3500;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost/second_project");
    console.log("Successfully connected to MongoDB");
  } catch (err) {
    throw err;
  }
};

//middleware
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);
app.use("/api/rooms", roomsRoute);
app.use("/api/hotels", hotelsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

app.listen(port, () => {
  connect();
  console.log(`App is now running at port ${port}`);
});
