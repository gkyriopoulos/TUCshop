const express = require('express');
const router = express.Router();
const Order = require('../Models/Order.model');
const cors = require('cors');
const kafka = require('../Kafka/kafka')
router.use(cors());

router.post('/', async (req, res, next) => {
    try {
        const order = new Order(req.body);
        await order.save();
        
        const msg = {
            id: order._id,
            products: order.products.map(product => ({
              product_id: product.id,
              amount: product.amount
            }))
        };
        await kafka.kafkaProducer(msg)

          
        res.send(order);
    } catch (error) {
        next(error);
    }
});

router.get('/username/:username', async (req, res, next) => {
    try {
        const orders = await Order.find({customer_username: req.params.username});
        res.send(orders);
    } catch (error) {
        next(error);
    }
});

router.get('/id/:id', async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        res.send(order);
    } catch (error) {
        next(error);
    }
});

router.put('/id/:id', async (req, res, next) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, req.body);
        res.send(updatedOrder);
    } catch (err) {
        console.error(err);
        next(err);
    }
});


module.exports = router;
