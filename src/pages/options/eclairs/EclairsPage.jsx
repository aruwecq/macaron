import React, { useEffect, useState } from "react";
import Card from "../../../components/card/Card"; // твоя карточка с кнопкой добавления в корзину
import "./EclairsPage.scss";

function EclairsPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const eclairs = data.filter((item) => item.category === "eclair");
        setProducts(eclairs);
      });
  }, []);

  return (
    <div className="eclairs-page">
      <h1>Эклеры</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default EclairsPage;
