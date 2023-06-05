import express from "express";
import * as auth from "../middleware/auth.js";
import * as Transactions from "../controllers/transactionsController.js";

const router = express.Router();

router.post("/add-transactions", Transactions.createTransaction);

export default router;
