const { mongoose } = require("mongoose")

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    products: [{
        id: { type: String, required: true },
        title: { type: String, required: true },
        amount: { type: Number, required: true }
    }],
    total_price: { type: Number, required: true },
    customer_username: { type: String, required: true },
    status: { type: String, required: true, default: "Pending", enum: ["Pending", "Success", "Reject"] }
});
    
const Order = mongoose.model('orders', OrderSchema);  
module.exports = Order;