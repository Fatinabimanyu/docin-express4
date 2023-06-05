import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  nik: {
    type: Number,
    required: true,
    unique: true,
  },
  name: {
    type: String,
    required: true,
  },
  tempatLahir: {
    type: String,
    required: true,
  },
  tanggalLahir: {
    type: Date,
    required: true,
  },
  jenisKelamin: {
    type: String,
  },
  address: {
    type: String,
    required: true,
  },
  noHandphone: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Patient = mongoose.model("patient", patientSchema);

export default Patient;
