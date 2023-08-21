// import mongoose from 'mongoose'

// const connectDB=async()=>{
//     try{
//         const conn=await mongoose.connect(process.env.MONGO_URL,{
//             useUnifiedTopology:true,
//             useNewUrlParser:true,
//             useCreateIndex:true,
//         })
//         console.log(`MongoDB connected:${conn.connection.host}`);
//     } catch (error) {
//         console.error(`Error:${err.message}`)
//         process.exit(1)
//     }
// }
// export default connectDB


const mongoose = require('mongoose');
mongoose.set('strictQuery', true);

const connect = () => {
    return mongoose.connect('mongodb+srv://aruaecstacy:beloved.25@cluster1.aptjs0n.mongodb.net/aruaecstacy');
};

module.exports = connect;