import React from 'react'
import { useCart } from '../Util/CartContext'
import { createOrder } from '../Util/OrderHelper'

import './Styles/Cart.css'

const Cart = () => {

  const {cart, handleAddToCart, handleRemoveFromCart, handleRemoveProduct, getTotalProductCost, emptyCart, getOrder} = useCart();

  const handleCommit = () => {
    const order = getOrder();
    if (order !== null) {
      createOrder(order); 
      emptyCart();
      alert("Order completed, Thank you!");
      setTimeout(() => {
        window.location.href = "/orders"
      }, 500);
    } else {
      alert("Cart is empty.");
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  }



  return (
    <div className="container-main">
      <div className='cart-container-main'>
          {  
          cart.map( (product) => (
            <div className="cart-main-info" key={product.id}>  
              <div className="cart-prod">
                <img src={product.img} alt="" className="cart-prod-image" />
                <div className="cart-prod-title">{product.title}</div>
              </div>
              <div className="cart-plus-minus-buttons">
                <button id = "cart-minus-button" className="custom-button" onClick={() => handleRemoveFromCart(product)}>-</button>
                <div className="cart-product-quantity">{product.quantity}</div>
                <button id = "cart-plus-button" className="custom-button" onClick={() => handleAddToCart(product)}>+</button>
              </div>
              <div className="cart-price">{(product.price * product.quantity).toFixed(2)}€</div>
              <button id = "cart-remove-button" className="custom-button" onClick={() => handleRemoveProduct(product)}>Remove</button>
            </div>
          ))
          }
          <div className="total-cost-container">
            <div className="cart-total-cost">Total Cost: {getTotalProductCost().toFixed(2)}€</div>
            <button id = "cart-complete-order-button" className="custom-button" onClick={() => handleCommit()}>Complete Order</button>
          </div>
      </div>
    </div>
  )
}

export default Cart
