import React from 'react'
import './Styles/Cart.css'
import { useCart } from '../Util/CartContext'

const Cart = () => {
  const {cart, handleAddToCart, handleRemoveFromCart, handleRemoveProduct, getTotalProductCost} = useCart();

  return (
    <div className="container-main">
      <div className='cart-container-main'>
          {cart.map( (product)=> (
            <div className="cart-main-info">
              <div className="cart-prod">
                <img src={product.img} alt="" className="cart-prod-image" />
                <div className="cart-prod-title">{product.title}</div>
              </div>
              <div className="cart-plus-minus-buttons">
                <button id = "cart-plus-button" className="custom-button" onClick={() => handleAddToCart(product)}>+</button>
                <div className="cart-product-quantity">{product.quantity}</div>
                <button id = "cart-minus-button" className="custom-button" onClick={() => handleRemoveFromCart(product)}>-</button>
              </div>
              <div className="cart-price">{(product.price * product.quantity).toFixed(2)}€</div>
              <button id = "cart-remove-button" className="custom-button" onClick={() => handleRemoveProduct(product)}>Remove</button>
            </div>
          ))
          }
          <div className="total-cost-container">
            <div className="cart-total-cost">Total Cost: {getTotalProductCost().toFixed(2)}€</div>
            <button id = "cart-complete-order-button" className="custom-button">Complete Order</button>
          </div>
      </div>
    </div>
  )
}

export default Cart
