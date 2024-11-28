// import React, { useState } from 'react';
// import Header from './components/Header';
// import Dashboard from './components/Dashboard';
// import TransactionForm from './components/TransactionForm';
// import TransactionList from './components/TransactionList';
// import './App.css';

// const App = () => {
//   const [transactions, setTransactions] = useState([]);

//   const addTransaction = (transaction) => {
//     setTransactions([...transactions, transaction]);
//   };

//   const income = transactions
//     .filter((t) => t.type === 'income')
//     .reduce((acc, t) => acc + t.amount, 0);

//   const expenses = transactions
//     .filter((t) => t.type === 'expense')
//     .reduce((acc, t) => acc + t.amount, 0);

//   return (
//     <div className="app">
//       <Header />
//       <Dashboard income={income} expenses={expenses} />
//       <TransactionForm addTransaction={addTransaction} />
//       <TransactionList transactions={transactions} />
//     </div>
//   );
// };

// export default App;


import React, { useState } from 'react';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import './App.css';

const App = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const income = transactions
    .filter((t) => t.type === 'income')
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === 'expense')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div className="app">
      <Header />
      <Dashboard income={income} expenses={expenses} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default App;
