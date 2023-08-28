
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect('mongodb+srv://sundayarua10:smeconnect@smeconnect.opwfzyx.mongodb.net/sundayarua10');
};

module.exports = connect;