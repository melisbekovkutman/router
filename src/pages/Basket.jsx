import React from 'react'
import Smail from '../img/pngegg.png';
import { NavLink } from 'react-router-dom'

const notfound = () => {
  return (
    <div className='error'>
              <div className='header'>
    </div>
      <div className='list'>
        <img src={Smail} alt="" />
        <b>У вас нет заказов</b>
        <p>Вы нищеброд? <br />
        Оформите хотя бы один заказ</p>
        <button> <NavLink to='/content'>Вернуться назад</NavLink></button>
      </div>
    </div>
  )
}

export default notfound