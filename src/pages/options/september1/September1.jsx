import React, { useState, useEffect } from "react";
import axios from "axios";
import "./September1.scss";

function September1() {
  const [selectedCategory, setSelectedCategory] = useState("1 сентября");
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
    <div className="sept-wrapper">
      <div className="sept-buttons">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat ? "sept-btn active" : "sept-btn"}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="sept-products">
        {filteredProducts.map((product) => (
          <div key={product.id} className="sept-card">
            <div className="sept-image">
              <img
                src={product.image || product.mainImage}
                alt={product.title}
              />
            </div>
            <div className="sept-content">
              <h3 className="sept-title">{product.title}</h3>
              <p className="sept-price">
                {product.price} сом{" "}
                {product.oldPrice && (
                  <span className="sept-oldprice">{product.oldPrice} сом</span>
                )}
              </p>
              {product.items && (
                <p className="sept-count">
                  {Object.values(product.items)[0]} шт.
                </p>
              )}
              <button
                className="sept-addcart"
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

export default September1;
