const Transaction = require('./models/Transaction');

const getStatistics = async (req, res) => {
    const { month } = req.query;
    console.log('ok till here');
    

    // Parse the month and year from the query parameter
    const year = parseInt(month.split('-')[0], 10);
    const monthNumber = parseInt(month.split('-')[1], 10);

    // Create Date objects for the start and end of the month, considering UTC timezone
    const startDate = new Date(Date.UTC(year, monthNumber - 1, 1));
    const endDate = new Date(Date.UTC(year, monthNumber, 0, 23, 59, 59));

    const query = {
        dateOfSale: {
            $gte: startDate,
            $lte: endDate
        }
    };

    const totalSaleAmount = await Transaction.aggregate([
        { $match: query },
        { $group: { _id: null, totalSaleAmount: { $sum: '$price' } } }
    ]).exec();

    const totalSoldItems = await Transaction.countDocuments({ ...query, sold: true });
    const totalNotSoldItems = await Transaction.countDocuments({ ...query, sold: false });

    res.json({
        totalSaleAmount: totalSaleAmount[0]?.totalSaleAmount || 0,
        totalSoldItems,
        totalNotSoldItems
    });
};

module.exports = getStatistics;