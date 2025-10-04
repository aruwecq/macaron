import React, { useState } from "react";
import { useCart } from "../cart/CartContext";
import { useTranslation } from "react-i18next";
import "./Card.scss";

function Card({ item }) {
  const { addToCart } = useCart();
  const [clicked, setClicked] = useState(false);
  const { t } = useTranslation();

  if (!item) return null;

  const handleAddToCart = () => {
    addToCart(item);
    setClicked(true);
  };

  return (
    <div className="sweet-card">
      <div className="sweet-image">
        <img
          src={
            item.mainImage ||
            (item.images && item.images[0]) ||
            "https://via.placeholder.com/370x250?text=Нет+фото"
          }
          alt={item.title || t("card.noName")}
        />
      </div>

      <div className="sweet-content-card">
        <h3 className="sweet-title">{item.title || t("card.noName")}</h3>
        <p className="sweet-desc">{item.description || ""}</p>
        <span>{item.descriptionLong || ""}</span>
      </div>

      <div className="sweet-footer">
        <span className="sweet-price">
          {item.price != null ? t("card.price", { value: item.price }) : ""}
        </span>
        <button
          className={`sweet-btn ${clicked ? "active" : ""}`}
          onClick={handleAddToCart}
          disabled={clicked}
        >
          {clicked ? t("card.button.added") : t("card.button.add")}
        </button>
      </div>
    </div>
  );
}

export default Card;
