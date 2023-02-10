const mongoose = require('mongoose');
const path = require('path')
require('dotenv').config({ path: path.join('.env') });

const url=process.env.MONGODB_URI


const connectDB = async () => {
    try {
        const connection = await mongoose.connect(url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`MongoDB Connected`);
    } catch (error) {
        console.log(`Error Connectiing DB : ${error}`);
    }
};
module.exports = connectDB;
