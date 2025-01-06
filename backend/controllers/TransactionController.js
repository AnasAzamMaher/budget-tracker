
const TransactionModel = require('../models/TransactionModel');

// Get all Transactions
const getTransactions = async (req, res) => {
    try {
        const transaction = await TransactionModel.find();
        res.status(200).json(transaction);
    } catch (error) {
        res.status(500).json({ error: 'May be Server Error' });
    }
}

// Add Transaction
const addTransactions = async (req, res) => {
    try {
        const {title, amount, category } = req.body;

        if (!title || !amount || !category) {
            return res.status(400).json({ error: 'All fields are required' });
        }

        const transaction = new TransactionModel({
            title,
            amount, 
            category
        })

        const savedTransaction = await transaction.save();
        res.status(201).json(savedTransaction);
    } catch (error) {
        res.status(500).json({ error: 'May be Server Error' });
    }
}

// Delete transaction
const deleteTransactions = async () => {
    try {
        const { id } = req.params;

        const transaction = await TransactionModel.findByIdAndDelete();
        if(!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.status(200).json({message : "Transaction delete"})
    } catch (error) {
        res.status(500).json({ error: 'May be Server Error' });
    }
}