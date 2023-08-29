const mongoose = require('mongoose');

// Set mongoose options
mongoose.set('strict', true); // Use 'strict' instead of 'strictQuery'

// Define the connection URL separately for clarity
const dbURI = 'mongodb+srv://sundayarua10:smeconnect@smeconnect.opwfzyx.mongodb.net/sundayarua10';

const connect = async () => {
    try {
        // Connect to the MongoDB database
        await mongoose.connect(dbURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to the MongoDB database');
    } catch (error) {
        console.error('Error connecting to the database:', error.message);
    }
};

module.exports = connect;
