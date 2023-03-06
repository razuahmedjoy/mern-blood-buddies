const express = require('express');
const cors = require('cors');
const ErrorHandler = require('./middlewares/ErrorHandler');
const { userRoutes } = require('./routes/user.route');
const app = express();

app.use(express.json());
app.use(cors());



// import routes




app.get('/', (req, res) => {
    res.send('Hello World! Server is runnning well');
});

app.use('/api/v1/user',userRoutes);


// global error handler
app.use(ErrorHandler)

module.exports = app;