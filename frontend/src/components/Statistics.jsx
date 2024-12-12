import React, { useState, useEffect } from 'react';
import { fetchStatistics } from './apiService.js';

const Statistics = () => {
    const [statistics, setStatistics] = useState({});
    const [selectedMonth, setSelectedMonth] = useState('March');

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchStatistics(selectedMonth);
                console.log(data);
                
                // setStatistics(data);
            } catch (error) {
                console.error('Error fetching statistics:', error);
            }
        };
        fetch();
    }, [selectedMonth]);

    return (
        <div>
            <h2>Statistics</h2>
            <p>Total Sale Amount: {statistics.totalSaleAmount}</p>
            <p>Total Sold Items: {statistics.totalSoldItems}</p>
            <p>Total Not Sold Items: {statistics.totalNotSoldItems}</p>
        </div>
    );
};

export default Statistics;