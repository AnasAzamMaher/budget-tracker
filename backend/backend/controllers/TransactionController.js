const TransactionModel = require('../models/TransactionModel');

// Get all Transactions
const getTransactions = async (req, res) => {
    try {
        const transactions = await TransactionModel.find();
        res.status(200).json(transactions);
    } catch (error) {
        res.status(500).json({ error: 'May be Server Error' });
    }
}

// Add Transaction
const addTransactions = async (req, res) => {
    try {
        const {title, amount, category, type } = req.body;

        if (!title || !amount || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const transaction = new TransactionModel({
            title,
            amount, 
            category,
            type
        })

        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'Add: May be Server Error' });
    }
}

// Delete transaction
const deleteTransactions = async (req, res) => {
    try {
        const { id } = req.params;

        const transaction = await TransactionModel.findByIdAndDelete(id);

        if (!transaction) {
            return res.status(404).json({ error: 'Transaction not found' });
        }

        res.status(200).json({ message: "Transaction deleted successfully" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Server Error while deleting transaction' });
    }
};


module.exports = { getTransactions, addTransactions, deleteTransactions };