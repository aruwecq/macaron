import React, { useEffect } from 'react'
import './cont.scss'
import { Link } from 'react-router-dom'
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"

import i1 from '../../assets/images/i1.svg'
import i2 from '../../assets/images/i2.svg'
import i3 from '../../assets/images/i3.svg'
import i4 from '../../assets/images/i4.svg'
import i5 from '../../assets/images/i5.svg'
import i6 from '../../assets/images/i6.svg'
import sale1 from '../../assets/images/sale-l.svg'

function Cont() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 800, once: true })
  }, [])

  return (
    <div className='list'>
      <div className='banner-cont'>
        <Link to="/holydays" className='cont1' data-aos="fade-up" data-aos-delay="100">
          <img src={i1} alt="" />
          <h1>{t("cont.ready.title")} ➡</h1>
          <span>{t("cont.ready.text")}</span>
        </Link>

        <Link to="/set" className='cont2' data-aos="fade-up" data-aos-delay="200">
          <img src={i2} alt="" />
          <h1>{t("cont.custom.title")} ➡</h1>
          <span>{t("cont.custom.text")}</span>
        </Link>

        <Link to="/design" className='cont3' data-aos="fade-up" data-aos-delay="300">
          <img src={i3} alt="" />
          <h1>{t("cont.design.title")} ➡</h1>
          <span>{t("cont.design.text")}</span>
        </Link>

        <Link to="/gift" className='cont4' data-aos="fade-up" data-aos-delay="400">
          <img src={i4} alt="" />
          <h1>{t("cont.wedding.title")} ➡</h1>
          <span>{t("cont.wedding.text")}</span>
        </Link>

        <Link to="/corporate" className='cont5' data-aos="fade-up" data-aos-delay="500">
          <img src={i5} alt="" />
          <h1>{t("cont.corporate.title")} ➡</h1>
          <span>{t("cont.corporate.text")}</span>
        </Link>

        <Link to="wholesale" className='cont6' data-aos="fade-up" data-aos-delay="600">
          <img src={i6} alt="" />
          <h1>{t("cont.wholesale.title")} ➡</h1>
          <span>{t("cont.wholesale.text")}</span>
        </Link>
      </div>

      <div className='sale-section'>
        <h1 className='sale-title'>{t("cont.sales.title")}</h1>
        <div className='sale-list'>
          <Link to="/delivery" className="sale-product" data-aos="fade-up" data-aos-delay="100">
            <div className="sale-new blue"><p>{t("cont.sales.delivery.badge")}</p></div>
            <img src={sale1} alt="Скидка 1" />
            <div className='sale-text blue'> 
              <span>{t("cont.sales.delivery.text")}</span>
            </div>
          </Link>

          <Link to="/new-choco" className="sale-product" data-aos="fade-up" data-aos-delay="200">
            <div className="sale-new pink"><p>{t("cont.sales.choco.badge")}</p></div>
            <img src="../public/svg/sale2.svg" alt="Скидка 2" />
            <div className='sale-text pink'>
              <span>{t("cont.sales.choco.text")}</span>
            </div>
          </Link>

          <Link to="/new-candy" className="sale-product" data-aos="fade-up" data-aos-delay="300">
            <div className="sale-new pink"><p>{t("cont.sales.candy.badge")}</p></div>
            <img src="../public/svg/sale3.svg" alt="Скидка 3" />
            <div className='sale-text pink'>
              <span>{t("cont.sales.candy.text")}</span>
            </div>
          </Link>

          <Link to="/caramel" className="sale-product" data-aos="fade-up" data-aos-delay="400">
            <div className="sale-new pink"><p>{t("cont.sales.caramel.badge")}</p></div>
            <img src="../public/svg/sale4.svg" alt="Скидка 4" />
            <div className='sale-text pink'>
              <span>{t("cont.sales.caramel.text")}</span>
            </div>
          </Link>
        </div>
      </div>
    </div> 
  )
}

export default Cont
