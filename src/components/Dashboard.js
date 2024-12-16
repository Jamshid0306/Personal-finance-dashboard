import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const Dashboard = ({ transactions, exchangeRates, baseCurrency }) => {
  const totalIncome = transactions
    .filter((tx) => tx.type === 'income')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const totalExpense = transactions
    .filter((tx) => tx.type === 'expense')
    .reduce((acc, tx) => acc + tx.amount, 0);

  const categories = [...new Set(transactions.map((tx) => tx.category))];
  const categoryData = categories.map((category) => {
    return transactions
      .filter((tx) => tx.category === category && tx.type === 'expense')
      .reduce((acc, tx) => acc + tx.amount, 0);
  });

  const pieData = {
    labels: categories,
    datasets: [
      {
        data: categoryData,
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF'],
      },
    ],
  };

  return (
    <div className="mb-4">
      <h3>Dashboard</h3>
      <p><strong>Total Income:</strong> {totalIncome} {baseCurrency}</p>
      <p><strong>Total Expense:</strong> {totalExpense} {baseCurrency}</p>
      <p><strong>Net Balance:</strong> {totalIncome - totalExpense} {baseCurrency}</p>
      <div style={{ width: '200px', margin: '0 auto' }}> {/* Hajmini kichikroq qilamiz */}
        <Pie data={pieData} />
      </div>
    </div>
  );
};

export default Dashboard;
