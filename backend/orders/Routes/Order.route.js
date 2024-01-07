const express = require('express');
const router = express.Router();
const Order = require('../Models/Order.model');
const cors = require('cors');
router.use(cors());

router.post('/', async (req, res, next) => {
    try {
        const order = new Order(req.body);
        await order.save();
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

module.exports = router;
