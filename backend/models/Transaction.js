const mongoose = require('mongoose');


const transactionSchema = new mongoose.Schema({
    productId: String,
    productName: String,
    description: String,
    price: {
        type: Number,
        required: true,
        validate: {
            validator: (value) => {
                return typeof value === 'number' && !isNaN(value);
            },
            message: 'Price must be a valid number'
        }
    },
    dateOfSale: {
        type: Date,
        required: true,
        validate: {
            validator: (value) => {
                return value instanceof Date && !isNaN(value.getTime());
            },
            message: 'Date of sale must be a valid date'
        }
    },
    sold: Boolean,
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;