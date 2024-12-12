const getCombinedData = async (req, res) => {
    const { month } = req.query;

    const [statistics, barChartData, pieChartData] = await Promise.all([
        getStatistics({ query: { month } }),
        getBarChartData({ query: { month } }),
        getPieChartData({ query: { month } }),
    ]);

    res.json({ statistics, barChartData, pieChartData });
};

module.exports = getCombinedData;