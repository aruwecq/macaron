import React, { useState, useEffect } from "react";
import axios from "axios";
import "./ClassicMacarons.scss";

function ClassicMacarons() {
  const [selectedCategory, setSelectedCategory] = useState("Классические макаронс");
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const categories = [
    "Все",
    "Новый год",
    "День отца",
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
      .then((res) => {
        console.log(res.data);
        setProducts(res.data);
      })
      .catch((err) => console.error("Ошибка при загрузке продуктов:", err));
  }, []);

  const filteredProducts =
    selectedCategory === "Все"
      ? products
      : products.filter((p) => p.forEvent === selectedCategory);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    alert(`${product.title} добавлен в корзину 🛒`);
  };

  return (
    <div className="classic-wrapper">
      {/* кнопки фильтров */}
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

      {/* карточки */}
      <div className="classic-products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="classic-card">
            <div className="classic-image">
              <img
                src={product.mainImage}
                alt={product.title}
              />
            </div>
            <div className="classic-content">
              <h3 className="classic-title">{product.title}</h3>
              <p className="classic-price">
                {product.price} сом{" "}
                {product.oldPrice && (
                  <span className="classic-oldprice">{product.oldPrice} сом</span>
                )}
              </p>
              {product.items && (
                <p className="classic-count">
                  {Object.values(product.items)[0]} шт.
                </p>
              )}
              <button
                className="classic-addcart"
                onClick={() => addToCart(product)}
              >
                В корзину 🛒
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClassicMacarons;
