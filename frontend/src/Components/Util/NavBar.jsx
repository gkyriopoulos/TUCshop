import React from 'react'
import logo from '../Assets/logo125_cropped.png'
import search from '../Assets/search.png'
import {useCart} from './CartContext'
import './Styles/NavBar.css'


const NavBar = () => {
  const {getTotalProductCount} = useCart();
  return (
    <div className='navbar'>
      <div className='searchbar'>
        <input type="text" placeholder='Search' />
        <img src={search} alt="" className="" />
      </div>

      <ul>
        <li><a href="/products">Products</a></li>
        <li><a href="/cart">Cart({getTotalProductCount()})</a></li>
        <li><img src={logo} alt = "" className='logo'></img></li>
        <li><a href="/orders">Orders</a></li>
        <li><a href="/myproducts">My Products</a></li>
      </ul>
            

    </div>
  )
}

export default NavBar