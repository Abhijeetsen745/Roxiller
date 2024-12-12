import axios from 'axios';

const API_URL = 'http://localhost:3000/api'; 
export const fetchTransactions = async (month, search, page, perPage) => {
  const params = { month, search, page, perPage };
  try {
    const response = await axios.get(`${API_URL}/transactions`, { params });
    return response.data;
    // console.log(response.data);
    
    
  } catch (error) {
    console.error('Error fetching transactions:', error);
    throw error; 
  }
};

export const fetchStatistics = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/statistics?month=${month}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching statistics:', error);
    throw error; 
  }
};

export const fetchBarChartData = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/bar-chart-data?month=${month}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching bar chart data:', error);
    throw error; // Or handle the error as needed
  }
};

export const fetchPieChartData = async (month) => {
  try {
    const response = await axios.get(`${API_URL}/pie-chart-data?month=${month}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching pie chart data:', error);
    throw error; // Or handle the error as needed
  }
};