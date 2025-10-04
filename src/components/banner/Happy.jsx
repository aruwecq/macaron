import React, { useEffect } from 'react'
import './happy.scss'
import cape from '../../assets/images/cape.svg'
import hp0 from '../../assets/images/hp0.svg'
import hp2 from '../../assets/images/hp2.svg'
import hp3 from '../../assets/images/hp3.svg'
import hp4 from '../../assets/images/hp4.svg'
import hp5 from '../../assets/images/hp5.svg'
import hp6 from '../../assets/images/hp6.svg'
import { Link } from 'react-router-dom'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { useTranslation } from 'react-i18next'

function Happy() {
  const { t } = useTranslation()

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out' })
  }, [])

  return (
    <div className="happy">
      <div className="happy-link">
        <h1>{t("happy.title")}</h1>
        <div className="images">
          <div className="holiday-line"></div>

          <Link to="/happyBirthday" className="holiday-block" data-aos="fade-up" data-aos-delay="100">
            <div className="holiday-with-cape">
              <img src={hp0} alt="holiday 0" className="holiday-base" />
              <img src={cape} alt="cape" className="holiday-cape" />
            </div>
            <p className="holiday-text">
              <span>{t("happy.birthday.date")}</span><br />
              {t("happy.birthday.text")}
            </p>
          </Link>

          <div className="holiday-block" data-aos="fade-up" data-aos-delay="200">
            <img src={hp2} alt="holiday 2" className="holiday-item" />
            <p className="holiday-text">
              <span>{t("happy.new_year.date")}</span><br />
              {t("happy.new_year.text")}
            </p>
          </div>

          <div className="holiday-block" data-aos="fade-up" data-aos-delay="300">
            <img src={hp3} alt="holiday 3" className="holiday-item" />
            <p className="holiday-text">
              <span>{t("happy.valentine.date")}</span><br />
              {t("happy.valentine.text")}
            </p>
          </div>

          <div className="holiday-block" data-aos="fade-up" data-aos-delay="400">
            <img src={hp4} alt="holiday 4" className="holiday-item" />
            <p className="holiday-text">
              <span>{t("happy.defender.date")}</span><br />
              {t("happy.defender.text")}
            </p>
          </div>

          <div className="holiday-block" data-aos="fade-up" data-aos-delay="500">
            <img src={hp5} alt="holiday 5" className="holiday-item" />
            <p className="holiday-text">
              <span>{t("happy.women.date")}</span><br />
              {t("happy.women.text")}
            </p>
          </div>

          <div className="holiday-block" data-aos="fade-up" data-aos-delay="600">
            <img src={hp6} alt="holiday 6" className="holiday-item" />
            <p className="holiday-text">
              <span>{t("happy.victory.date")}</span><br />
              {t("happy.victory.text")}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Happy
