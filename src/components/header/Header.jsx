import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import home from "../../assets/images/home.svg";
import { useCart } from "../cart/CartContext";
import "./Header.scss";
import BurgerMenu from "./ui/BurgerMenu";
import { useTranslation} from 'react-i18next';
function Header() {
  const { totalCount } = useCart(); // количество товаров в корзине
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const {t, i18n}= useTranslation()

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const isCartPage = location.pathname === "/cart";
  const user = JSON.parse(localStorage.getItem("user")) || {};

  return (
    <>
     <header className={`header-landing ${theme}`}>
   <div className="utility">
    <div className="row">
      <div className="utility-left">
        <Link to="/guarantee">Гарантия свежести</Link>
        <Link to="/delivery">Доставка и оплата</Link>
        <Link to="/otzyv">Отзывы</Link>
        <Link to="/wholesale">Оптовые поставки</Link>
        <Link to="/contacts">Контакты</Link>
        <Link to="/city" className="city">
          {/* Бишкек <IoLocationOutline className="icon" /> */}
        </Link>
        <div className="phone">
          <IoIosPhonePortrait /> <p>557 07 19 20</p>
        </div>
        <div className="icons">
          <Link
            className={`icon-btn ${totalCount > 0 || isCartPage ? "has-items" : ""}`}
            to="/cart"
          >
            <LiaShoppingBagSolid />
            {totalCount > 0 && <span className="qty">{totalCount}</span>}
          </Link>
          {user.role !== "client" && (
            <Link to="/log-in" className="icon-btn">
              <FiUser />
            </Link>
          )}
          <button onClick={toggleTheme} className="theme-toggle-btn">
            {theme === "light" ? "🌞" : "🌜"}
          </button>
        </div>
      </div>
    </div>
  </div>

  <div className={`main-nav ${menuOpen ? "open" : ""}`}>
    <div className="row">
      {/* Навигация слева */}
      <nav className={`menu-left ${menuOpen ? "open" : ""}`}>
        <Link className="menu-link" to="/discount">
          Сладкие дни <span className="badge">%</span>
        </Link>
        <select className="menu-select" onChange={handleChange} defaultValue="">
          <option value="">Подарочные наборы</option>
          <option value="/holydays">Все наборы</option>
          <option value="/september1">1 сентября</option>
          <option value="/happyBirthday">День рождения</option>
          <option value="/classicMacarons">Макаронс классические</option>
          <option value="/gift">Свадебные предложения</option>
          <option value="/gifts/other">Корпоративные подарки</option>
        </select>
        <Link className="menu-link" to="/set">Собрать набор</Link>
      </nav>

      <Link className="logo" to="/">
        <img className="logo-mark" src={home} alt="" />
      </Link>

      <nav className={`menu-right ${menuOpen ? "open" : ""}`}>
        <Link className="menu-link" to="/design">Создать дизайн</Link>
        <select className="menu-select1">
          <option value="">Компаниям</option>
          <option value="/companies/gifts">Корпоративные подарки</option>
          <option value="/companies/gifts">Эклеры Оптом</option>
        </select>
        <select className="menu-select1">
          <option value="">Весь каталог</option>
          <option value="/catalog/macarons">Макаронс</option>
          <option value="/catalog/sets">Эклеры</option>
          <option value="/catalog/other">Вафельные трубочки</option>
          <option value="/catalog/other">Кейк попсы</option>
          <option value="/catalog/other">Десерт картошка</option>
        </select>
      </nav>
    </div>
  </div>
</header>


      {darkMode && (
        <div className="dark-overlay" onClick={() => setDarkMode(false)}></div>
      )}
      <BurgerMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} toogleTheme={toggleTheme}/>
    </>
  );
}

export default Header;
