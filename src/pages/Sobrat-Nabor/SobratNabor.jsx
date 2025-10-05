// import React, { useState } from "react";
// import { useParams, Link, useNavigate } from "react-router-dom";
// import "./SobratNabor.scss";
// import { useTranslation } from "react-i18next";
// import { useCart } from "../../components/cart/CartContext";

// const macarons = [
//   {
//     id: 1,
//     name: "Чёрная смородина",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/smorodina-macaron.png",
//   },
//   {
//     id: 2,
//     name: "Манго-маракуйя",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/mango_marakuj.png",
//   },
//   {
//     id: 3,
//     name: "Шоколад-апельсин",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/apelsin.png",
//   },
//   {
//     id: 4,
//     name: "Солёная карамель",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_solenaya_karamel.png",
//   },
//   {
//     id: 5,
//     name: "Фисташка",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_fistashka.png",
//   },
//   {
//     id: 6,
//     name: "Лавандовый прованс",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/lavanda-1.png",
//   },
//   {
//     id: 7,
//     name: "Мята",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/myata-macaron.png",
//   },
//   {
//     id: 8,
//     name: "Шоколад",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron-shokolad-1.png",
//   },
//   {
//     id: 9,
//     name: "Пряная вишня",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/07/vishnya-1.png",
//   },
//   {
//     id: 10,
//     name: "Лимон",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2021/08/limon-macaron.png",
//   },
//   {
//     id: 11,
//     name: "Ванильный пломбир",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2022/04/vanil_-1.png",
//   },
//   {
//     id: 13,
//     name: "Лесной орех",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2023/03/oreh.png",
//   },
//   {
//     id: 14,
//     name: "Бабл гам",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2023/03/babl-gam-macaron.png",
//   },
//   {
//     id: 15,
//     name: "Бодрящий капучино",
//     price: 120,
//     img: "https://macaronshop.ru/wp-content/uploads/2023/03/capuchino.png",
//   },
// ];

// function SobratNabor() {
//   const { t } = useTranslation();
//   const { id } = useParams();
//   const { addToCart } = useCart();
//   const navigate = useNavigate();

//   const maxCount = Number(id) || 6;
//   const [counts, setCounts] = useState({});
//   const [showModal, setShowModal] = useState(false);

//   const totalSelected = Object.values(counts).reduce((a, b) => a + b, 0);

//   const handleAdd = (macaronId) => {
//     if (totalSelected < maxCount) {
//       setCounts((prev) => ({
//         ...prev,
//         [macaronId]: (prev[macaronId] || 0) + 1,
//       }));
//     }
//   };

//   const handleRemove = (macaronId) => {
//     setCounts((prev) => {
//       const newCounts = { ...prev };
//       if (newCounts[macaronId] > 0) newCounts[macaronId] -= 1;
//       return newCounts;
//     });
//   };

//   const selectedMacarons = Object.entries(counts)
//     .filter(([_, count]) => count > 0)
//     .map(([id, count]) => ({
//       ...macarons.find((m) => m.id === Number(id)),
//       count,
//     }));

//   const handleNext = () => {
//     addToCart({
//       id: Date.now(),
//       title: `${t("assemble.set_from")} ${maxCount} ${t(
//         "assemble.macaron_plural"
//       )}`,
//       price: selectedMacarons.reduce((sum, m) => sum + m.price * m.count, 0),
//       count: 1,
//       items: selectedMacarons,
//       img: selectedMacarons[0].img,
//       type: "sobrat-nabor",
//     });
//     navigate("/cart");
//   };

//   return (
//     <>
//       <div className="sobrat-nabor">
//         <div className="link">
//           <Link to="/">{t("sobratNabor.breadcrumbHome")}</Link> »
//           <Link to="/assemble">{t("sobratNabor.breadcrumbCatalog")}</Link> »
//           <p className="ppp">{maxCount} шт.</p>
//         </div>

//         <h2 className="title">{t("sobratNabor.title", { maxCount })}</h2>

//         <div className="content">
//           <div className="cards">
//             {macarons.map((m) => (
//               <div key={m.id} className="card">
//                 <img src={m.img} alt={m.name} />
//                 <h3>{m.name}</h3>
//                 <div className="counter">
//                   <button onClick={() => handleRemove(m.id)}>-</button>
//                   <span>{counts[m.id] || 0}</span>
//                   <button onClick={() => handleAdd(m.id)}>+</button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="sidebar">
//             <p>
//               {t("sobratNabor.totalSelected", {
//                 selected: totalSelected,
//                 max: maxCount,
//               })}
//             </p>

//             <ul>
//               {selectedMacarons.map((m) => (
//                 <li key={m.id}>
//                   {m.name} — {m.count}
//                 </li>
//               ))}
//             </ul>

//             <button
//               disabled={totalSelected < maxCount}
//               onClick={() => setShowModal(true)}
//             >
//               {t("sobratNabor.nextBtn")}
//             </button>
//           </div>
//         </div>
//       </div>
//       {showModal && (
//         <div className="modal-overlay" onClick={() => setShowModal(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setShowModal(false)}>
//               ×
//             </button>
//             <h2>{t("modal.done_title")}</h2>
//             <p>{t("modal.done_text", { count: maxCount })}</p>

