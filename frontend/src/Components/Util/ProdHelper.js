import axios from 'axios';
const base_url = "http://localhost:5000/";

async function getProducts() {
  if (localStorage.getItem("token")){ 
    const url = base_url + "products"
    try {
      const response = await axios.get(url);
      if(response.status === 200){
        return response.data
      }else{
        const err = await response.json();
        console.log(err) ;
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }else{
    alert("Non logged in users dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
};

async function getProductId(productId) {
  if(localStorage.getItem("token")){
    const url = base_url + "products/id/" + productId
    try {
      const response = await axios.get(url);
      if(response.status === 200){
        return response.data
      }else{
        const err = await response.json();
        console.log(err) ;
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }else{
    alert("Non logged in users dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
};

async function getProductsTitle(productTitle) {
  if (localStorage.getItem("token")){
    const url = base_url + "products/title/" + productTitle
    try {
      const response = await axios.get(url);
      if(response.status === 200){
        return response.data
      }else{
        const err = await response.json();
        console.log(err) ;
      }
    } catch (error) {
      console.error('Error fetching product:', error);
    }
  }else{
    alert("Non logged in users dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
};

async function getProductsUsername(username) {
  if (localStorage.getItem("token")){
    const url = base_url + "products/username/" + username;
    try {
      const response = await axios.get(url);
      if(response.status === 200){
        return response.data
      }else{
        const err = await response.json();
        console.log(err) ;
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }else{
    alert("Non logged in users dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
};

async function updateProduct(product, productId){
  if (localStorage.getItem("role") === "seller"){
    const url = base_url + "products/id/" + productId;
    try {
        const response = await axios.put(url, product);
        if(response.status === 200){
            return response.data;
        }else{
            const err = await response.json();
            console.log(err) ;
        }
    } catch (error) {
        console.error('Error updating product:', error);
    }
  }else{
    alert("Non sellers dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
    

}

async function createProduct(product){
  if (localStorage.getItem("role") === "seller"){
    const url = base_url + "products";
    try {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var urlencoded = new URLSearchParams();
        urlencoded.append("title", product.title);
        urlencoded.append("img", product.img);
        urlencoded.append("price", product.price);
        urlencoded.append("description", product.description);
        urlencoded.append("product_type", product.product_type);
        urlencoded.append("product_color", product.product_color);
        urlencoded.append("brand", product.brand);
        urlencoded.append("seller_username", localStorage.username);
        urlencoded.append("quantity", product.quantity);
        
        const response = await axios.post(url, urlencoded.toString(), { headers: myHeaders });
        console.log(response);

        if(response.status === 200){
            return response.data;
        }else{
            const err = await response.json();
            console.log(err) ;
        }
    } catch (error) {
        console.error('Error creating product:', error);
    }
  }else{
    alert("Non sellers dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
}

async function deleteProduct(productId){
  if (localStorage.getItem("role") === "seller"){
    const url = base_url + "products/id/" + productId;
    try {
        const response = await axios.delete(url);
        if(response.status === 200){
            return response.data;
        }else{
            const err = await response.json();
            console.log(err) ;
        }
    } catch (error) {
        console.error('Error deleting product:', error);
    }
  }else{
    alert("Non sellers dont have access to this api call.")
    setTimeout(()=>{
      window.location.reload();
    },500)
  }
}

export {getProducts, getProductsUsername, getProductsTitle, getProductId, updateProduct, createProduct, deleteProduct};