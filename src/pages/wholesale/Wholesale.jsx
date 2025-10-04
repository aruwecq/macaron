import React from "react";
import "./wholesale.css";
import optom from "../../assets/images/optom.jpg";
import macarons from "../../assets/images/macarons1.png";
import macarons2 from "../../assets/images/macarons2.png";
import cace from "../../assets/images/cake-pops.png";
import kartoshka from "../../assets/images/kartoshka1.png";
import macaroni from "../../assets/images/macaroni.png";
import oreshki from "../../assets/images/oreshki.png";
import trubochki from "../../assets/images/trubochki.png";
import documentPdf from "../../assets/katalog__.pdf";

import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

function Wholesale() {
  const { t } = useTranslation();

  const productsPage1Images = [macarons, macarons2, cace, kartoshka];
  const productsPage2Images = [oreshki, trubochki, macaroni];

  return (
    <div className="wholesale">
      <div className="wholesale-all">
        <div className="wholesale-logo"></div>
        <div className="optom1">
          <div className="optom1-img">
            <img src={optom} alt={t("wholesal.optomImgAlt")} />
          </div>
          <div className="optom-text1">
            <h2 className="optom-logo1">{t("wholesal.optomTitle")}</h2>
            <h4 className="optom-text2">{t("wholesal.optomSubtitle")}</h4>
            <Link to="" className="buttonPodreb">
              {t("wholesal.readMore")}
            </Link>
            <p>{t("wholesal.optomDescription")}</p>
            <button
              onClick={() => {
                const link = document.createElement("a");
                link.href = documentPdf;
                link.download = "macaron_shop_catalog.pdf";
                link.click();
              }}
            >
              {t("wholesal.downloadCatalog")}
            </button>
          </div>
        </div>
      </div>

      <div className="wholesale-all1">
        <div className="optom-logo2">
          <h3>{t("wholesal.productsTitle")}</h3>
        </div>

        <div className="optom1-pages1">
          {t("wholesal.productsPage1", { returnObjects: true }).map(
            (item, index) => (
              <div className="optom-page1" key={index}>
                <img src={productsPage1Images[index]} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>

        <div className="optom-pages2">
          {t("wholesal.productsPage2", { returnObjects: true }).map(
            (item, index) => (
              <div className="optom-page2" key={index}>
                <img src={productsPage2Images[index]} alt={item.alt} />
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            )
          )}
        </div>

        <div className="optom-product">
          <h2>{t("wholesal.featuresTitle")}</h2>
          <div className="optom-icons">
            {t("wholesal.features", { returnObjects: true }).map(
              (item, index) => (
                <div className="icon-optom" key={index}>
                  <div>
                    <img
                      decoding="async"
                      width="100"
                      height="100"
                      src={item.img}
                      alt={item.alt}
                    />
                  </div>
                  <p>{item.text}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wholesale;
