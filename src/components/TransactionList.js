// import React from 'react';

// const TransactionList = ({ transactions }) => {
//   return (
//     <div className="transaction-list">
//       <h3>Transaction History</h3>
//       <ul>
//         {transactions.map((transaction, index) => (
//           // <li key={index} className={transaction.type}>
//           //   {transaction.description} - ${transaction.amount.toFixed(2)}
//           // </li>
//           <li key={index} className={transaction.type}>
//             <span>
//               {transaction.type === 'income' ? (
//                 <i className="fas fa-arrow-up"></i>
//               ) : (
//                 <i className="fas fa-arrow-down"></i>
//               )}
//               {transaction.description}
//             </span>
//             <span>₹ {transaction.amount.toFixed(2)}</span>
//           </li>

//         ))}
//       </ul>
//     </div>
//   );
// };

// export default TransactionList;


import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div className="transaction-list">
      <h3>Transaction History</h3>
      <ul>
        {transactions.map((transaction, index) => (
          <li key={index} className={transaction.type}>
            <div>
              <span>{transaction.description}</span>
              <small>
                {/* {transaction.date.toLocaleDateString()} {transaction.date.toLocaleTimeString()} */}
                {transaction.date.toLocaleDateString('en-GB')} {transaction.date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}

              </small>
            </div>
            <span>₹{transaction.amount.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionList;
