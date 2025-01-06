import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register the required chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryBreakdown = ({ transactions }) => {
  const expenseTransactions = transactions.filter((txn) => txn.type === 'expense');
  const categories = [...new Set(expenseTransactions.map((txn) => txn.category))];

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Expenses',
        data: categories.map((cat) =>
          expenseTransactions
            .filter((txn) => txn.category === cat)
            .reduce((sum, txn) => sum + txn.amount, 0)
        ),
        backgroundColor: ['#f87171', '#fbbf24', '#34d399', '#60a5fa', '#a78bfa'],
      },
    ],
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4">
      <h2 className="text-xl font-bold mb-4">Category Breakdown</h2>
      <Pie data={data} />
    </div>
  );
};

export default CategoryBreakdown;
