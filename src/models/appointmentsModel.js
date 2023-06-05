import mongoose from "mongoose";

const appointmentSchema = new mongoose.Schema({
  creator_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_docin",
    required: true,
  },
  receiver_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor_docin",
    required: true,
  },
  creator_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user_docin",
    required: true,
    default: "Creator Name",
  },
  receiver_name: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "doctor_docin",
    required: true,
    default: "Receiver Name",
  },
  id_patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "patient",
    required: true,
  },
  patient_name: {
    type: String,
    required: true,
  },
  explanation: {
    type: String,
    required: true,
  },
  explanation_doctor: {
    type: String,
  },
  date: {
    type: String,
    required: true,
  },
  time: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    default: "pending",
  },
  appointmentFee: {
    type: Number,
    default: 0,
  },
  fee_status: {
    type: String,
    default: "unsettled",
  },
});

const Appointment = mongoose.model("appointment_docin", appointmentSchema);

export default Appointment;
