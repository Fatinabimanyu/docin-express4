import mongoose from "mongoose";

const transactionModelSchema = new mongoose.Schema(
  {
    pengeluaran: { type: Number },
    pemasukan: { type: Number },
    instansi: { type: String },
    dokter_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "dokter",
    },
    obat_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "obat",
    },
    // obat_id: {
    //   type: Number,
    //   // ref: "obat",
    // },
    deskripsi: { type: String },
    hospital_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "hospital_cash_model",
    },
  },

  //   skema_log
  // rs_id
  // pemasukan
  // pengeluaran
  // instansi : (dokter/farmasi)
  // aktor : id_dokter, id_obat
  // time_stamp

  {
    timestamps: true,
  }
);

const Transaction = mongoose.model("transactionModel", transactionModelSchema);

export default Transaction;
