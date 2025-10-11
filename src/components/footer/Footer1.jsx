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
    localStorage.setItem("lng", lng);
  };

  return (
    <footer className="footer">
      <div className="footer1">
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
                <li><button onClick={() => changeLanguage('kg')}>Кыр</button></li>
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
      </div>
    </footer>
  );
}

export default Footer1;
