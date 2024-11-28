import React from 'react';

const Dashboard = ({ income, expenses }) => {
  const balance = income - expenses;

  return (
    <div className="dashboard">
      {/* <h2>Dashboard</h2> */}
      <div className="stats">
        {/* <p>Income: ${income.toFixed(2)}</p>
        <p>Expenses: ${expenses.toFixed(2)}</p>
        <p>Balance: ${balance.toFixed(2)}</p> */}

        <p className='income'>Income: ₹ {income.toFixed(2)}</p>
        <p className='expense'>Expenses: ₹ {expenses.toFixed(2)}</p>
        <p className='balance'>Balance: ₹ {balance.toFixed(2)}</p>

      </div>
    </div>
  );
};

export default Dashboard;