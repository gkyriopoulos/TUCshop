import React from 'react'
import logo from '../Assets/logo125_cropped.png'
import {useCart} from './CartContext'
import './Styles/NavBar.css'
import {handleLogout} from './AuthHelper'

const NavBarCustomer = () => {
  const {getTotalProductCount} = useCart();
  return (
    <div className='navbar'>
      <div className="navbar-list-container">
        <ul>
          <li><a href="/products">Products</a></li>
          <li><a href="/cart">Cart({getTotalProductCount()})</a></li>
          <li><img src={logo} alt = "" className='logo'></img></li>
          <li><a href="/orders">Orders</a></li>
        </ul>

        <div className='username-logout-container'>
          <div className="navbar-username">{localStorage.getItem("username")}</div>
          <button className='navbar-logout' onClick = {() => handleLogout()}> Logout</button>
        </div> 
      </div>
    </div>
  )
}

export default NavBarCustomer