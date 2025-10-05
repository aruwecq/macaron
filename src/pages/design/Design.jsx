import React from "react";
import "./Design.css";
import macaron3 from "../../assets/images/macarons3.png";
import macaron4 from "../../assets/images/macarons4.png";
import macaron5 from "../../assets/images/macarons5.jpg";
import macaron6 from "../../assets/images/macarons6.png";
import more from "../../assets/images/more.png";
import bezimeni from "../../assets/images/bezimeni.png";
import { useTranslation } from "react-i18next";

function Design() {
  const { t } = useTranslation();

  const setImages = [macaron3, macaron4, macaron5, macaron6, more, bezimeni];

  const sets = t("design.sets", { returnObjects: true });
  const steps = t("design.steps", { returnObjects: true });
  const examples = t("design.examples", { returnObjects: true });

  return (
    <div className="design">
      <div className="design-all">
        {/* Заголовок */}
        <div className="wholesale-logo">
          <h2>{t("design.title")}</h2>
        </div>

        {/* Блок с наборами */}
        <div className="design1">
          {sets.slice(0, 4).map((item, index) => (
            <div className="page-design1" key={index}>
              <img src={setImages[index]} alt={item.name} />
              <p>
                {item.name}
                <h4>{item.price}</h4>
              </p>
            </div>
          ))}
        </div>

        <div className="design1">
          {sets.slice(4, 6).map((item, index) => (
            <div className="page-design2" key={index + 4}>
              <img src={setImages[index + 4]} alt={item.name} />
              <p>
                {item.name}
                <h4>{item.price}</h4>
              </p>
            </div>
          ))}
        </div>

        {/* Информационный блок */}
        <div className="design-info">
          <h2>{t("design.infoTitle")}</h2>
          <p>{t("design.infoText")}</p>

          <h3>{t("design.whyTitle")}</h3>
          <ul>
            <li>
              <strong>{t("design.reasons.gift")}</strong>
            </li>
            <ul>
              <li>
                <strong>{t("design.reasons.private")}</strong>
              </li>
              <li>
                <strong>{t("design.reasons.b2b")}</strong>
              </li>
            </ul>
            <li>
              <strong>{t("design.reasons.universal")}</strong>
            </li>
            <li>
              <strong>{t("design.reasons.easy")}</strong>
            </li>
          </ul>

          <h3>{t("design.howTitle")}</h3>
          <ol>
            {steps.map((step, index) => (
              <li key={index}>{step}</li>
            ))}
          </ol>

          <h3>{t("design.examplesTitle")}</h3>
          <ul>
            {examples.map((example, index) => (
              <li key={index}>{example}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Design;
