import React from "react";
import "../styles/Contacts.scss";

function Contacts() {
  return (
    <div className="contacts">
      <div className="contacts__container">
        <div className="contacts__image">
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/location.png"
            alt="Contacts"
          />
        </div>

        <div className="contacts__content">
          <h1>Контакты</h1>
          <p>Свяжитесь с нами удобным для вас способом:</p>

          <h2>Телефон:</h2>
          <p>+996 557 07 19 20 </p>

          <h2>Email:</h2>
          <p>info@macaronshop.kg</p>

          <h2>Адрес:</h2>
          <p>г. Бишкек, ул. Сладкая, д. 10</p>

          <h2>Режим работы:</h2>
          <p>Ежедневно с 10:00 до 22:00</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
