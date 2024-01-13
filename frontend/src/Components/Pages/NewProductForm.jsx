import React, { useState } from 'react';
import {createProduct} from '../Util/ProdHelper';
import './Styles/NewProductForm.css';

const MyProductsNew = () => {
    const [product, setProduct] = useState({
        title: '',
        img: '',
        price: 0.0,
        description: '',
        product_type: '',
        product_color: '',
        brand: '',
        seller_username: localStorage.getItem("username"),
        quantity: 0,
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct((prevData) => ({ ...prevData, [name]: value }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        createProduct(product);
        alert("Product created successfully!");
        setTimeout(()=>{
            window.location.href = '/myproducts';
          },500)
      };

  return (
    <div className='myproducts-container-main'>
        <form className="myproducts-new-form" onSubmit={handleSubmit}>
            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="title">Title:</label>
                <input
                    className = "myproducts-new-input"
                    type="text"
                    id="title"
                    name="title"
                    value={product.title}
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="img">Image URL:</label>
                    <input
                        className = "myproducts-new-input"
                        type="text"
                        id="img"
                        name="img"
                        value={product.img}
                        onChange={handleChange}
                        required
                    />
            </div>

            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="price">Price:</label>
                <input
                    className = "myproducts-new-input"
                    type="number"
                    id="price"
                    name="price"
                    value={product.price}
                    min="0.0"
                    step="0.01"
                    onChange={handleChange}
                    required
                />
            </div>

            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="description">Description:</label>
                <textarea
                    className = "myproducts-new-input"
                    id="description"
                    name="description"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="product_type">Product Type:</label>
                <input
                    className = "myproducts-new-input"
                    type="text"
                    id="product_type"
                    name="product_type"
                    value={product.product_type}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="product_color">Product Color:</label>
                <input
                    className = "myproducts-new-input"
                    type="text"
                    id="product_color"
                    name="product_color"
                    value={product.product_color}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="brand">Brand:</label>
                <input
                    className = "myproducts-new-input"
                    type="text"
                    id="brand"
                    name="brand"
                    value={product.brand}
                    onChange={handleChange}
                    required
                />
            </div>
            
            <div className="myproducts-new-container">
                <label className = "myproducts-new-label" htmlFor="quantity">Quantity:</label>
                <input
                    className = "myproducts-new-input"
                    type="number"
                    id="quantity"
                    name="quantity"
                    value={product.quantity}
                    min="0"
                    step="1"
                    onChange={handleChange}
                    required
                />
            </div>
            <div className="myproducts-button-container">
                <button id = "myproducts-new-custom-button" className="custom-button" type="submit">Create Product</button>
            </div>
        </form>
    </div>
  )
}

export default MyProductsNew