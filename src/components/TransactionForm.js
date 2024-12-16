import React, { useState } from 'react';

const TransactionForm = ({ addTransaction, exchangeRates }) => {
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('');
  const [type, setType] = useState('income');
  const [date, setDate] = useState('');
  const [currency, setCurrency] = useState('USD');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount || !category || !date) return alert("All fields are required!");

    addTransaction({
      amount: parseFloat(amount),
      category,
      type,
      date,
      currency,
      description,
    });

    setAmount('');
    setCategory('');
    setType('income');
    setDate('');
    setCurrency('USD');
    setDescription('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="row">
        <div className="col-md-2">
          <input 
            type="number" 
            className="form-control" 
            placeholder="Amount" 
            value={amount} 
            onChange={(e) => setAmount(e.target.value)} 
          />
        </div>
        <div className="col-md-2">
          <select 
            className="form-control" 
            value={currency} 
            onChange={(e) => setCurrency(e.target.value)}>
            {Object.keys(exchangeRates).map((cur) => (
              <option key={cur} value={cur}>{cur}</option>
            ))}
          </select>
        </div>
        <div className="col-md-2">
          <input 
            type="text" 
            className="form-control" 
            placeholder="Category" 
            value={category} 
            onChange={(e) => setCategory(e.target.value)} 
          />
        </div>
        <div className="col-md-2">
          <select 
            className="form-control" 
            value={type} 
            onChange={(e) => setType(e.target.value)}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>
        </div>
        <div className="col-md-2">
          <input 
            type="date" 
            className="form-control" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
          />
        </div>
        <div className="col-md-2">
          <button type="submit" className="btn btn-primary btn-block">Add</button>
        </div>
      </div>
    </form>
  );
};

export default TransactionForm;
