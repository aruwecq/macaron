import React from "react";
import "../styles/Delivery.scss";
import { useTranslation } from "react-i18next";

function Delivery() {
  const { t } = useTranslation();

  // Получаем массив пунктов доставки и интервалов
  const cityItems = t("del.cityDeliveryItems", { returnObjects: true });
  const intervalItems = t("del.intervalsItems", { returnObjects: true });

  return (
    <div className="delivery">
      <div className="delivery__container">
        <div className="delivery__image">
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/vehicle.png"
            alt={t("del.imgAlt")}
          />
        </div>

        <div className="delivery__content">
          <h1>{t("del.title")}</h1>
          <p>{t("del.courierInfo")}</p>

          <h2>{t("del.cityDeliveryTitle")}</h2>
          <ul>
            {cityItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <h2>{t("del.intervalsTitle")}</h2>
          <ul>
            {intervalItems.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>

          <p className="delivery__note">{t("del.note")}</p>
        </div>
      </div>
    </div>
  );
}

export default Delivery;
