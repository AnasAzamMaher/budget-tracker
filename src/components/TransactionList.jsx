import React from 'react';

const TransactionList = ({transactions,  deleteTransaction }) => {
  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Transaction List</h2>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr>
            <th className="border border-gray-300 px-4 py-2">Title</th>
            <th className="border border-gray-300 px-4 py-2">Amount</th>
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Type</th>
            <th className="border border-gray-300 px-4 py-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((txn, index) => (  // Call transactions() here
            <tr key={txn.id}>
              <td className="border border-gray-300 px-4 py-2">{txn.title}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.amount}</td>
              <td className="border border-gray-300 px-4 py-2">{txn.category}</td>
              <td className="border border-gray-300 px-4 py-2 capitalize">{txn.type}</td>
              <td className="border border-gray-300 px-4 py-2">
                <button onClick={() => deleteTransaction(txn.id)} className="bg-red-500 text-white px-2 py-1 rounded-lg hover:bg-red-600">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
