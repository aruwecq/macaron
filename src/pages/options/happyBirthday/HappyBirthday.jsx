import React, { useState, useEffect } from "react";
import axios from "axios";
import "./HappyBirthday.scss";

function HappyBirthday() {
  const [selectedCategory, setSelectedCategory] = useState("День рождения");
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
    <div className="hbirthday-wrapper">
      <div className="hbirthday-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "hbirthday-btn active" : "hbirthday-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="hbirthday-products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="hbirthday-card">
            <div className="hbirthday-image">
              <img
                src={product.mainImage}
                alt={product.title}
              />
            </div>
            <div className="hbirthday-content">
              <h3 className="hbirthday-title">{product.title}</h3>
              <p className="hbirthday-price">
                {product.price} сом{" "}
                {product.oldPrice && (
                  <span className="hbirthday-oldprice">{product.oldPrice} сом</span>
                )}
              </p>
              {product.items && (
                <p className="hbirthday-count">
                  {Object.values(product.items)[0]} шт.
                </p>
              )}
              <button
                className="hbirthday-addcart"
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

export default HappyBirthday;
