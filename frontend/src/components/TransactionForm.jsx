import React, { useState } from 'react';

const TransactionForm = ({ addTransaction }) => {
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !amount || !category) {
      alert('Please fill all fields!');
      return;
    }

    const transaction = {
      title,
      amount: parseFloat(amount),
      category,
      type,
    };

    addTransaction(transaction);

    setTitle('');
    setAmount('');
    setCategory('');
    setType('income');
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Add Transaction</h2>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Amount</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded-lg"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 font-medium mb-1">Type</label>
        <div className="flex space-x-4">
          <label className="flex items-center">
            <input
              type="radio"
              value="income"
              checked={type === 'income'}
              onChange={(e) => setType(e.target.value)}
              className="mr-2"
            />
            Income
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              value="expense"
              checked={type === 'expense'}
              onChange={(e) => setType(e.target.value)}
              className="mr-2"
            />
            Expense
          </label>
        </div>
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
      >
        Add Transaction
      </button>
    </form>
  );
};

export default TransactionForm;
