import { useState, useEffect } from "react";
import axios from "axios";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import Summary from "./components/Summary";
import CategoryBreakdown from "./components/CategoryBreakdown";

function App() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/transactions`);
        setTransactions(response.data);
      } catch (error) {
        console.error("Error fetching transactions:", error);
      }
    };
    fetchTransactions();
  }, []);

  const addTransaction = async (transaction) => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/transactions`, transaction);
      setTransactions([...transactions, response.data]);
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const deleteTransaction = async (id) => {
    try {
      await axios.delete(`${import.meta.env.VITE_REACT_APP_BACKEND_BASEURL}/api/transactions/${id}`);
      setTransactions(transactions.filter((txn) => txn._id !== id));
    } catch (error) {
      console.error("Error deleting transaction:", error);
    }
  };

  return (
    <>
      <h1 className=" bg-blue-500 text-xl md:text-3xl font-semibold text-white text-center py-4 ">Anas Budget Tracker App</h1>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
      <Summary transactions={transactions} />
      <CategoryBreakdown transactions={transactions} />
    </>
  );
}

export default App;