//             <ul className="modal-list">
//               {selectedMacarons.map((m) => (
//                 <li key={m.id}>
//                   {m.name} — {m.count}
//                 </li>
//               ))}
//             </ul>

//             <div className="modal-buttons">
//               <button onClick={() => navigate("/")}>
//                 {" "}
//                 {t("modal.to_home")}
//               </button>
//               <button onClick={() => handleNext()}>
//                 🛒 {t("modal.to_cart")}
//               </button>
//               <button onClick={() => navigate("/auther")}>
//                 {" "}
//                 {t("modal.to_checkout")}
//               </button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default SobratNabor;
import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./SobratNabor.scss";
import { useTranslation } from "react-i18next";
import { useCart } from "../../components/cart/CartContext";

const useMacarons = () => {
  const { t } = useTranslation();

  return [
    { id: 1, name: t("nabormacaron.1"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/smorodina-macaron.png" },
    { id: 2, name: t("nabormacaron.2"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/mango_marakuj.png" },
    { id: 3, name: t("nabormacaron.3"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/apelsin.png" },
    { id: 4, name: t("nabormacaron.4"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_solenaya_karamel.png" },
    { id: 5, name: t("nabormacaron.5"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_fistashka.png" },
    { id: 6, name: t("nabormacaron.6"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/lavanda-1.png" },
    { id: 7, name: t("nabormacaron.7"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/myata-macaron.png" },
    { id: 8, name: t("nabormacaron.8"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron-shokolad-1.png" },
    { id: 9, name: t("nabormacaron.9"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/07/vishnya-1.png" },
    { id: 10, name: t("nabormacaron.10"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2021/08/limon-macaron.png" },
    { id: 11, name: t("nabormacaron.11"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2022/04/vanil_-1.png" },
    { id: 13, name: t("nabormacaron.13"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2023/03/oreh.png" },
    { id: 14, name: t("nabormacaron.14"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2023/03/babl-gam-macaron.png" },
    { id: 15, name: t("nabormacaron.15"), price: 120, img: "https://macaronshop.ru/wp-content/uploads/2023/03/capuchino.png" },
  ];
};

function SobratNabor() {
  const { t } = useTranslation();
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const macarons = useMacarons();

  const maxCount = Number(id) || 6;
  const [counts, setCounts] = useState({});
  const [showModal, setShowModal] = useState(false);

  const totalSelected = Object.values(counts).reduce((a, b) => a + b, 0);

  const handleAdd = (macaronId) => {
    if (totalSelected < maxCount) {
      setCounts((prev) => ({
        ...prev,
        [macaronId]: (prev[macaronId] || 0) + 1,
      }));
    }
  };

  const handleRemove = (macaronId) => {
    setCounts((prev) => {
      const newCounts = { ...prev };
      if (newCounts[macaronId] > 0) newCounts[macaronId] -= 1;
      return newCounts;
    });
  };

  const selectedMacarons = Object.entries(counts)
    .filter(([_, count]) => count > 0)
    .map(([id, count]) => ({
      ...macarons.find((m) => m.id === Number(id)),
      count,
    }));

  const handleAddToCart = () => {
    addToCart({
      id: Date.now(),
      title: `${t("assemble.set_from")} ${maxCount} ${t("assemble.macaron_plural")}`,
      price: selectedMacarons.reduce((sum, m) => sum + m.price * m.count, 0),
      count: 1,
      items: selectedMacarons,
      img: selectedMacarons[0]?.img,
      type: "sobrat-nabor",
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="sobrat-nabor">
        <div className="link">
          <Link to="/">{t("sobratNabor.breadcrumbHome")}</Link> »
          <Link to="/assemble">{t("sobratNabor.breadcrumbCatalog")}</Link> »
          <p className="ppp">{maxCount} шт.</p>
        </div>

        <h2 className="title">{t("sobratNabor.title", { maxCount })}</h2>

        <div className="content">
          <div className="cards">
            {macarons.map((m) => (
              <div key={m.id} className="card">
                <img src={m.img} alt={m.name} />
                <h3>{m.name}</h3>
                <div className="counter">
                  <button onClick={() => handleRemove(m.id)}>-</button>
                  <span>{counts[m.id] || 0}</span>
                  <button onClick={() => handleAdd(m.id)}>+</button>
                </div>
              </div>
            ))}
          </div>

          <div className="sidebar">
            <p>
              {t("sobratNabor.totalSelected", {
                selected: totalSelected,
                max: maxCount,
              })}
            </p>

            <ul>
              {selectedMacarons.map((m) => (
                <li key={m.id}>
                  {m.name} — {m.count}
                </li>
              ))}
            </ul>

            <button disabled={totalSelected < maxCount} onClick={handleAddToCart}>
              {t("sobratNabor.nextBtn")}
            </button>
          </div>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>
              ×
            </button>
            <h2>{t("modal.done_title")}</h2>
            <p>{t("modal.done_text", { count: maxCount })}</p>

            <ul className="modal-list">
              {selectedMacarons.map((m) => (
                <li key={m.id}>
                  {m.name} — {m.count}
                </li>
              ))}
            </ul>

            <div className="modal-buttons">
              <button onClick={() => navigate("/")}> {t("modal.to_home")}</button>
              <button onClick={() => navigate("/cart")}>{t("modal.to_cart")}</button>
              <button onClick={() => navigate("/auther")}>{t("modal.to_checkout")}</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SobratNabor;
