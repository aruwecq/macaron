import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { AiOutlineShoppingCart } from "react-icons/ai";
import home from '../../assets/images/home.svg'
import "./Header.scss";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header-landing">
      <div className="utility">
        <div className="row">
          <div className="utility-left">
            <Link to="/freshness">Гарантия свежести</Link>
            <Link to="/delivery">Доставка и оплата</Link>
            <Link to="/wholesale">Оптовые поставки</Link>
            <Link to="/contacts">Контакты</Link>
            <Link to="/city" className="city">
              Санкт-Петербург <IoLocationOutline className="icon" />
            </Link>
            <div className="phone">
              <IoIosPhonePortrait /> 8 812 309-82-88
            </div>
            <div className="icons">
              <Link className="icon-btn" to="/cart">
                <AiOutlineShoppingCart />
                <span className="qty">в корзине (4 товара)</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="main-nav">
        <div className="row">
          <nav className={`menu-left ${menuOpen ? "open" : ""}`}>
            <Link className="menu-link" to="/sales">
              Сладкие дни <span className="badge">%</span>
            </Link>

            <select className="menu-select">
              <option value="">Подарочные наборы</option>
              <option value="/gifts/birthday">Для дня рождения</option>
              <option value="/gifts/party">На вечеринку</option>
              <option value="/gifts/love">Для любимых</option>
              <option value="/gifts/other">Прочее</option>
            </select>

            <Link className="menu-link" to="/constructor">Собрать набор</Link>
          </nav>

          <Link className="logo" to="/dds">
            {/* <div className="logo-mark">macaron<br />shop</div> */}
            <img className="logo-mark" src={home} alt="" />
          </Link>

          <nav className={`menu-right ${menuOpen ? "open" : ""}`}>
            <Link className="menu-link" to="/design">Создать дизайн</Link>

            <select className="menu-select1">
              <option value="">Компаниям</option>
              <option value="/companies/b2b">B2B</option>
              <option value="/companies/events">Мероприятия</option>
              <option value="/companies/gifts">Корпоративные подарки</option>
            </select>

            <select className="menu-select1">
              <option value="">Весь каталог</option>
              <option value="/catalog/macarons">Макаруны</option>
              <option value="/catalog/sets">Наборы</option>
              <option value="/catalog/other">Прочее</option>
            </select>
          </nav>
        </div>
      </div>
    </header>
  );
}

export default Header;
