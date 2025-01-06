import React from 'react';

const Summary = ({ transactions }) => {
  const income = transactions
    .filter((txn) => txn.type === 'income')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const expense = transactions
    .filter((txn) => txn.type === 'expense')
    .reduce((sum, txn) => sum + txn.amount, 0);

  const balance = income - expense;

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Summary</h2>
      <div className="flex justify-between">
        <div>
          <h3 className="text-green-500 font-bold">Income</h3>
          <p>${income.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-red-500 font-bold">Expense</h3>
          <p>${expense.toFixed(2)}</p>
        </div>
        <div>
          <h3 className="text-blue-500 font-bold">Balance</h3>
          <p>${balance.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Summary;
