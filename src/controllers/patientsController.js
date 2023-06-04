import getenv from "../helper/getenv.js";
import Patient from "../models/patientsModel.js";

const JWT_SECRET = getenv("JWT_SECRET");
const SALT = getenv("SALT");

export const findAllPatients = async (req, res, next) => {
  try {
    const patient = await Patient.find({});
    res.json(patient);
  } catch (err) {
    next(err);
  }
};

export const createPasien = async (req, res, next) => {
  try {
    const patient = new Patient({
      nik: req.body.nik,
      name: req.body.name,
      tempatLahir: req.body.tempatLahir,
      tanggalLahir: req.body.tanggalLahir,
      jenisKelamin: req.body.jenisKelamin,
      address: req.body.address,
      noHandphone: req.body.noHandphone,
    });
    const result = await patient.save();
    res.status(201).send({ message: "Patient successfully created!" });
  } catch (err) {
    if (["CastError", "ValidationError"].includes(err?.name)) {
      next({
        message: err.message,
        stack: err.stack,
        statusCode: 400,
      });
    }
    next(err);
  }
};
