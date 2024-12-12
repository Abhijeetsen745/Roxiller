const Transaction = require('./models/Transaction');

const getPieChartData = async (req, res) => {
    const { month } = req.query;

    const pipeline = [
        { $match: { dateOfSale: { $regex: new RegExp(`^${month}-`, 'i') } } },
        { $group: { _id: '$productName', count: { $sum: 1 } } },
    ];

    try {
        const result = await Transaction.aggregate(pipeline).exec();
        res.json(result);
    } catch (error) {
        console.error('Error fetching pie chart data:', error);
        res.status(500).json({ error: 'Failed to fetch pie chart data' });
    }
};

module.exports = getPieChartData;