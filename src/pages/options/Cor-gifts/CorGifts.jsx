// import React from 'react';
// import './CorGifts.scss';
// import i1 from '../../../assets/images/i1.svg'
// import i2 from '../../../assets/images/i2.svg'
// import i4 from '../../../assets/images/i4.svg'
// import i5 from '../../../assets/images/i5.svg'

// function CorGifts() {
//   return (
//     <div className="cor-gifts-container">
//       <div className="image-section">
//         <img src="https://macaronshop.ru/wp-content/uploads/2025/07/new.jpg" alt="Macaron gift box" />
//       </div>
//       <div className="text-section">
       
//         <h1>Корпоративные подарки оптом и в розницу</h1>
//         <p>Брендированные макаронс и эклеры — лучший подарок для коллег и контрагентов. Мы приготовим пирожные поштучно от 70 руб., в наборах от 350 руб., сделаем индивидуальный дизайн и нанесём ваши лого.</p>
//         <button
//           onClick={() => {
//             const link = document.createElement("a");
//             link.href = documentPdf; 
//             link.download = "macaron_shop_catalog.pdf";
//             link.click();
//           }}
//         >
//             скачать полный каталог
//         </button>
//         <h3>Брендированные пирожные — лучший подарок:</h3>
//         <div className="gift-options">
//           <div><img src={i1} alt="" /><span>Коллегам</span></div>
//           <div><img src={i2} alt="" /><span>Сотрудникам</span></div>
//           <div><img src={i4} alt="" /><span>Клиентам</span></div>
//           <div><img src={i5} alt="" /><span>Родным и близким</span></div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default CorGifts;
import React from "react";
import "./CorGifts.scss";
import { useTranslation } from "react-i18next";
import i1 from "../../../assets/images/i1.svg";
import i2 from "../../../assets/images/i2.svg";
import i4 from "../../../assets/images/i4.svg";
import i5 from "../../../assets/images/i5.svg";

function CorGifts() {
  const { t } = useTranslation();
  const documentPdf = "/files/macaron_shop_catalog.pdf"; // пример пути к каталогу

  return (
    <div className="cor-gifts-container">
      <div className="image-section">
        <img
          src="https://macaronshop.ru/wp-content/uploads/2025/07/new.jpg"
          alt="Macaron gift box"
        />
      </div>

      <div className="text-section">
        <h1>{t("corgift.title")}</h1>
        <p>{t("corgift.description")}</p>

        <button
          onClick={() => {
            const link = document.createElement("a");
            link.href = documentPdf;
            link.download = "macaron_shop_catalog.pdf";
            link.click();
          }}
        >
          {t("corgift.download")}
        </button>

        <h3>{t("corgift.subtitle")}</h3>

        <div className="gift-options">
          <div>
            <img src={i1} alt="" />
            <span>{t("corgift.option1")}</span>
          </div>
          <div>
            <img src={i2} alt="" />
            <span>{t("corgift.option2")}</span>
          </div>
          <div>
            <img src={i4} alt="" />
            <span>{t("corgift.option3")}</span>
          </div>
          <div>
            <img src={i5} alt="" />
            <span>{t("corgift.option4")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CorGifts;
