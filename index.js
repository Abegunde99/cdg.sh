const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const dotenv = require('dotenv').config({ path: './config/.env'});

const app = express();

app.use(cors());
app.use(helmet());
app.use(morgan('tiny'));
app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));

//connect to db
const connectDb = require('./config/db');
connectDb();

const urlRouter = require('./routes/url');
app.use('/', urlRouter);

const port = process.env.PORT || 3001;

//error handler
app.use((err, req, res, next) => {
    if (err.status) {
        res.status(err.status);
    } else {
        res.status(500);
    }
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
    }); 
});

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})