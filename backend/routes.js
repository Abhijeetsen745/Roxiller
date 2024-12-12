const express = require('express');
const router = express.Router();
const seedData = require('./seedData.js');
const getTransactions = require('./getTransactions');
const getStatistics = require('./getStatistics.js');
const getBarChartData = require('./getBarChartData.js');
const getPieChartData = require('./getPieChartData.js');

// Seed the database (run this once)
seedData();

router.get('/transactions', getTransactions);
router.get('/statistics', getStatistics);
router.get('/bar-chart-data', getBarChartData);
router.get('/pie-chart-data', getPieChartData);

module.exports = router;