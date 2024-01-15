import React from 'react'
import logo from '../Assets/logo125_cropped.png'
import {handleLogout} from './AuthHelper'
import './Styles/NavBar.css'

const NavBarSeller = () => {
  return (
    <div className='navbar'>
      <div className="navbar-list-container">
        <ul>
          <li style={{ marginLeft: '23rem' }}><a href="/myproducts">My Products</a></li>
          <li><img src={logo} alt="" className='logo'></img></li>
        </ul>

        <div className='username-logout-container'>
          <div className="navbar-username-seller">{localStorage.getItem("username")}</div>
          <button className='navbar-logout' onClick={() => handleLogout()}> Logout</button>
        </div>
      </div>
    </div>
  )
}

export default NavBarSeller