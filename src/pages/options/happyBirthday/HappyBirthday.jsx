import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from "../../../components/card/Card";
import { useCart } from "../../../components/cart/CartContext";
import "./HappyBirthday.scss";
import { useParams } from "react-router-dom";

function HappyBirthday() {
    const { id } = useParams();
  const [selectedCategory, setSelectedCategory] = useState(id || "День рождения");
  const [products, setProducts] = useState([]);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(10000); // можно задать макс цену
  const { addToCart } = useCart();

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
    "1 сентября",
  ];

  useEffect(() => {
    axios
      .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Ошибка при загрузке продуктов:", err));
  }, []);

  // Вычисляем минимальную и максимальную цену среди всех продуктов
  const prices = products.map((p) => p.price);
  const minProductPrice = Math.min(...prices, 0);
  const maxProductPrice = Math.max(...prices, 10000);

  const filteredProducts = products
    .filter(
      (p) => selectedCategory === "Все" || p.forEvent === selectedCategory
    )
    .filter((p) => p.price >= minPrice && p.price <= maxPrice);

  return (
    <div className="hbirthday-wrapper">
      {/* кнопки категорий */}
      <div className="hbirthday-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={
              selectedCategory === cat
                ? "hbirthday-btn active"
                : "hbirthday-btn"
            }
          >
            {cat}
          </button>
        ))}
      </div>

      {/* фильтр по цене с линиями */}
      <div className="hbirthday-price-filter">
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
              left: `${
                ((minPrice - minProductPrice) /
                  (maxProductPrice - minProductPrice)) *
                100
              }%`,
              right: `${
                100 -
                ((maxPrice - minProductPrice) /
                  (maxProductPrice - minProductPrice)) *
                  100
              }%`,
            }}
          />
        </div>
      </div>
      <div className="hbirthday-products">
        {filteredProducts.map((product) => (
          <Card key={product.id} item={product} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}

export default HappyBirthday;
