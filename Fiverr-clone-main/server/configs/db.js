
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect('mongodb+srv://aruaecstacy:beloved.25@cluster1.aptjs0n.mongodb.net/aruaecstacy');
};

module.exports = connect;