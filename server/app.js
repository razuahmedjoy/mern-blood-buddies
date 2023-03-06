const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middlewares/ErrorHandler');
const app = express();

app.use(express.json());
app.use(cors());



// routes
app.get('/', (req, res) => {
    res.send('Hello World! Server is runnning well');
});



// global error handler
app.use(ErrorHandler)

module.exports = app;