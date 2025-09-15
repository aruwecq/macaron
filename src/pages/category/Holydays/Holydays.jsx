import React from 'react'
import './Holyday.scss'
import { Link } from 'react-router-dom'

function Holydays() {
  return (
    <div className="holydays">
      <div className='link'>
         <Link to="/">Главная страница</Link> »
      <Link to="/njm">Каталог десертов</Link> »
      <p>Готовые наборы</p>
      </div> 
  <div className="breadcrumbs">
    <img
      src="https://macaronshop.ru/wp-content/uploads/2025/02/set_left21.png"
      alt="left"
      className="breadcrumbs__img-left"
    />
    <div className="breadcrumbs__content">
      <h1>Подарочные наборы</h1>
      <p>Для сладких моментов вашей жизни</p>
    </div>

    <img
      src="https://macaronshop.ru/wp-content/uploads/2025/02/set_right_v.png"
      alt="right"
      className="breadcrumbs__img-right"
    />
  </div>



      <div className="holidays-grid">
        <Link to="/holiday/birthday" className="holiday-card birthday aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2024/09/setcard.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">День рождения</h3>
        </Link>
        <Link to="/holiday/sept1" className="holiday-card sept1 aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2021/06/podarki-na-1-sentyabrya-10.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">1 сентября</h3>
        </Link>

        <Link to="/holiday/med" className="holiday-card med aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2025/04/den-medika.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">Медицинским работникам</h3>
        </Link>
        <Link to="/holiday/candy" className="holiday-card candy">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2024/09/setcard_4.png)" }} />
          <div className="holiday-card__overlay candy-bar" />
          <h3 className="holiday-card__title">Кенди-бары</h3>
        </Link>

        <Link to="/holiday/boss" className="holiday-card boss aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2025/02/ruk.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">Подарки руководителю</h3>
        </Link>

        <Link to="/holiday/teachers" className="holiday-card teachers aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2025/04/uchitel.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">Учителям</h3>
        </Link>

        <Link to="/holiday/colleagues" className="holiday-card colleagues aaa">
          <div className="holiday-card__bg" style={{ backgroundImage: "url(https://macaronshop.ru/wp-content/uploads/2025/04/kolle.png)" }} />
          <div className="holiday-card__overlay" />
          <h3 className="holiday-card__title">Подарки коллегам</h3>
        </Link>
      </div>  
    </div>
  )
}

export default Holydays