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

app.get('/url/:id', (req, res) => {
   // TODO: get a specific url
});

app.get('/:id', (req, res) => {
    // TODO: redirect to a specific url
})

app.post('/url', (req, res) => { 
    // TODO: create a new url
});

app.delete('/url/:id', (req, res) => { 
    // TODO: delete a specific url
});

app.put('/url/:id', (req, res) => {
    // TODO: update a specific url
});  

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
})