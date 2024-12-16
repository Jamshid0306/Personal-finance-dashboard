// src/index.js

import React from 'react';
import ReactDOM from 'react-dom/client'; // ReactDOM'dan ReactDOMClient'ni import qiling
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios'; // Import axios

const API_KEY = '03e405cc586c4d88247f2d48'; // ExchangeRate-API dan API kalitingizni kiriting.
const BASE_URL = `https://v6.exchangerate-api.com/v6/${API_KEY}/latest/`;

export const getExchangeRates = async (baseCurrency) => {
  try {
    const response = await axios.get(`${BASE_URL}${baseCurrency}`);
    return response.data.conversion_rates;
  } catch (error) {
    console.error("Error fetching exchange rates:", error);
    return null;
  }
};

// Yangi createRoot API dan foydalaning
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
