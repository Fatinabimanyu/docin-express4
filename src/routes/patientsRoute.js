import express from "express";
import * as auth from "../middleware/auth.js";
import * as Patient from "../controllers/patientsController.js";

const router = express.Router();

router.post("/add-patient", Patient.createPasien);

export default router;
