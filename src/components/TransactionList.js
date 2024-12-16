import React from 'react';

const TransactionList = ({ transactions }) => {
  return (
    <div>
      <h3 className="mb-3">Transaction List</h3>
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>Category</th>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((tx, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{tx.category}</td>
              <td>{tx.type}</td>
              <td>{tx.amount}</td>
              <td>{tx.currency}</td>
              <td>{tx.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionList;
