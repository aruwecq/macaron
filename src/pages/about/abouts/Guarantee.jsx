import React from "react";
import "../styles/Guarantee.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Guarantee() {
  const { t } = useTranslation();

  // Получаем массив элементов
  const items = t("guaranties.items", { returnObjects: true });

  return (
    <div className="garantia">
      <div className="link-g">
        <Link to="/">{t("guaranties.breadcrumbHome")}</Link> »
        <p>{t("guaranties.breadcrumbPage")}</p>
      </div>

      <div className="g-title">
        <h2>{t("guaranties.title")}</h2>
        <span>{t("guaranties.description")}</span>
      </div>

      <div className="cont">
        {items.map((item, index) => (
          <div className="cont1" key={index}>
            <img src={item.img || ""} alt={item.imgAlt || ""} />
            <h3>{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Guarantee;
