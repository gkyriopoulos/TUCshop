import React, { createContext, useContext, useState } from 'react';
import { useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {

    /*Load cart on render. */
    const [cart, setCart] = useState(() => {
        const storedCart = sessionStorage.getItem('cart');
        return storedCart ? JSON.parse(storedCart) : [];
      });
    
    /*Save cart after it's changed */
    useEffect(() => {
        sessionStorage.setItem('cart', JSON.stringify(cart));
    }, [cart]);

    /*Get a product via id. */
    const getProduct = (id) => {
      const existingProduct = cart.find((cartProduct) => cartProduct.id === id);
      return existingProduct
    };

    /*Get total product count inside the cart. */
    const getTotalProductCount = () => {
      return cart.reduce((total, product) => total + product.quantity, 0);
    };
    
    /*Get total products cost inside the cart. */
    const getTotalProductCost = () => {
      return cart.reduce((total, product) => total + (product.price * product.quantity), 0);
    };

    /*Completelly removes a product from the cart. */
    const handleRemoveProduct = (product) => {
      setCart(cart.filter((cartProduct) => cartProduct.id !== product.id));
    };

    /*Add the product to the cart, if it's already there increase quantity by 1 */
    const handleAddToCart = (product) => {
      const existingProduct = getProduct(product.id);
      if(existingProduct){
        setCart(
            cart.map((cartProduct) =>
            cartProduct.id === existingProduct.id 
            ? { ...existingProduct, quantity: existingProduct.quantity + 1 } : cartProduct));
      }else{
        setCart([...cart, {...product, quantity: 1}])
      }
    };
    
    /*Remove product from the cart, if there's no left remove it from the cart as well */
    const handleRemoveFromCart = (product) => {
      const existingProduct = getProduct(product.id);
      if(existingProduct.quantity === 1){
        setCart(cart.filter((cartProduct) => cartProduct.id !== product.id));
      }else{
        setCart(
          cart.map((cartProduct) =>
          cartProduct.id === existingProduct.id 
          ? { ...existingProduct, quantity: existingProduct.quantity - 1 } : cartProduct));
      }
    };

    const emptyCart = () => {
      setCart([]);
    }

    /*Get the order in the format the backend expects it. */
    const getOrder = () => {
      if (getTotalProductCount() !== 0){
        const orderProducts = cart.map((product) => ({
          id: product.id,
          title: product.title,
          amount: product.quantity,
        }));
  
        const newOrder = {
          "products" : orderProducts,
          "total_price" : getTotalProductCost(),
          "customer_username" : localStorage.getItem('username'),
        };
        return newOrder
      }
      return null;
    }

    return (
      <CartContext.Provider value={{ cart, handleRemoveProduct, handleAddToCart, handleRemoveFromCart, getTotalProductCount, getTotalProductCost, getOrder, emptyCart}}>
      {children}
  </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
