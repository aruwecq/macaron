import React from "react";
import "../styles/Contacts.scss";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

function Contacts() {
  const { t } = useTranslation();

  return (
    <div className="contacts">
      <div className="contacts__container">
        {/* Изображение */}
        <div className="contacts__image">
          <img
            src="https://msk.macaronshop.ru/wp-content/uploads/2021/06/location.png"
            alt={t("contact.title")}
          />
        </div>

        {/* Контент */}
        <div className="contacts__content">
          <h1>{t("contact.title")}</h1>
          <p>{t("contact.description")}</p>

          <h2>{t("contact.phoneTitle")}</h2>
          <p>{t("contact.phone")}</p>

          <h2>{t("contact.emailTitle")}</h2>
          <p>{t("contact.email")}</p>

          <h2>{t("contact.addressTitle")}</h2>
          <p>{t("contact.address")}</p>

          <h2>{t("contact.workingHoursTitle")}</h2>
          <p>{t("contact.workingHours")}</p>
        </div>
      </div>
    </div>
  );
}

export default Contacts;
