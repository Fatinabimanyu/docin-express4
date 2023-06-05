// const transactionModel = require("../models/transaction.models");
import transactionModel from "../models/transactionsModel.js";

export const createTransaction = async (req, res, next) => {
  const { pengeluaran, pemasukan, instansi, dokter_id, obat_id, deskripsi } =
    req.body;
  try {
    const transaction = new transactionModel({
      pengeluaran,
      pemasukan,
      instansi,
      dokter_id,
      obat_id,
      deskripsi,
      // hospital_id,
    });

    await transaction.save();

    return res.json({
      success: true,
      message: "Transaksi terekam dan tersimpan di database",
    });
  } catch (err) {
    console.log("Save error", err);
    return res.status(401).json({
      errors: err,
    });
  }
};
