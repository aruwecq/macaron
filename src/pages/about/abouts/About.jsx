import React from "react";
import "../styles/About.scss";

function About() {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__content">
          <h1>О нас</h1>
          <p>
            Компания МакаронШоп основана в 2013 году. Мы — первый производитель
            пирожных макаронс в Бишкеке. Изначально мы развивали только
            один продукт — французские пирожные. А позже начали производить ещё
            вафельные трубочки, орешки, профитроли и эклеры. Сейчас мы поставляем
            нашу продукцию в крупнейшие кофейные и кондитерские сети Петербурга, а
            также кафе и рестораны. У нас можно заказать все виды пирожных оптом
            или запросить розничный прайс.
          </p>
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
