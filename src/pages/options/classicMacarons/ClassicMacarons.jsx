// ClassicMacarons.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/card/Card";
import "./ClassicMacarons.scss";

function ClassicMacarons() {
  const [selectedCategory, setSelectedCategory] = useState("Классические макаронс");
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000);

  const categories = [
    "Все",
    "Новый год",
    "День тренера",
    "Хэллоуин",
    "День матери",
    "День рождения",
    "Классические макаронс",
    "Комбо-наборы",
    "Свадьба",
    "На девичник",
    "Детям",
    "Учителям",
    "Последний звонок",
    "1 сентября"
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

  const addToCart = (product) => {
    alert(`${product.title} добавлен в корзину 🛒`);
  };

  return (
    <div className="classic-wrapper">
      {/* кнопки категорий */}
      <div className="classic-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "classic-btn active" : "classic-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* фильтр по цене */}
      <div className="classic-price-filter">
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

      {/* карточки */}
      <div className="classic-products">
        {filteredProducts.map((product) => (
          <Card key={product.id} item={product} addToCart={() => addToCart(product)} />
        ))}
      </div>
    </div>
  );
}

export default ClassicMacarons;
