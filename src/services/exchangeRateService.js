import axios from 'axios';

const API_KEY = '03e405cc586c4d88247f2d48';
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
