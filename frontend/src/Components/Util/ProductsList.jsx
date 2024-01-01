import React from 'react'
import './Styles/ProductsList.css'
import { Link } from 'react-router-dom'

const ProductsList = (prod) => {
  return (
    <div className = 'product-list'>
      <Link to={`/product/${prod.id}`} state = {prod} className="product-link">
        <div id = {prod.id} className="product-card">
            <img src={prod.img} alt="" className="product-image" />
            <div className="product-contents">
              <h3 className="product-name">{prod.title}</h3>
              <div className="product-price">{prod.price}€</div>
            </div>
        </div>
      </Link>
    </div>
  )
}
export default ProductsList