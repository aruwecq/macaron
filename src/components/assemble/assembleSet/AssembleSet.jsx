import React from "react";
import "./AssembleSet.scss";
import { Link, useParams, Routes, Route } from "react-router-dom";
import { useTranslation } from "react-i18next";
export const products = [
  {
    id: 1,
    title: "Набор из 6 макаронс",
    price: 490,
    oldPrice: null,
    image: "https://macaronshop.ru/wp-content/uploads/2021/06/6makaroni.png",
    count: 6,
  },
  {
    id: 2,
    title: "Набор из 12 макаронс",
    price: 890,
    oldPrice: 1100,
    image: "https://macaronshop.ru/wp-content/uploads/2023/04/makaroni-12.png",
    count: 12,
  },
  {
    id: 3,
    title: "Набор Сердце из 22 макаронс",
    price: 2500,
    oldPrice: 3500,
    image: "https://macaronshop.ru/wp-content/uploads/2021/07/serdce.png",
    count: 22,
  },
  {
    id: 4,
    title: "Набор из 24 макаронс",
    price: 3200,
    oldPrice: null,
    image: "https://macaronshop.ru/wp-content/uploads/2023/04/24makaroni.png",
    count: 24,
  },
  {
    id: 5,
    title: "Набор Круглый из 40 макарон",
    price: 4900,
    oldPrice: 5900,
    image: "https://macaronshop.ru/wp-content/uploads/2023/01/makaroni-40.png",
    count: 40,
  },
  {
    id: 6,
    title: "Набор из 49 макаронс",
    price: 3700,
    oldPrice: null,
    image: "https://macaronshop.ru/wp-content/uploads/2021/06/49-makaroni.png",
    count: 49,
  },
  {
    id: 7,
    title: "Набор из 60 макаронс",
    price: 5900,
    oldPrice: null,
    image: "https://macaronshop.ru/wp-content/uploads/2024/06/makaroni-60.png",
    count: 60,
  },
];
function AssembleSet() {
    const { t } = useTranslation();
  const getCountFromTitle = (title) => {
    const match = title.match(/\d+/);
    return match ? match[0] : "unknown";
  };

  return (
    <div className="set">
      <div className="link">
  <Link to="/">{t("assembleSet.breadcrumbHome")}</Link> »
        <p className="title-set">{t("assembleSet.title")}</p>      </div>

      <div className="products">
        {products.map((p) => (  
          <div className="product-card" key={p.id}>
            <Link to={`/sobratnabor/${getCountFromTitle(p.title)}`} className="aa">
              <img src={p.image} alt={p.title} />
              <h3>{p.title}</h3>
              {p.oldPrice && <span className="old">{p.oldPrice} руб</span>}
              <p className="price">{p.price} руб</p>
            </Link>
          </div>
        ))}
      </div>

      {/* Route ичинде продукт барагы
      <Routes>
        <Route path="/assemble/:id" element={<ProductPage products={products} />} />
      </Routes> */}
    </div>
  );
}
function ProductPage({ products }) {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <h2>Продукт табылган жок</h2>;

  return (
    <div className="product-page">
      <img src={product.image} alt={product.title} />
      <h2>{product.title}</h2>
      {product.oldPrice && <span className="old">{product.oldPrice} руб</span>}
      <p className="price">{product.price} сом</p>
      <Link to="/assemble">← Назад к наборам</Link>
    </div>
  );
}

export default AssembleSet;
