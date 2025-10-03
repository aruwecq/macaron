import React, { useState } from "react";
import { IoClose } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
// import { useCart } from "../cart/CartContext"; // твой контекст корзины
// import home from "../../assets/images/home.svg";
import "./BurgerMenuOverlay.scss";
import { RxHamburgerMenu } from "react-icons/rx";
import { useCart } from "../../cart/CartContext";
import logo from "../../../assets/images/svg.svg"

function BurgerMenuOverlay({ menuOpen, setMenuOpen, toogleTheme }) {
  const location = useLocation();
  const { totalCount } = useCart();
  const [openSection, setOpenSection] = useState(null);
  const [theme, setTheme] = useState("light"); // светлая по умолчанию

  const user = JSON.parse(localStorage.getItem("user")) || {};

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  const handleThemeToggle = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    toogleTheme(newTheme); // если у тебя есть глобальный переключатель темы
  };

  const isCartPage = location.pathname === "/cart";

  return (
    <>
      <header className="burger-header">
        <button
          className="mobile-menu-btn"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <RxHamburgerMenu size={24} />
        </button>
        <div className="svg">
          <img src={logo}  alt="" />
        </div>
        <Link
          className={`icon-btn ${
            totalCount > 0 || isCartPage ? "has-items" : ""
          }`}
          to="/cart"
        >
          <LiaShoppingBagSolid className="icoon" />
          {totalCount > 0 && <span className="qtyy">{totalCount}</span>}
        </Link>
      </header>
      <div
        className="burger-overlay"
        style={{ display: menuOpen ? "flex" : "none" }}
      >
        {/* 🔹 Верхняя часть меню (header внутри бургера) */}
        <div className="burger-top">
          <div className="burger-icons">
            <button className="close-bttn" onClick={() => setMenuOpen(false)}>
              <IoClose size={28} />
            </button>
            {user.role === "client" ? (
              <div></div>
            ) : (
              <Link
                to="/log-in"
                className="icon-btn"
                onClick={() => setMenuOpen(false)}
              >
                <FiUser size={22} color="#d14" />
              </Link>
            )}
            <button onClick={handleThemeToggle} className="theme-toggle-btn">
              {theme === "light" ? "🌞" : "🌜"}
            </button>
          </div>
        </div>

        {/* 🔹 Основная навигация */}
        <nav className="burger-nav">
          <Link
            to="/city"
            onClick={() => setMenuOpen(false)}
            className="menu-item"
          >
            📍 Санкт-Петербург
          </Link>
          <hr />

          <Link
            to="/discount"
            onClick={() => setMenuOpen(false)}
            className="menu-item"
          >
            СЛАДКИЕ ДНИ <span className="badge">%</span>
          </Link>
          <hr />
          <div className="menu-item" onClick={() => toggleSection("gifts")}>
            ПОДАРОЧНЫЕ НАБОРЫ <span>{openSection === "gifts" ? "▲" : "▼"}</span>
          </div>
          {openSection === "gifts" && (
            <div className="submenu">
              <Link to="/holydays" onClick={() => setMenuOpen(false)}>
                Все наборы
              </Link>
              <Link to="/september1" onClick={() => setMenuOpen(false)}>
                1 сентября
              </Link>
              <Link to="/happyBirthday" onClick={() => setMenuOpen(false)}>
                День рождения
              </Link>
              <Link to="/classicMacarons" onClick={() => setMenuOpen(false)}>
                Макаронс классические
              </Link>
              <Link to="/gift" onClick={() => setMenuOpen(false)}>
                Свадебные предложения
              </Link>
              <Link to="/gifts/love" onClick={() => setMenuOpen(false)}>
                Кенди-бары
              </Link>
              <Link to="/gifts/other" onClick={() => setMenuOpen(false)}>
                Корпоративные подарки
              </Link>
            </div>
          )}
          <hr />

          <Link
            to="/set"
            onClick={() => setMenuOpen(false)}
            className="menu-item"
          >
            СОБРАТЬ НАБОР
          </Link>
          <hr />

          <Link
            to="/design"
            onClick={() => setMenuOpen(false)}
            className="menu-item"
          >
            СОЗДАТЬ ДИЗАЙН
          </Link>
          <hr />

          {/* КОМПАНИЯМ */}
          <div className="menu-item" onClick={() => toggleSection("companies")}>
            КОМПАНИЯМ <span>{openSection === "companies" ? "▲" : "▼"}</span>
          </div>
          {openSection === "companies" && (
            <div className="submenu">
              <Link to="/companies/gifts" onClick={() => setMenuOpen(false)}>
                Корпоративные подарки
              </Link>
              <Link to="/companies/eclairs" onClick={() => setMenuOpen(false)}>
                Эклеры оптом
              </Link>
            </div>
          )}
          <hr />

          {/* ВЕСЬ КАТАЛОГ */}
          <div className="menu-item" onClick={() => toggleSection("catalog")}>
            ВЕСЬ КАТАЛОГ <span>{openSection === "catalog" ? "▲" : "▼"}</span>
          </div>
          {openSection === "catalog" && (
            <div className="submenu">
              <Link to="/catalog/macarons" onClick={() => setMenuOpen(false)}>
                Макаронс
              </Link>
              <Link to="/catalog/sets" onClick={() => setMenuOpen(false)}>
                Эклеры
              </Link>
              <Link to="/catalog/other" onClick={() => setMenuOpen(false)}>
                Вафельные трубочки
              </Link>
              <Link to="/catalog/other" onClick={() => setMenuOpen(false)}>
                Кейк попсы
              </Link>
              <Link to="/catalog/other" onClick={() => setMenuOpen(false)}>
                Десерт картошка
              </Link>
            </div>
          )}
        </nav>
      </div>
    </>
  );
}

export default BurgerMenuOverlay;
