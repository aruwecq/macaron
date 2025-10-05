import React from "react";
import "./Holyday.scss";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Holydays() {
  const { t } = useTranslation();

  return (
    <div className="holydays">
      <div className="holydays1">
        <div className="link">
          <Link to="/">{t("holydays.breadcrumbHome")}</Link> »
          <Link to="/njm">{t("holydays.breadcrumbCatalog")}</Link> »
          <p>{t("holydays.breadcrumbReadySets")}</p>
        </div>

        <div className="breadcrumbs">
          <img
            src="https://macaronshop.ru/wp-content/uploads/2025/02/set_left21.png"
            alt="left"
            className="breadcrumbs__img-left"
          />
          <div className="breadcrumbs__content">
            <h1>{t("holydays.title")}</h1>
            <p>{t("holydays.subtitle")}</p>
          </div>

          <img
            src="https://macaronshop.ru/wp-content/uploads/2025/02/set_right_v.png"
            alt="right"
            className="breadcrumbs__img-right"
          />
        </div>

        <div className="holidays-grid">
          <Link to="/happyBirthday" className="holiday-card birthday aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2024/09/setcard.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">{t("holydays.birthday")}</h3>
          </Link>

          <Link to="/september1" className="holiday-card sept1 aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2021/06/podarki-na-1-sentyabrya-10.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">{t("holydays.september1")}</h3>
          </Link>

          <Link to="/classicMacarons" className="holiday-card med aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2025/04/den-medika.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">
              {t("holydays.classicMacarons")}
            </h3>
          </Link>

          <Link to="/happyBirthday/Свадьба" className="holiday-card candy">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2024/09/setcard_4.png)",
              }}
            />
            <div className="holiday-card__overlay candy-bar" />
            <h3 className="holiday-card__title">{t("holydays.wedding")}</h3>
          </Link>

          <Link to="/holiday/boss" className="holiday-card boss aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2025/02/ruk.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">{t("holydays.boss")}</h3>
          </Link>

          <Link to="/holiday/teachers" className="holiday-card teachers aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2025/04/uchitel.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">{t("holydays.teachers")}</h3>
          </Link>

          <Link to="/holiday/colleagues" className="holiday-card colleagues aaa">
            <div
              className="holiday-card__bg"
              style={{
                backgroundImage:
                  "url(https://macaronshop.ru/wp-content/uploads/2025/04/kolle.png)",
              }}
            />
            <div className="holiday-card__overlay" />
            <h3 className="holiday-card__title">{t("holydays.colleagues")}</h3>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Holydays;
