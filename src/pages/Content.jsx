import React from 'react'

import Frog from '../img/Group 112.png'
import Kross1 from '../img/Kross1.svg'
import Kross2 from '../img/kross2.png'
import Kross3 from '../img/kross3.png'
import Kross4 from '../img/kross4.png'
import Next from '../img/Group 114.png'

const Content = () => {
  return (
    <div className='content'>
        <div>
        <hr />
        <img src={Frog} alt="" />
        ?
        <button>Купить</button>
        </div>
        <div className='kross'>
            <h1>
            Все кроссовки
            </h1>  
            <input type="text"placeholder='Поиск...' />
        </div>
        <div className='nike'>
            <div className='kross1'>
            <img src={Kross1} alt="Kross1" />
            </div>
            <img src={Kross2} alt="" />
            <img src={Kross3} alt="" />
            <img src={Kross4} alt="" />
        </div>
      
    </div>
  )
}

export default Content