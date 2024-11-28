import React from 'react';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register required components
ChartJS.register(ArcElement, Tooltip, Legend, Title);

const ChartComponent = ({ income, expenses }) => {
  const data = {
    labels: ['Income', 'Expenses'],
    datasets: [
      {
        data: [income, expenses],
        backgroundColor: ['#4caf50', '#f44336'], // Green for income, red for expenses
        hoverOffset: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'top',
      },
      title: {
        display: true,
        text: 'Income vs Expenses',
      },
    },
  };

  return (
    <div style={{ width: '100%', maxWidth: '600px', margin: '2rem auto' }}>
      <h3 style={{ textAlign: 'center', marginBottom: '1rem' }}>Income vs Expenses</h3>
      <Pie data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
