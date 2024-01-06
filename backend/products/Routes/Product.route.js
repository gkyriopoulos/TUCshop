const express = require('express');
const router = express.Router();
const Product = require('../Models/Product.model');

/**
 * Route for getting all products.
 */
router.get('/', async (req, res, next) => {
    try {
        const products = await Product.find();
        res.send(products);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for creating a new product.
 */
router.post('/', async (req, res, next) => {
    try {
        const product = new Product(req.body);
        await product.save();
        res.send(product);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for getting a product by ID.
 */
router.get('/id/:id', async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        res.send(product);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for getting products by title.
 */
router.get('/title/:title', async (req, res, next) => {
    try {
        const product = await Product.find({title: req.params.title});
        res.send(product);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for getting products by seller username.
 */
router.get('/username/:username', async (req, res, next) => {
    try {
        const product = await Product.find({seller_username: req.params.username});
        res.send(product);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for updating a product by ID.
 */
router.put('/id/:id', async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body);
        res.send(updatedProduct);
    } catch (err) {
        console.error(err);
        next(err);
    }
});

/**
 * Route for deleting a product by ID.
 */
router.delete('/id/:id', async (req, res, next) => {
    try {
        const deletedProduct = await Product.findByIdAndDelete(req.params.id);
        res.send(deletedProduct)
    } catch (err) {
        console.error(err);
        next(err);
    }
}); 

module.exports = router;
