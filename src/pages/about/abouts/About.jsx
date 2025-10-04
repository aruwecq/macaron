import React from "react";
import "../styles/About.scss";
import { useTranslation } from "react-i18next";

function About() {
  const { t } = useTranslation();

  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <h1>{t("abouts.title")}</h1>
          <p>{t("abouts.text")}</p>
        </div>

        <div className="about__images">
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/kupit-ekler-spb-16.png"
            alt="macarons"
          />
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/07/bolshye-nabory-6.png"
            alt="profiteroles"
          />
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/profitroli-kupit.png"
            alt="eclairs"
          />
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/trubochki-3.png"
            alt="waffles"
          />
        </div>
      </div>
    </div>
  );
}

export default About;
