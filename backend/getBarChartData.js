const Transaction = require('./models/Transaction');

const getBarChartData = async (req, res) => {
    const { month } = req.query;

    const pipeline = [
        { $match: { dateOfSale: { $regex: new RegExp(`^${month}-`, 'i') } } },
        {
            $bucket: {
                groupBy: '$price',
                boundaries: [0, 100, 200, 300, 400, 500, 600, 700, 800, 900, Infinity],
                output: { count: { $sum: 1 } },
            },
        },
    ];

    try {
        const result = await Transaction.aggregate(pipeline).exec();
        res.json(result);
    } catch (error) {
        console.error('Error fetching bar chart data:', error);
        res.status(500).json({ error: 'Failed to fetch bar chart data' });
    }
};

module.exports = getBarChartData;