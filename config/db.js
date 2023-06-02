const mongoose = require('mongoose');
require('dotenv').config({ path: './config/.env'});

const connectDb = () => {
    let MONGODB_URI, db;

    if (process.env.NODE_ENV === 'test') {
        MONGODB_URI = process.env.MONGODB_TEST_URI;
        db = 'test db';
    } else if (process.env.NODE_ENV === 'development') {
        MONGODB_URI = process.env.MONGODB_DEV_URI;
        db = 'dev db';
    } else {
        MONGODB_URI = process.env.MONGODB_PROD_URI;
        db = 'prod db';
    }

    mongoose.connect(MONGODB_URI);
    const connection = mongoose.connection;

    connection.on('connected', () => { console.log(`Connected to ${db}`) });
    connection.on('error', (err) => { console.log('Error connecting to db', err) });
}

module.exports = connectDb;