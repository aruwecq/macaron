import React from "react";
import "../styles/Delivery.scss";

function Delivery() {
  return (
    <div className="delivery">
      <div className="delivery__container">
        <div className="delivery__image">
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/vehicle.png"
            alt="Delivery bike"
          />
        </div>

        <div className="delivery__content">
          <h1>Доставка и оплата</h1>
          <p>Курьеры работают ежедневно с 10 до 22.</p>

          <h2>Доставка по всему городу:</h2>
          <ul>
            <li>от 3000сом до 5000сом — стоимость доставки 5000сом</li>
            <li>от 5000сом — бесплатно</li>
          </ul>

          <h2>Интервалы доставки:</h2>
          <ul>
            <li>с 10.00 до 14.00</li>
            <li>с 14.00 до 17.00</li>
            <li>после 17.00 до 22.00</li>
            <li>
              по Москве доставка через день после оформления заказа
            </li>
          </ul>
          <p className="delivery__note">
            Курьер предупредит о своём прибытии за 30-40 минут.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
