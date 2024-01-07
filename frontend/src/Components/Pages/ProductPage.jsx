import React from 'react';
import { useLocation } from 'react-router-dom';
import './Styles/ProductPage.css'
import { useCart } from '../Util/CartContext'

const ProductPage = (props) => {
    const location = useLocation();
    
    const {handleAddToCart} = useCart();

    return (
        <div className='container-main'>
            <div className="product-main-info">
                <div className="product-full-card-and-info-container">
                    <div className="product-full-card">
                        <img src={location.state.img} alt="" className="product-img" />
                        <h2 id="product-page-product-title" className='product-title'>{location.state.title}</h2>
                    </div>
                    <div className="seller-info-container">
                        <div className="product-seller">Seller: {location.state.seller_username}</div>
                        <div className="product-seller">Quantity: {location.state.quantity}</div>
                    </div>
                </div>
                <div className="product-descript-cart-container">
                    <div className='product-description-container'>
                        <div className="product-description">
                            <div className="description">{location.state.description}</div>
                        </div>
                    </div>
                    <div className="product-cart-container">
                        <div className="product-cart">
                            <div className="product-cart-price">{location.state.price}€</div>
                            <div className="add-to-cart-container">
                                <button id = "add-to-cart-button" className="custom-button" onClick={() => handleAddToCart(location.state)}>Add to cart</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  );
}
    
export default ProductPage;
