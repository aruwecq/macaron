// September1.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/card/Card";
import "./September1.scss";

function September1() {
  const [selectedCategory, setSelectedCategory] = useState("на 1 сентября");
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

const events = [
  "День рождения",
  "Свадебные предложения",
  "8 марта",
  "Новый год",
  "Корпоративные подарки",
  "Детям",
  "Хэллоуин",
  "на 1 сентября",
  "День матери",
  "Классические макаронс",
  "Комбо-наборы",
  "На девичник",
  "Последний звонок",
  "Учителям",
  "Воспитателям"
];

  useEffect(() => {
    axios
      .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Ошибка при загрузке продуктов:", err));
  }, []);

  const prices = products.map((p) => p.price);
  const minProductPrice = Math.min(...prices, 0);
  const maxProductPrice = Math.max(...prices, 10000);

  const filteredProducts = products
    .filter((p) => selectedCategory === "Все" || p.forEvent === selectedCategory)
    .filter((p) => p.price >= minPrice && p.price <= maxPrice);

  return (
    <div className="sept-wrapper">
      {/* кнопки фильтров */}
      <div className="sept-buttons">
        {events.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "sept-btn active" : "sept-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* фильтр по цене с линиями */}
      <div className="sept-price-filter">
        <div className="price-slider">
          <span>Мин. сом{minPrice}</span>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
          />
        </div>
        <div className="price-slider">
          <span>Макс. сом{maxPrice}</span>
          <input
            type="range"
            min={minProductPrice}
            max={maxProductPrice}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
          />
        </div>
        <div className="price-line">
          <div
            className="price-range-highlight"
            style={{
              left: `${((minPrice - minProductPrice) / (maxProductPrice - minProductPrice)) * 100}%`,
              right: `${100 - ((maxPrice - minProductPrice) / (maxProductPrice - minProductPrice)) * 100}%`,
            }}
          />
        </div>
      </div>

      {/* карточки товаров */}
      <div className="sept-products">
        {filteredProducts.map((product) => (
          <Card key={product.id} item={product} addToCart={() => {}} />
        ))}
      </div>
    </div>
  );
}

export default September1;
