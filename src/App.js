import React, { useState, useEffect } from 'react';
import { getExchangeRates } from './services/exchangeRateService';
import TransactionForm from './components/TransactionForm';
import TransactionList from './components/TransactionList';
import Dashboard from './components/Dashboard';
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS import qilindi

function App() {
  const [transactions, setTransactions] = useState([]);
  const [exchangeRates, setExchangeRates] = useState({});
  const [baseCurrency, setBaseCurrency] = useState('USD');

  // Local Storage dan ma'lumotlarni olish
  useEffect(() => {
    const storedTransactions = JSON.parse(localStorage.getItem('transactions')) || [];
    setTransactions(storedTransactions);
  }, []);

  // Local Storage ga saqlash
  useEffect(() => {
    localStorage.setItem('transactions', JSON.stringify(transactions));
  }, [transactions]);

  // Valyuta kurslarini olish
  useEffect(() => {
    const fetchExchangeRates = async () => {
      const rates = await getExchangeRates(baseCurrency);
      if (rates) setExchangeRates(rates);
    };
    fetchExchangeRates();
  }, [baseCurrency]);

  // Yangi tranzaksiyani qo'shish
  const addTransaction = (transaction) => {
    setTransactions((prevTransactions) => [...prevTransactions, transaction]);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center">Personal Finance Dashboard</h1>
      <Dashboard 
        transactions={transactions} 
        exchangeRates={exchangeRates} 
        baseCurrency={baseCurrency} 
      />
      <TransactionForm 
        addTransaction={addTransaction} 
        exchangeRates={exchangeRates} 
      />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
