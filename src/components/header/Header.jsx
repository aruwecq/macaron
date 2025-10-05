import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { LiaShoppingBagSolid } from "react-icons/lia";
import { FiUser } from "react-icons/fi";
import home from "../../assets/images/home.svg";
import { useCart } from "../cart/CartContext";
import "./Header.scss";
import BurgerMenu from "./ui/BurgerMenu";
import { useTranslation } from "react-i18next";

function Header() {
  const { totalCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("lng", lng);
  };

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
              <Link to="/guarantee">{t("header.guarantee")}</Link>
              <Link to="/delivery">{t("header.delivery_payment")}</Link>
              <Link to="/otzyv">{t("header.reviews")}</Link>
              <Link to="/wholesale">{t("header.wholesale")}</Link>
              <Link to="/contacts">{t("header.contacts")}</Link>

              <Link to="/city" className="city">
                {/* {t("city")} <IoLocationOutline className="icon" /> */}
              </Link>

              <div className="phone">
                <IoIosPhonePortrait /> <p>557 07 19 20</p>
              </div>

              <div className="icons">
                <Link
                  className={`icon-btn ${
                    totalCount > 0 || isCartPage ? "has-items" : ""
                  }`}
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
                {t("header.discount_days")} <span className="badge">%</span>
              </Link>

              <select
                className="menu-select"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="">{t("header.gift_sets")}</option>
                <option value="/holydays">{t("header.ready_sets")}</option>
                <option value="/september1">{t("header.september1")}</option>
                <option value="/happyBirthday">
                  {t("header.happy_birthday")}
                </option>
                <option value="/classicMacarons">
                  {t("header.classic_macarons")}
                </option>
                <option value="/gift">{t("header.wedding_offers")}</option>
                <option value="/gifts/other">
                  {t("header.corporate_gifts")}
                </option>
              </select>

              <Link className="menu-link" to="/set">
                {t("header.assemble_set")}
              </Link>
            </nav>

            <Link className="logo" to="/">
              <img className="logo-mark" src={home} alt="" />
            </Link>

            <nav className={`menu-right ${menuOpen ? "open" : ""}`}>
              <Link className="menu-link" to="/design">
                {t("header.design_set")}
              </Link>

              <select
                className="menu-select1"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="">{t("header.for_business")}</option>
                <option value="/corgifts">{t("header.corporate_gifts")}</option>
                <option value="/wholesale">
                  {t("header.eclairs_wholesale")}
                </option>
              </select>
              <select
                className="menu-select1"
                onChange={handleChange}
                defaultValue=""
              >
                <option value="">{t("header.whole_catalog")}</option>
                <option value="/catalog">{t("header.hcatalog")}</option>
                <option value="/macaron">{t("header.macaronss")}</option>
                <option value="/eclairs">{t("header.eclairs")}</option>
                <option value="/waffle">{t("header.waffle_rolls")}</option>
                <option value="/combo">{t("header.cake_pops")}</option>
                {/* <option value="/catalog/kartoshka">{t("header.potato_dessert")}</option> */}
              </select>
            </nav>
          </div>
        </div>
      </header>

      {darkMode && (
        <div className="dark-overlay" onClick={() => setDarkMode(false)}></div>
      )}
      <BurgerMenu
        menuOpen={menuOpen}
        setMenuOpen={setMenuOpen}
        toogleTheme={toggleTheme}
      />
    </>
  );
}

export default Header;
