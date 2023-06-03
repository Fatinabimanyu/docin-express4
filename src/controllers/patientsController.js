import getenv from "../helper/getenv.js";
import Patient from "../models/patientsModel.js";

const JWT_SECRET = getenv("JWT_SECRET");
const SALT = getenv("SALT");

export const createPasien = async (req, res, next) => {
  try {
    // const salt = await bcrypt.genSalt(Number(SALT));
    // const encryptedPassword = bcrypt.hashSync(
    //   req.body.password,
    //   salt,
    //   (err, hash) => {
    //     console.log(err);
    //   }
    // );
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
