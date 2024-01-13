const kafka = require('./Kafka/kafka') //initialize kafka consumer
const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

const app = express();
const port = process.env.PORT_PRODUCTS || 5000;
const uri = process.env.MONGODB_URI_PRODUCTS || 'mongodb://localhost:27017/products_db';

mongoose.connect(uri, {})
    .then(() => {
        console.log('(Products Service) Connected to MongoDB successfully');
    })
    .catch((err) => {
        console.error('(Products Service) Failed to connect to MongoDB:', err);
    });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const productRoutes = require('./Routes/Product.route');

app.use('/products', productRoutes);

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
    console.log(`(Products Service) Service is listening on port ${port}`);
});
