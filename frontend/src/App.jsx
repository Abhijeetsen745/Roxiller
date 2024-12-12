import React from 'react';
import './App.css';
import TransactionTable from './components/TransactionTable';
import Statistics from './components/Statistics';
import BarChart from './components/BarChart';
import PieChart from './components/PieChart';


function App() {
    return (
        <div>
            <TransactionTable />   
            <Statistics />
            <BarChart />
            <PieChart />
        </div>
    );
}

export default App;