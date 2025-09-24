// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { IoIosPhonePortrait } from "react-icons/io";
// import { IoLocationOutline } from "react-icons/io5";
// import { LiaShoppingBagSolid } from "react-icons/lia";
// import home from '../../assets/images/home.svg'
// import { FiUser } from "react-icons/fi";
// import "./Header.scss";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <header className="header-landing">
//       <div className="utility">
//         <div className="row">
//           <div className="utility-left">
//             <Link to="/freshness">Гарантия свежести</Link>
//             <Link to="/delivery">Доставка и оплата</Link>
//             <Link to="/wholesale">Оптовые поставки</Link>
//             <Link to="/contacts">Контакты</Link>
//             <Link to="/city" className="city">
//               Бишкек <IoLocationOutline className="icon" />
//             </Link>
//             <div className="phone">
//               <IoIosPhonePortrait /> <p>557 07 19 20</p>
//             </div>
//             <div className="icons">
//               <Link className="icon-btn" to="/cart">
//                <LiaShoppingBagSolid />
//               </Link> 
//               <Link to="/user" className="icon-btn">  
//               <FiUser />
//               </Link>
//               <button>🌝</button>   
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="main-nav">
//         <div className="row">
//           <nav className={`menu-left ${menuOpen ? "open" : ""}`}>
//             <Link className="menu-link" to="/discount">
//               Сладкие дни <span className="badge">%</span>
//             </Link>

//             <select className="menu-select">
//               <option value="">Подарочные наборы</option>
//               <option value="/gifts/birthday">Для дня рождения</option>
//               <option value="/gifts/party">На вечеринку</option>
//               <option value="/gifts/love">Для любимых</option>
//               <option value="/gifts/other">Прочее</option>
//             </select>

//             <Link className="menu-link" to="/set">Собрать набор</Link>
//           </nav>

//           <Link className="logo" to="/">
//             {/* <div className="logo-mark">macaron<br />shop</div> */}
//             <img className="logo-mark" src={home} alt="" />
//           </Link>

//           <nav className={`menu-right ${menuOpen ? "open" : ""}`}>
//             <Link className="menu-link" to="/design">Создать дизайн</Link>

//             <select className="menu-select1">
//               <option value="">Компаниям</option>
//               <option value="/companies/b2b">B2B</option>
//               <option value="/companies/events">Мероприятия</option>
//               <option value="/companies/gifts">Корпоративные подарки</option>
//             </select>

//             <select className="menu-select1">
//               <option value="">Весь каталог</option>
//               <option value="/catalog/macarons">Макаруны</option>
//               <option value="/catalog/sets">Наборы</option>
//               <option value="/catalog/other">Прочее</option>
//             </select>
//           </nav>
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Header;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosPhonePortrait } from "react-icons/io";
import { IoLocationOutline } from "react-icons/io5";
import { LiaShoppingBagSolid } from "react-icons/lia";
import home from '../../assets/images/home.svg'
import { FiUser } from "react-icons/fi";
import "./Header.scss";
import { useNavigate } from "react-router-dom";
function Header() {
   const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const value = e.target.value;
    if (value) {
      navigate(value);
    }
  };


  return (
    <>
      <header className={`header-landing ${darkMode ? "dark" : ""}`}>
        <div className="utility">
          <div className="row">
            <div className="utility-left">
              <Link to="/freshness">Гарантия свежести</Link>
              <Link to="/delivery">Доставка и оплата</Link>
              <Link to="/wholesale">Оптовые поставки</Link>
              <Link to="/contacts">Контакты</Link>
              <Link to="/city" className="city">
                Бишкек <IoLocationOutline className="icon" />
              </Link>
              <div className="phone">
                <IoIosPhonePortrait /> <p>557 07 19 20</p>
              </div>
              <div className="icons">
                <Link className="icon-btn" to="/cart">
                  <LiaShoppingBagSolid />
                </Link> 
                <Link to="/signup" className="icon-btn">  
                  <FiUser />
                </Link>
                <button onClick={() => setDarkMode(!darkMode)}>🌝</button>   
              </div>
            </div>
          </div>
        </div>
        <div className="main-nav">
          <div className="row">
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
        <option value="/gifts/party">Свадебные предложения</option>
        <option value="/gifts/love">Кенди-бары</option>
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

      {/* overlay */}
      {darkMode && <div className="dark-overlay" onClick={() => setDarkMode(false)}></div>}
    </>
  );
}

export default Header;
