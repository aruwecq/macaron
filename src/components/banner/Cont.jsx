import React, { useEffect } from 'react'
import './cont.scss'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"

// картинки
import i1 from '../../assets/images/i1.svg'
import i2 from '../../assets/images/i2.svg'
import i3 from '../../assets/images/i3.svg'
import i4 from '../../assets/images/i4.svg'
import i5 from '../../assets/images/i5.svg'
import i6 from '../../assets/images/i6.svg'
import sale1 from '../../assets/images/sale-l.svg'

function Cont() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className='list'>
      {/* Блок категорий */}
      <div className='banner-cont'>
        <Link 
          to="/holydays" 
          className='cont1'
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <img src={i1} alt="" />
          <h1>Готовые наборы ➡</h1>
          <span>Готовые наборы со скидкой. Вы можете подобрать набор на подходящий случай.</span>
        </Link>

        <Link 
          to="/set" 
          className='cont2'
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <img src={i2} alt="" />
          <h1>Собрать свой набор ➡</h1>
          <span>Выбрать количество макарун и выбрать вкусы.</span>
        </Link>

        <Link 
          to="/design" 
          className='cont3'
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <img src={i3} alt="" />
          <h1>Набор с индивидуальной печатью ➡</h1>
          <span>Собрать набор макарун с уникальным дизайном.</span>
        </Link>

        <Link 
          to="/gift" 
          className='cont4'
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <img src={i4} alt="" />
          <h1>Свадебные предложения ➡</h1>
          <span>Нежные пирожные макаронс с разными вкусами для украшения вашего торжества.</span>
        </Link>

        <Link 
          to="/corporate" 
          className='cont5'
          data-aos="fade-up"
          data-aos-delay="500"
        >
          <img src={i5} alt="" />
          <h1>Корпоративные подарки ➡</h1>
          <span>От 85 руб за шт. с уникальным дизайном. Приятный комплимент для коллег и партнеров.</span>
        </Link>

        <Link 
          to="wholesale" 
          className='cont6'
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <img src={i6} alt="" />
          <h1>Оптовые поставки ➡</h1>
          <span>Предложения для кафе, отелей и т.д. Сотрудничество и отзывы.</span>
        </Link>
      </div>

      {/* Блок акций */}
      <div className='sale-section'>
        <h1 className='sale-title'>Акции</h1>
        <div className='sale-list'>
          <Link 
            to="/delivery" 
            className="sale-product"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="sale-new blue"><p>Бесплатная доставка</p></div>
            <img src={sale1} alt="Скидка 1" />
            <div className='sale-text blue'> 
              <span>По СПб в районе КАД – от 3000сом По МСК – от 5000сом</span>
            </div>
          </Link>

          <Link 
            to="/new-choco" 
            className="sale-product"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="sale-new pink"><p>новинка</p></div>
            <img src="../public/svg/sale2.svg" alt="Скидка 2" />
            <div className='sale-text pink'>
              <span>Шоколадное пирожное картошка на основе бисквита!</span>
            </div>
          </Link>

          <Link 
            to="/new-candy" 
            className="sale-product"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="sale-new pink"><p>новинка</p></div>
            <img src="../public/svg/sale3.svg" alt="Скидка 3" />
            <div className='sale-text pink'>
              <span>Аппетитные конфеты на основе миндального печенья и крема</span>
            </div>
          </Link>

          <Link 
            to="/caramel" 
            className="sale-product"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <div className="sale-new pink"><p>АКЦИЯ</p></div>
            <img src="../public/svg/sale4.svg" alt="Скидка 4" />
            <div className='sale-text pink'>
              <span>Карамель на палочке из натуральных ингредиентов</span>
            </div>
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default Cont
