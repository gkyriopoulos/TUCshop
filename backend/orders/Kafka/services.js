const axios = require('axios');
base_url = 'http://localhost:5001';

const handleOrder = async (order)=>{
    try {
        url = base_url + "/orders/id/" + order.id
        //console.log("Product url for request: " + url)
        const order_db = await axios.get(url);
        //console.log("URL: " + url);
        //console.log("Order fetched successfully: " + order_db.data);
        order_db.data.status = order.status;
        //console.log("Order updated(before database entry): " + order_db.data);
        await axios.put(url, order_db.data);
        return true;
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}

module.exports = { handleOrder }