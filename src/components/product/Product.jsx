import React, { useEffect, useState } from "react";
import "./product.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import ProductNews from "./productNews/ProductNews";
import { useCart } from "../cart/CartContext";
import Card from "../card/Card";
import AOS from "aos";
import "aos/dist/aos.css";

function Product() {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const [clickedButtons, setClickedButtons] = useState({});

  useEffect(() => {
    axios
      .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Ошибка при загрузке продуктов:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  const handleAddToCart = (item) => {
    addToCart(item);
    setClickedButtons((prev) => ({ ...prev, [item.id]: true }));
  };

  return (
    <div className="product-list">
      <div className="h1">
        <h1 data-aos="fade-up">Популярные наборы</h1>
      </div>
      <div className="listt">
        {products.slice(0, 6).map((item, index) => (
          <div key={item.id} data-aos="fade-up" data-aos-delay={index * 100}>
            <Card item={item} />
          </div>
        ))}
      </div>

      <div className="all-sets-btn" data-aos="fade-up" data-aos-delay="700">
        <Link to="/holydays">Все праздничные наборы</Link>
      </div>

      <ProductNews />
    </div>
  );
}

export default Product;
