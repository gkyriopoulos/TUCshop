const { mongoose } = require("mongoose")

const Schema = mongoose.Schema;

const ProductScema = new Schema({
    title: {
        type: String,
        required: true,
        unique: true
    },
    img: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        default: 0.0,
        min: 0.0
    },
    description: {
        type: String,
        required: true
    },
    product_type: {
        type: String,
        required: true
    },
    product_color: {
        type: String,
        required: true
    },
    brand: {
        type: String,
        required: true
    },
    seller_username: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        default: 0,
        min: 0.0
    }
})

const Product = mongoose.model('products', ProductScema);  
module.exports = Product;