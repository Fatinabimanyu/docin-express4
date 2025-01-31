import process from "process";
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import usersRouter from "./src/routes/usersRoute.js";
import doctorsRouter from "./src/routes/doctorsRoute.js";
import appointmentsRouter from "./src/routes/appointmentsRoute.js";
import patientsRouter from "./src/routes/patientsRoute.js";
import transactionsRouter from "./src/routes/transactionsRoute.js";

import getenv from "./src/helper/getenv.js";

const app = express();

const PORT = getenv("PORT");
const MONGO_URI = getenv("MONGO_URI");

mongoose
  .connect(MONGO_URI)
  .then(() => console.log("Connected to DocIn Database!"))
  .catch((err) => {
    console.error(`Can't connect to DocIn Database!`);
    console.error(err);
    process.exit(1);
  });

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Express");
});

app.use("/users", usersRouter);
app.use("/doctors", doctorsRouter);
app.use("/appointments", appointmentsRouter);
app.use("/patients", patientsRouter);
app.use("/transactions", transactionsRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  console.error(err.message, err.stack);
  res.status(statusCode).json({ message: err.message });

  return;
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}...`));
