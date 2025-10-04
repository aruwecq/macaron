import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../components/cart/CartContext";
import { OrdersContext } from "../context/OldersContext";
import axios from "axios";
import "./Auther.scss";

function Auther() {
  const navigate = useNavigate();
  const { addOrder } = useContext(OrdersContext);
  const { cart } = useCart();

  const [promo, setPromo] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [street, setStreet] = useState("");
  const [house, setHouse] = useState("");
  const [entrance, setEntrance] = useState("");
  const [apartment, setApartment] = useState("");

  const deliveryBase = 499;
  const totalCount = cart.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cart.reduce((sum, item) => sum + item.price * (item.count || 1), 0);
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  const finishOrder = async () => {
    const orderNumber = Math.floor(100000 + Math.random() * 900000);
    const order = {
      orderNumber,
      phone,
      promo,
      cartItems: cart,
      subtotal,
      totalDelivery,
      total,
      address: { city, street, house, entrance, apartment },
      createdAt: new Date().toISOString(),
    };

    try {
      await axios.post("https://68da53f223ebc87faa2fbc11.mockapi.io/shopping", order);

      addOrder(order);

      // передаём заказ в Finalli
      navigate("/finalli", { state: order });
    } catch (error) {
      console.error("Ошибка при отправке заказа:", error);
      alert("Не удалось отправить заказ. Попробуйте снова.");
    }
  };

  if (cart.length === 0) {
    return <p style={{ padding: "20px", textAlign: "center" }}>Корзина пустая</p>;
  }

  return (
    <div className="auther">
      <div className="left-panel">
        <h2>Оформление заказа</h2>

        <h3>Адрес доставки</h3>
        <input placeholder="Город" value={city} onChange={(e) => setCity(e.target.value)} />
        <input placeholder="Улица / Район" value={street} onChange={(e) => setStreet(e.target.value)} />
        <div className="address-row">
          <input placeholder="Дом" value={house} onChange={(e) => setHouse(e.target.value)} />
          <input placeholder="Подъезд" value={entrance} onChange={(e) => setEntrance(e.target.value)} />
          <input placeholder="Квартира" value={apartment} onChange={(e) => setApartment(e.target.value)} />
        </div>
      </div>

      <div className="right-panel">
        <h2>Ваш заказ</h2>
        <div className="order-list">
          {cart.map((item) => (
            <div key={item.id} className="order-row">
              <span>
                {item.count || 1}x {item.name || item.title}
              </span>
              <span>{item.price * (item.count || 1)} сом</span>
            </div>
          ))}
        </div>

        <div className="order-summary">
          <div className="order-row">
            <span>Доставка:</span>
            <span>{totalDelivery} сом</span>
          </div>
          <div className="order-row total">
            <span>К оплате:</span>
            <span>{total} сом</span>
          </div>
        </div>

        <h3>Способ оплаты</h3>
        <select className="auther-select">
          <option>счет по M банк</option>
          <option>Онлайн карта</option>
          <option>Наличные курьеру</option>
        </select>

        <div className="promo">
          <input placeholder="Промокод" value={promo} onChange={(e) => setPromo(e.target.value)} />
        </div>

        <h3>Номер получателя</h3>
        <input
          type="number"
          placeholder="+996 ___ ___ ___"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <button className="finish-btn" onClick={finishOrder}>
          Закончить оформление
        </button>
      </div>
    </div>
  );
}

export default Auther;
