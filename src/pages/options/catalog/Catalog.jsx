import React from "react";
import "./Catalog.scss";
import { Link } from "react-router-dom";

function Catalog() {
  return (
    <div className="catalog">
      <h1 className="catalog__title">Каталог десертов</h1>

      <div className="catalog__main">
        <div className="catalog__main-image">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2021/06/image-1.png"
            alt="Макароны"
          />
        </div>

        <div className="catalog__main-content">
          <h2>Пирожные макарон</h2>
          <p>
            Самые классные, самые лучшие, свежие, воздушные, хрустящие макарошки.
            Лучшее, что мы умеем делать.
          </p>
          <div className="catalog__buttons">
            <Link to="/holydays" className="catalog__btn">
              Подарочные наборы
            </Link>
            <Link to="/set" className="catalog__btn">
              Собрать свой набор
            </Link>
          </div>
        </div>
      </div>

      <div className="catalog__grid">
        <Link to="/eclairs" className="catalog__card eclairs">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2025/04/ekler.png"
            alt="Эклеры"
          />
          <h3>Эклеры</h3>
        </Link>

        <Link to="/waffle" className="catalog__card waffles">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2021/06/trubochki.png"
            alt="Вафельные трубочки"
          />
          <h3>Вафельные трубочки</h3>
        </Link>

        <Link to="/combo" className="catalog__card combo">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2025/04/kombo_.png"
            alt="Комбо-наборы"
          />
          <h3>Комбо-наборы</h3>
        </Link>
      </div>
    </div>
  );
}

export default Catalog;
