import React, { useState, useEffect } from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'react-chartjs-2';
import { fetchBarChartData } from './apiService.js';

ChartJS.register(CategoryScale, LinearScale, BarElement);

const BarChart = () => {
    const [barChartData, setBarChartData] = useState({
        labels: [],
        datasets: [],
    });

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchBarChartData();
                const labels = data.map((item) => `${item._id}`);
                const values = data.map((item) => item.count);

                setBarChartData({
                    labels: labels,
                    datasets: [
                        {
                            label: 'Item Count',
                            data: values,
                            backgroundColor: 'rgba(255, 99, 132, 0.5)',
                            borderColor: 'rgba(255, 99, 132, 1)',
                            borderWidth: 1,
                        },
                    ],
                });
            } catch (error) {
                console.error('Error fetching bar chart data:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <div>
            <h2>Bar Chart</h2>
            <Bar data={barChartData} />
        </div>
    );
};

export default BarChart;