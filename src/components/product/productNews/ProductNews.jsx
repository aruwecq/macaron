import React, { useEffect, useState } from "react";
import "./productNews.scss";
import { Link } from "react-router-dom";
import axios from "axios";
import AOS from "aos";
import "aos/dist/aos.css";
import { useTranslation } from "react-i18next";

function ProductNews() {
  const [productsNews, setProductsNews] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    axios
      .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => setProductsNews(res.data))
      .catch((err) => console.error("Ошибка при загрузке продуктов:", err));
  }, []);

  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: "ease-out" });
  }, []);

  return (
    <div className="product-product-news">
      <div className="hh1">
        <h1 data-aos="fade-up">{t("productNews.title")}</h1>
      </div>
      <div className="list-product-new">
        {productsNews.slice(0, 3).map((item, index) => (
          <div
            key={item.id}
            className="product-card-news"
            data-aos="fade-up"
            data-aos-delay={index * 100}
          >
            <div className="product-image">
              <img
                src={
                  item.mainImage ||
                  (item.images && item.images[0]) ||
                  "https://via.placeholder.com/370x250?text=Нет+фото"
                }
                alt={item.title}
              />
            </div>

            <div className="product-content">
              <h3 className="product-title">{item.title}</h3>
              <p className="product-desc">{item.description}</p>
              <span>{item.descriptionLong}</span>
            </div>
          </div>
        ))}
      </div>
      <br />
      <Link
        style={{
          background: "aqua",
          textDecoration: "none",
          width: "250px",
          height: "50px",
          textAlign: "center",
          padding: "15px",
        }}
        to="/news"
        data-aos="fade-up"
        data-aos-delay="400"
      >
        {t("productNews.allNews")}
      </Link>
    </div>
  );
}

export default ProductNews;
