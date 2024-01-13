import React from 'react'
import { useState, useEffect } from 'react';
import { getUserOrders } from '../Util/OrderHelper';
import './Styles/Orders.css'

const Orders = () => {

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getUserOrders(localStorage.getItem("username")).then(data => {
      setOrders(data || []);
    });
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending':
        return 'orange';
      case 'Success':
        return 'green';
      case 'Reject':
        return 'red';
      default:
        return 'black'; // Default color if status is not recognized
    }
  };

  return (
    <div className='container-main'>
    <div className='myproducts-container-main'>
      {orders.map( (order) => (
        <div className="cart-main-info" key={order._id} style={{ height: `${order.products.length * 30}px`, minHeight: `60px` }}>
          <div className="cart-prod">
            <div className="cart-prod-title">Order: {order._id}
                {console.log(order)}
                {order.products.map((product) => (
                    <li className="orders-prod-title" key={product._id}>
                      {product.title} ({product.amount})
                    </li>
                  ))}
            </div>
          </div>
          <div className="orders-price-container">
            <div className="cart-price">{(order.total_price).toFixed(2)}€</div>
          </div>
          <div className="orders-status">
          <span
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: getStatusColor(order.status),
                  display: 'inline-block',
                  marginRight: '5px',
                }}
              ></span>
              {order.status}
            </div>
        </div>
      ))
      }
    </div>
  </div>
  )
}

export default Orders