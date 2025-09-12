import React from 'react'
import './Banner.scss'
import img from '../../assets/images/img.png'
import f1 from '../../assets/images/f1.svg'
import f2 from '../../assets/images/f2.svg'
import f3 from '../../assets/images/f3.svg'
import f5 from '../../assets/images/f5.svg'

function Banner() {
  return (
    <div className='banner'>
      <div className="images">
        <img className="f1" src={f1} alt="macaron" />
        <img className="f2" src={f2} alt="macaron" />
        <img className="f3" src={f3} alt="macaron" />      
        <img className="img" src={img} alt="heart-macarons" />
        <img className="f4" src={f3} alt="macaron" />
        <img className="f5" src={f5} alt="macaron" />
      </div>

      <div className="text">
        <div className='h2'>MACARONSHOP <h6>— since 2025</h6></div>
        <h1>Настоящая любовь</h1>
        <p>
          Пирожные макарон и другие десерты<br />
          из натуральных ингредиентов, приготовленные с любовью
        </p>    
      </div>
    </div>
  )
}

export default Banner
