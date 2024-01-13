const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = process.env.PORT_ORDERS || 5001;
const uri = process.env.MONGODB_URI_ORDERS || 'mongodb://localhost:27017/orders_db';

mongoose.connect(uri, {})
    .then(() => {
        console.log('(Orders Service) Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('(Orders Service) Failed to connect to MongoDB:', err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const orderRoutes = require('./Routes/Order.route');

app.use('/orders', orderRoutes);

//Not found route handler
app.use((req, res, next) => {
    const error = new Error();
    error.status = 404;
    error.message = 'Not found!';   
    next(error)
});

//Error handler
app.use((err, req, res, next) => {
    res.send(err);
});

app.listen(port, () => {
    console.log(`(Orders Service) Service is listening on port ${port}`);
});
