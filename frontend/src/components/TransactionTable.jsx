import React, { useState, useEffect } from 'react';
import { fetchTransactions } from './apiService.js';

const TransactionTable = () => {
    const [transactions, setTransactions] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [selectedMonth, setSelectedMonth] = useState('March');

    useEffect(() => {
        const fetch = async () => {
            try {
                const data = await fetchTransactions(selectedMonth, searchQuery, currentPage, 10);
                setTransactions(data);
                console.log(data)
                
            } catch (error) {
                console.error('Error fetching transactions:', error);
            }
        };
        fetch();
    }, [selectedMonth, searchQuery, currentPage]);

    const handleSearchChange = (e) => {
        setSearchQuery(e.target.value);
    };

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const handleMonthChange = (event) => {
        setSelectedMonth(event.target.value);
    };

    return (
        <div>
            <input type="text" value={searchQuery} onChange={handleSearchChange} placeholder="Search Transactions" />
            <select value={selectedMonth} onChange={handleMonthChange}>
                <option value="January">January</option>
                <option value="February">February</option>
                <option value="March">March</option>
                <option value="April">April</option>
                <option value="May">May</option>
                <option value="June">June</option>
                <option value="July">July</option>
                <option value="August">August</option>
                <option value="September">September</option>
                <option value="October">October</option>
                <option value="November">November</option>
                <option value="December">December</option>
            </select>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Product Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Sold</th>
                    </tr>
                </thead>
                <tbody>
               
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>{transaction.productName}</td>
                            <td>{transaction.description}</td>
                            <td>{transaction.price}</td>
                            <td>{transaction.sold ? 'Yes' : 'No'}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Pagination controls */}
            <button onClick={() => handlePageChange(currentPage - 1)}>Previous</button>
            <button onClick={() => handlePageChange(currentPage + 1)}>Next</button>
        </div>
    );
};

export default TransactionTable;