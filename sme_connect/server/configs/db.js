
const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect('mongodb+srv://AlxFinalProject:alxproject@alxfinalproject.nnk1ehi.mongodb.net/');
};

module.exports = connect;