const express = require('express');
const { getTransactions, addTransactions, deleteTransactions } = require("../controllers/TransactionController");
const router = express.Router();

router.get("/", getTransactions);
router.post("/", addTransactions);
router.delete("/:id", deleteTransactions);

module.exports = router;
