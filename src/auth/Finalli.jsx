import React from "react";
import { useLocation, Link } from "react-router-dom";
import "./Finalli.scss";

function Finalli() {
  const location = useLocation();
  const { orderNumber, phone, promo, cartItems, subtotal, totalDelivery, total, address } =
    location.state || {};

  if (!orderNumber) {
    return <p style={{ padding: "20px", textAlign: "center" }}>Нет данных о заказе</p>;
  }

  return (
    <div className="finalli">
      <div className="finalli-box">
        <h2 className="order-title">Номер вашего заказа №{orderNumber}</h2>
        <p className="order-phone">
          С Вами свяжется наш менеджер по номеру: <b>{phone}</b>
        </p>

        <div className="address-info">
          <h3>Адрес доставки:</h3>
          <p>
            {address?.city}, {address?.street}, д. {address?.house}, подъезд {address?.entrance}, кв.{" "}
            {address?.apartment}
          </p>
        </div>

        <div className="order-items">
          <h3>Состав заказа:</h3>
          {cartItems.map((item) => (
            <div key={item.id} className="order-item">
              <span>
                {item.count || 1}x {item.name || item.title}
              </span>
              <span>{item.price * (item.count || 1)} сом</span>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <p>Сумма товаров: {subtotal} сом</p>
          <p>Доставка: {totalDelivery} сом</p>
          <h3>Итого к оплате: {total} сом</h3>
        </div>

        {promo && (
          <div className="promo-info">
            <strong>Менеджеру:</strong> клиент использовал промокод: <b>{promo}</b>
          </div>
        )}

        <Link to="/" className="back-home">
          На главную
        </Link>
      </div>
    </div>
  );
}

export default Finalli;
