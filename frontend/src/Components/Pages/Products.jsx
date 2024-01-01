import React from 'react'
import './Styles/Products.css'
import dummyproducts from '../DummyData/dummyproducts'
import ProductsList from '../Util/ProductsList'

const Products = () => {

  return (
    <div className='container-main'>
      <div className="container-products">
        {dummyproducts.map(dummyproducts=> (
          <ProductsList
            key = {dummyproducts.id}
            id = {dummyproducts.id}
            title = {dummyproducts.title}
            img = {dummyproducts.img}
            price = {dummyproducts.price}
            quantity = {dummyproducts.quantity}
            product_type = {dummyproducts.product_type}
            product_color = {dummyproducts.product_color}
            brand = {dummyproducts.brand}
            description = {dummyproducts.description}
            seller_username = {dummyproducts.seller_username}
          />
        ))
        }
      </div>
    </div>
  )
}

export default Products