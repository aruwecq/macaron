import React, { useEffect, useState } from "react";
import "./SweetDiscount.scss";
import axios from "axios";
import { Link } from "react-router-dom";
import { useCart } from "../../cart/CartContext"; // ✅ подключаем корзину

function SweetDiscount() {
  const [discounts, setDiscounts] = useState([]);
  const { addToCart } = useCart(); // ✅ функция корзины
  const [clickedButtons, setClickedButtons] = useState({}); // ✅ состояния нажатых кнопок

  useEffect(() => {
    axios
      .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => {
        setDiscounts(res.data);
      })
      .catch((err) => console.error("Ошибка при загрузке акций:", err));
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setClickedButtons((prev) => ({ ...prev, [item.id]: true }));
  };

  return (
    <div className="sweet-discount">
      {/* хлебные крошки */}
      <div className="link">
        <Link to="/">Главная страница</Link> »
        <p> Сладкие дни</p>
      </div>

      {/* заголовки акции */}
      <div className="sweet-header">
        <h1>Акция: сладкие дни!</h1>
        <h3>Неделя скидок на авторские и подарочные наборы макарон</h3>
      </div>

      {/* карточки акций */}
      <div className="sweet-cards">
        {discounts.map((item) => (
          <div key={item.id} className="sweet-card">
            <div className="sweet-image">
              <img
                src={
                  item.mainImage ||
                  (item.images && item.images[0]) ||
                  "https://via.placeholder.com/370x250?text=Нет+фото"
                }
                alt={item.title}
              />
            </div>

            <div className="sweet-content">
              <h3 className="sweet-title">{item.title}</h3>
              <p className="sweet-desc">{item.description}</p>
              <span>{item.descriptionLong}</span>
            </div>

            <div className="sweet-footer">
              <span className="sweet-price">{item.price} сом</span>
              <button
                className={`sweet-btn ${clickedButtons[item.id] ? "active" : ""}`}
                onClick={() => handleAddToCart(item)}
                disabled={clickedButtons[item.id]}
              >
                {clickedButtons[item.id] ? "Добавлен ✅" : "В корзину 🛒"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SweetDiscount;
