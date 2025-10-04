import React, { useEffect } from 'react'
import './Banner.scss'
import img from '../../assets/images/img.png'
import f1 from '../../assets/images/f1.svg'
import f2 from '../../assets/images/f2.svg'
import f3 from '../../assets/images/f3.svg'
import f5 from '../../assets/images/f5.svg'
import AOS from "aos"
import "aos/dist/aos.css"
import { useTranslation } from "react-i18next"

function Banner() {
  const { t } = useTranslation();

  useEffect(() => {
    AOS.init({ duration: 1200, once: true })
  }, [])

  return (
    <div className='banner'>
      <div className="banner-cont">
        <div className="images">
          <img className="f1" src={f1} alt="macaron" data-aos="fade-down" data-aos-delay="100" data-aos-duration="900" />
          <img className="f2" src={f2} alt="macaron" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" />
          <img className="f3" src={f3} alt="macaron" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" />
          <img className="img" src={img} alt="macaron" data-aos="zoom-in" data-aos-delay="400" data-aos-duration="1200" />
          <img className="f4" src={f3} alt="macaron" data-aos="fade-up-right" data-aos-delay="500" data-aos-duration="1000" />
          <img className="f5" src={f5} alt="macaron" data-aos="fade-up-left" data-aos-delay="600" data-aos-duration="1000" />
        </div>

        <div className="text" data-aos="fade-left" data-aos-delay="300" data-aos-duration="1200">
          <div className='h2'>
            {t("banner.title")} <h6>{t("banner.since")}</h6>
          </div>
          <h1>{t("banner.heading")}</h1>
          <p>{t("banner.description")}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
