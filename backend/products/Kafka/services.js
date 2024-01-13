const axios = require('axios');
base_url = 'http://localhost:5000';

const handleProducts = async (orders)=>{
    try {
        for (const product of orders.products){
            url = base_url + "/products/id/" + product.product_id
            //Get the product from the db.
            const product_db = await axios.get(url);
            //Check if there is enough products in stock.
            if (product_db.data.quantity < product.amount){
                return false;
            }else{
                //Update the product ammount and put it back to the db.
                product_db.data.quantity -= product.amount;
                await axios.put(url, product_db.data);
            }
        }
        return true;
    } catch (error) {
        console.log(error.message)
        throw new Error(error)
    }
}

module.exports = { handleProducts }