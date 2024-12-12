const Transaction = require('./models/Transaction');

 const getTransactions = async (req, res) => {
    const { startTime, endTime, search, page = 1, perPage = 10 } = req.query;

    const query = {};

         if (startTime && endTime) {
        query.dateOfSale = {
            $gte: new Date(startTime),
            $lte: new Date(endTime)
        };
    }

   
    if (search) {
        query.$or = [
            { productName: { $regex: search, $options: 'i' } },
            { description: { $regex: search, $options: 'i' } },
            { price: { $regex: search, $options: 'i' } },
        ];
    }

    const transactions = await Transaction.find(query)
    .skip(Math.max(0, (page - 1) * perPage))
    .limit(perPage);

    console.log('Fetched transactions:', transactions);
    res.json(transactions);
};
module.exports = getTransactions;