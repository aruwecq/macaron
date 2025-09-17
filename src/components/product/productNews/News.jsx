import React, { useEffect, useState } from "react";
import "./news.scss";
import axios from "axios";
import { Link } from "react-router-dom";
// import News from './product/productNews/news'
function News() {
  const [news, setNews] = useState([]);

  useEffect(() => {
    try {
      axios
        .get("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
        .then((res) => {
          setNews(res.data);
        })
      
    } catch (error) {
      console.error(error);
    }
  }, []);
  console.log(news);
  
  return (
    <div className="news-list">
      <div className="news-h1">
        <h1>Новости</h1>
      </div>

      <div className="news">
        {news.map(
          (
            item 
          ) => (
            <div key={item.id} className="news-card">
              <div className="news-image">
                  <img src={item.mainImage || (item.images && item.images[0]) || "https://via.placeholder.com/370x250?text=Нет+фото"} alt={item.title} />
              </div>
              <div className="news-content">
                <h3 className="news-title">{item.title}</h3>
                  <p className="news-desc">{item.description}</p>
                <span>{item.descriptionLong}</span>
              </div>

              {/* <div className="product-footer">
                <span className="product-price">{item.price} сом</span>
                <button className="product-btn">
                  <Link to="/" className="icon">
                    🛒
                  </Link>{" "}
                  В корзину
                </button>
              </div> */}
            </div>
          )
        )}
        <Link
          style={{
            background: "aqua",
            textDecoration: "none",
            width: "250px",
            height: "50px",
            textAlign: "center",
            padding: "15px",
          }}
          to="/holydays"
        >
          Все новости
        </Link>
      </div>
    </div>
  );
}

export default News;
