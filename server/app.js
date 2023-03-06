const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());



// routes
app.get('/', (req, res) => {
    res.send('Hello World! Server is runnning well');
});

module.exports = app;