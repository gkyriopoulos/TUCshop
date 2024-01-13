import axios from 'axios';

const base_url = "http://localhost:5001/";

/** NOTE: Order should be in raw format. The conversion from 
 * cart => order is done in Cart.jsx for convinience.
 * Check getOrder() at Cart.jsx **/
async function createOrder(order){
    
    if (localStorage.getItem("role") === "customer"){
        const url = base_url + "orders";
        try {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            
            const response = await axios.post(url, order, { headers: myHeaders });
    
            if(response.status === 200){
                return response.data;
            }else{
                const err = await response.json();
                console.log(err) ;
            }
        } catch (error) {
            console.error('Error creating order: ', error);
        }
      }else{
        alert("Non costumers dont have access to this api call.")
        setTimeout(()=>{
          window.location.reload();
        },500)
      }
}

async function getUserOrders(username){
    if (localStorage.getItem("role") === "customer"){
        const url = base_url + "orders/username/" + username;
        try {
            const response = await axios.get(url);
            if(response.status === 200){
                return response.data;
            }else{
                const err = await response.json();
                console.log(err) ;
            }
        } catch (error) {
            console.error('Error getting user orders: ', error);
        }
      }else{
        alert("Non costumers dont have access to this api call.")
        setTimeout(()=>{
          window.location.reload();
        },500)
      }
}
export {createOrder, getUserOrders}