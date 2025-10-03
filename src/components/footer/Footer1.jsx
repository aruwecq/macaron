// import React from "react";
// import "./footer.scss";
// import { SlSocialVkontakte } from "react-icons/sl";
// import { FaInstagram } from "react-icons/fa";
// import { FaTelegram } from "react-icons/fa";
// import { FaWhatsapp } from "react-icons/fa6";
// import { CiGlobe } from "react-icons/ci";
// import { Link } from "react-router-dom";
// import { useTranslation} from 'react-i18next';

// function Footer1() { 
//    const {t, i18n}= useTranslation()

//  function change(e){
//     let lng = e.target.value;
//     i18n.changeLanguage(lng)
//   } 

//   return (
//     <div>
//       <footer className="footer">
//         <div className="footer-all">
//           <div className="footer-img">
//             <div className="footer-item">
//               <img src="/footer1.svg" alt="ручная работа" />
//               <p>Готовим вручную и с любовью</p>
//             </div>
//             <div className="footer-item">
//               <img src="/footer2.svg" alt="доставка" />
//               <p>Доставим в день заказа</p>
//             </div>
//             <div className="footer-item">
//               <img src="/footer3.svg" alt="ингредиенты" />
//               <p>100% миндальная мука и натуральные ингредиенты</p>
//             </div>
//           </div>

//           <div className="footer-sslk">
//             <h2>Информация</h2>
//             <ul>
//               <li>
//                 <Link to="/about">О компании</Link>
//               </li>
//               <li>
//                 <Link to="/guarantee">Гарантии вкуса и свежести</Link>
//               </li>
//               <li>
//                 <Link to="/delivery">Доставка и оплата</Link>
//               </li>
//               <li>
//                 <Link to="/contacts">Контакты</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-sslk1">
//             <h2>Каталог</h2>
//             <ul>
//               <li>
//                 <Link to="condition">Каталог десертов</Link>
//               </li>
//               <li>
//                 <Link to="/reviews">Готовые наборы</Link>
//               </li>
//               <li>
//                 <Link to="/set">Собрать свой набор</Link>
//               </li>
//               <li>
//                 <Link to="/design">Собрать свой дизайн</Link>
//               </li>
//             </ul>

//             <div className="footer-lang" onChange={change}>
//               <CiGlobe />
//               <ul>
//                 <li>
//                   <a href="#">Каз</a>
//                 </li>
//                 <li>
//                   <a href="#">Рус</a>
//                 </li>
//                 <li>
//                   <a href="#">Eng</a>
//                 </li>
//               </ul>
//             </div>
//           </div>

//           <div className="footer-sslk2">
//             <h2>Для бизнеса</h2>
//             <ul>
//               <li>
//                 <Link to="">Корпоративные подарки</Link>
//               </li>
//               <li>
//                 <Link to="/">Для юридических лиц</Link>
//               </li>
//               <li>
//                 <Link to="/">Оптовикам</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="footer-sslk3">
//             <a href="https://web.whatsapp.com/">+996 557 071 920 </a> <br />{" "}
//             <br />
//             <span>с 9:00 до 21:00</span>
//             <div className="footer-icons">
//               <a href="https://vk.com" target="_blank" rel="noreferrer">
//                 <SlSocialVkontakte />
//               </a>
//               <a
//                 href="https://instagram.com/_aruwecq_"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaInstagram />
//               </a>
//               <a href="https://t.me/" target="_blank" rel="noreferrer">
//                 <FaTelegram />
//               </a>
//               <a
//                 href="https://wa.me/557071920"
//                 target="_blank"
//                 rel="noreferrer"
//               >
//                 <FaWhatsapp />
//               </a>
//             </div>
//           </div>
//         </div>

//       </footer>
//     </div>
//   );
// }

// export default Footer1;
import React from "react";
import "./footer.scss";
import { SlSocialVkontakte } from "react-icons/sl";
import { FaInstagram } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa6";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';

function Footer1() { 
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <footer className="footer">
      <div className="footer-all">
        <div className="footer-img">
          <div className="footer-item">
            <img src="/footer1.svg" alt="ручная работа" />
            <p>{t('handmade')}</p>
          </div>
          <div className="footer-item">
            <img src="/footer2.svg" alt="доставка" />
            <p>{t('delivery')}</p>
          </div>
          <div className="footer-item">
            <img src="/footer3.svg" alt="ингредиенты" />
            <p>{t('ingredients')}</p>
          </div>
        </div>

        <div className="footer-sslk">
          <h2>{t('information')}</h2>
          <ul>
            <li><Link to="/about">{t('about')}</Link></li>
            <li><Link to="/guarantee">{t('guarantee')}</Link></li>
            <li><Link to="/delivery">{t('delivery_payment')}</Link></li>
            <li><Link to="/contacts">{t('contacts')}</Link></li>
          </ul>
        </div>

        <div className="footer-sslk1">
          <h2>{t('catalog')}</h2>
          <ul>
            <li><Link to="/condition">{t('desserts_catalog')}</Link></li>
            <li><Link to="/reviews">{t('ready_sets')}</Link></li>
            <li><Link to="/set">{t('build_set')}</Link></li>
            <li><Link to="/design">{t('design_set')}</Link></li>
          </ul>

          <div className="footer-lang">
            <CiGlobe />
            <ul>
              <li><button onClick={() => changeLanguage('kg')}>Каз</button></li>
              <li><button onClick={() => changeLanguage('ru')}>Рус</button></li>
              <li><button onClick={() => changeLanguage('en')}>Eng</button></li>
            </ul>
          </div>
        </div>

        <div className="footer-sslk2">
          <h2>{t('for_business')}</h2>
          <ul>
            <li><Link to="/corporate">{t('corporate_gifts')}</Link></li>
            <li><Link to="/legal">{t('legal_entities')}</Link></li>
            <li><Link to="/wholesale">{t('wholesale')}</Link></li>
          </ul>
        </div>

        <div className="footer-sslk3">
          <a href="https://web.whatsapp.com/">+996 557 071 920</a>
          <br /><br />
          <span>{t('working_hours')}</span>
          <div className="footer-icons">
            <a href="https://vk.com" target="_blank" rel="noreferrer"><SlSocialVkontakte /></a>
            <a href="https://instagram.com/_aruwecq_" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://t.me/" target="_blank" rel="noreferrer"><FaTelegram /></a>
            <a href="https://wa.me/557071920" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
