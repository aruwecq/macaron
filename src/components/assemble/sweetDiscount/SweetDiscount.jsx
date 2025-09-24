import React, { useEffect, useState } from "react";
import "./SweetDiscount.scss";
import axios from "axios";
import { Link } from "react-router-dom";

function SweetDiscount() {
  const [discounts, setDiscounts] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
        .then((res) => {
          setDiscounts(res.data);
        });
    } catch (error) {
      console.error(error);
    }
  }, []);

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
                src={item.mainImage}
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
              <button className="sweet-btn">
                <Link to="/" className="icon">
                  🛒
                </Link>{" "}
                В корзину
              </button>
            </div>
          </div>
        ))}

      
      </div>
    </div>
  );
}

export default SweetDiscount;
