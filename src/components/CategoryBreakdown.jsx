import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useEffect, useState } from 'react';

ChartJS.register(ArcElement, Tooltip, Legend);

const CategoryBreakdown = ({ transactions }) => {
  const [loading, setLoading] = useState(true); 
  const [categories, setCategories] = useState([]);
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    if (transactions.length > 0) {
      const expenseTransactions = transactions.filter((txn) => txn.type === 'expense');
      const incomeTransactions = transactions.filter((txn) => txn.type === 'income');

      const allCategories = [...new Set([...expenseTransactions.map((txn) => txn.category), ...incomeTransactions.map((txn) => txn.category)])];

      const categoryData = allCategories.map((cat) => {
        const expenseSum = expenseTransactions.filter((txn) => txn.category === cat).reduce((sum, txn) => sum + txn.amount, 0);
        const incomeSum = incomeTransactions.filter((txn) => txn.category === cat).reduce((sum, txn) => sum + txn.amount, 0);
        return expenseSum - incomeSum; 
      });

      setCategories(allCategories);
      setCategoryData(categoryData);
      setLoading(false); 
    }
  }, [transactions]);

  if (loading) {
    return <div>Loading...</div>; 
  }

  const data = {
    labels: categories,
    datasets: [
      {
        label: 'Category Breakdown',
        data: categoryData,
        backgroundColor: categories.map(() => `hsl(${Math.random() * 360}, 70%, 60%)`),
      },
    ],
  };

  const options = {
    responsive: true,  // Ensures the chart is responsive
    maintainAspectRatio: false,  // Allows chart to resize based on container size
    plugins: {
      tooltip: {
        enabled: true,
      },
      legend: {
        position: 'top', // Customize the legend position
      },
    },
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-lg mt-4" style={{ maxWidth: '500px', width: '100%', height: 'auto' }}>
      <h2 className="text-xl font-bold mb-4">Category Breakdown</h2>
      <div className='flex items-center' style={{ position: 'relative', height: '400px'  }}>
        <Pie data={data} options={options} />
      </div>
    </div>
  );
};

export default CategoryBreakdown;
