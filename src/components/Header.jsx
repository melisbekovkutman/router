import React from 'react'
import { NavLink } from 'react-router-dom'
import Image from '../img/image 4.png'
import Basket from '../img/basket.png'
import Heart from '../img/heart.png'
import Login from '../img/login.png'

const Header = () => {
  return (
    <div className='header'>
           <div>
      <img src={Image} alt="" />
        <p>REACT SNEAKERS</p>
        <span>Магазин лучших кроссовок</span>
      </div>
      <div className='logo'>
      <img src={Basket} alt="" />
      <NavLink to='/basket'>1205 руб.</NavLink>
      <img src={Heart} alt="" />
      <img src={Login} alt="" />
      </div>
    </div>
  )
}

export default Header