import React, { useState, useEffect } from 'react';
import './Styles/Products.css';
import ProductsList from '../Util/ProductsList';
import { getProducts } from '../Util/ProdHelper';

const Products = () => {
  /*Fetch all the products from the database on page mount. */
  
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts().then(data => {setProducts(data);});
  }, []);

  return (
    <div className='container-main'>
      <div className="container-products">
        {products.map(product => (
          <ProductsList
            key={product._id}
            id={product._id}
            title={product.title}
            img={product.img}
            price={product.price}
            quantity={product.quantity}
            product_type={product.product_type}
            product_color={product.product_color}
            brand={product.brand}
            description={product.description}
            seller_username={product.seller_username}
          />
        ))}
      </div>
    </div>
  );
};

export default Products;
