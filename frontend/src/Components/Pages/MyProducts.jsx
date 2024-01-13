import React from 'react'
import { useState, useEffect } from 'react';
import { getProductsUsername, updateProduct, deleteProduct } from '../Util/ProdHelper';
import './Styles/MyProducts.css'

const MyProducts = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProductsUsername().then(data => {
      setProducts(data || []);
    });
  }, []);

  function handleQuantityChange(product, value){
    if(value >= 0){
      product.quantity = value
    }
  }

  function handlePriceChange(product, value){
    if(value >= 0){
      product.price = value
    }
  }

  function handleUpdateProduct(product){
    if ( product.price === '' || product.quantity === ''){
      alert("Invalid quantity or price");
      setTimeout(()=>{
        window.location.reload();
      },500)
    }else if ( product.price >= 0 && product.quantity >= 0){
      updateProduct(product , product._id);
      setTimeout(()=>{
        window.location.reload();
      },500)
    }else{
      alert("Invalid quantity or price")
      setTimeout(()=>{
        window.location.reload();
      },500)
    }
  }

  function handleDeleteProduct(product){
    deleteProduct(product._id);
    setTimeout(()=>{
      window.location.reload();
    },500)
  }

  function handleNewProductClick(){
    window.location.href = "/myproducts/new"
  }

  return (
    <div className='container-main'>
      <div className='myproducts-container-main'>
        {products.map( (product)=> (
          <div className="cart-main-info" key={product._id}>
            <div className="cart-prod">
              <img src={product.img} alt="" className="cart-prod-image" />
              <div className="cart-prod-title">{product.title}</div>
            </div>
            
            <div className="myproducts-quantity-container">
              <div className="cart-product-quantity">{product.quantity}</div>
              <input className = "myproducts-inputfield-quantity" type="number" min="0" step="1" placeholder={product.quantity}
                onChange={(e) => handleQuantityChange(product, e.target.value)} />
            </div>

            <div className="myproducts-price-container">
              <div className="cart-price">{(product.price).toFixed(2)}€</div>
              <input className = "myproducts-inputfield-price" type="number" min="0" step="1" placeholder={product.price}
              onChange={(e) => handlePriceChange(product, e.target.value)} />
            </div>
            
            <button id="product-save-button" className="custom-button" onClick={() => handleUpdateProduct(product)}>Save</button>
            <button id="product-delete-button" className="custom-button" onClick={() => handleDeleteProduct(product)}>Delete</button>
          </div>
        ))
        }
      </div>
      <button id="product-new-button" className="custom-button" onClick={() => {handleNewProductClick()}}>Add New Product</button>
    </div>
    
  )
}

export default MyProducts