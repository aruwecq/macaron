import React, { useEffect, useState } from "react";
import Card from "../../../components/card/Card"; // используем готовую карточку
import "./MacaronPage.scss";

function MacaronPage() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const macarons = data.filter((item) => item.category === "macaron");
        setProducts(macarons);
      });
  }, []);

  return (
    <div className="macaron-page">
      <h1>Макароны</h1>
      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} item={product} />
        ))}
      </div>
    </div>
  );
}

export default MacaronPage;
