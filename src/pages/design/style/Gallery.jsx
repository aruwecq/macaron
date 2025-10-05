// import React, { useState } from "react";
// import "./Gallery.css";
// import { FaPlus, FaMinus } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// import img1 from "../../../assets/images/images2.png";
// import img2 from "../../../assets/images/images1.png";
// import img3 from "../../../assets/images/images3.png";
// import img4 from "../../../assets/images/images4.png";
// import img5 from "../../../assets/images/images5.png";
// import img6 from "../../../assets/images/images6.png";
// import img7 from "../../../assets/images/images7.png";
// import img8 from "../../../assets/images/images8.png";

// function Gallery() {
//   const navigate = useNavigate();

//   const images = [
//     { id: 1, src: img1, name: "колокольчик" },
//     { id: 2, src: img2, name: "рюкзак" },
//     { id: 3, src: img3, name: "класс" },
//     { id: 4, src: img4, name: "дети" },
//     { id: 5, src: img5, name: "пенал" },
//     { id: 6, src: img6, name: "книги" },
//     { id: 7, src: img7, name: "глобус" },
//     { id: 8, src: img8, name: "сова с книгой" },
//   ];

//   const [counts, setCounts] = useState(Array(images.length).fill(0));
//   const [showModal, setShowModal] = useState(false);
//   const maxCount = 12;
//   const total = counts.reduce((a, b) => a + b, 0);

//   const handleChange = (index, delta) => {
//     setCounts((prev) =>
//       prev.map((c, i) => (i === index ? Math.max(0, c + delta) : c))
//     );
//   };

//   const selectedMacarons = images
//     .map((img, index) => ({ ...img, count: counts[index] }))
//     .filter((m) => m.count > 0);

//   const handleNext = () => {
//     if (total === maxCount) {
//       setShowModal(true);
//     }
//   };

//   return (
//     <>
//       <div className="gallery">
//         <div className="gallery-left">
//           <div className="gallery-header">
//             <span className="breadcrumb">
//               Главная страница » Печенье с логотипом на заказ
//             </span>
//             <h2>Выберите изображения</h2>
//             <p>Загрузите собственные изображения или выберите из нашей галереи</p>
//             <select>
//               <option>Темы</option>
//               <option>Школа</option>
//               <option>Праздники</option>
//             </select>
//           </div>

//           <div className="gallery-grid">
//             {images.map((item, index) => (
//               <div key={item.id} className="gallery-item">
//                 <img src={item.src} alt={item.name} />
//                 <h4>{item.name}</h4>
//                 <div className="counter">
//                   <button onClick={() => handleChange(index, -1)}><FaMinus /></button>
//                   <span>{counts[index]}</span>
//                   <button onClick={() => handleChange(index, 1)}><FaPlus /></button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         <div className="gallery-right">
//           <div className="summary">
//             <p>{total} из {maxCount} шт</p>
//           </div>
//           <div className="upload-block">
//             <button className="upload">Загрузить с компьютера</button>
//             <button className="text-input">Ввести текст</button>
//           </div>
//           <p className="info">
//             Для продолжения количество макарон должно равняться <strong>{maxCount} шт</strong>.<br />
//             Вкусы макаронс можно будет указать в комментарии к заказу
//           </p>
//           <button className="next" disabled={total !== maxCount} onClick={handleNext}>
//             ДАЛЕЕ
//           </button>
//         </div>
//       </div>

//       {showModal && (
//         <div className="modal-overlay" onClick={() => setShowModal(false)}>
//           <div className="modal-content" onClick={(e) => e.stopPropagation()}>
//             <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
//             <h2>Вы выбрали набор макаронс!</h2>
//             <ul>
//               {selectedMacarons.map((m) => (
//                 <li key={m.id}>{m.name} — {m.count}</li>
//               ))}
//             </ul>
//             <div className="modal-buttons">
//               <button onClick={() => navigate("/")}> Домой</button>
//               <button onClick={() => navigate("/cart")}> Корзина</button>
//               <button onClick={() => navigate("/auther")}> Оформить</button>
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   );
// }

// export default Gallery;import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Gallery.css";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useCart } from "../../../components/cart/CartContext";
import { useState } from "react";
import img1 from "../../../assets/images/images2.png";
import img2 from "../../../assets/images/images1.png";
import img3 from "../../../assets/images/images3.png";
import img4 from "../../../assets/images/images4.png";
import img5 from "../../../assets/images/images5.png";
import img6 from "../../../assets/images/images6.png";
import img7 from "../../../assets/images/images7.png";
import img8 from "../../../assets/images/images8.png";

function Gallery() {
  const navigate = useNavigate();
  const { count } = useParams(); // получаем количество из URL
  const { addToCart } = useCart();

  const maxCount = Number(count) || 12;

  const images = [
    { id: 1, src: img1, name: "колокольчик", price: 120 },
    { id: 2, src: img2, name: "рюкзак", price: 120 },
    { id: 3, src: img3, name: "класс", price: 120 },
    { id: 4, src: img4, name: "дети", price: 120 },
    { id: 5, src: img5, name: "пенал", price: 120 },
    { id: 6, src: img6, name: "книги", price: 120 },
    { id: 7, src: img7, name: "глобус", price: 120 },
    { id: 8, src: img8, name: "сова с книгой", price: 120 },
  ];

  const [counts, setCounts] = useState({});
  const [showModal, setShowModal] = useState(false);

  const totalSelected = Object.values(counts).reduce((a, b) => a + b, 0);

  const handleAdd = (id) => {
    if (totalSelected < maxCount) {
      setCounts((prev) => ({
        ...prev,
        [id]: (prev[id] || 0) + 1,
      }));
    }
  };

  const handleRemove = (id) => {
    setCounts((prev) => {
      const newCounts = { ...prev };
      if (newCounts[id] > 0) newCounts[id] -= 1;
      return newCounts;
    });
  };

  const selectedItems = Object.entries(counts)
    .filter(([_, count]) => count > 0)
    .map(([id, count]) => ({
      ...images.find((m) => m.id === Number(id)),
      count,
    }));

  const handleAddToCart = () => {
    addToCart({
      id: Date.now(),
      title: `Набор из ${maxCount} макаронс`,
      price: selectedItems.reduce((sum, m) => sum + m.price * m.count, 0),
      count: 1,
      items: selectedItems,
      img: selectedItems[0]?.src,
      type: "gallery-set",
    });
    setShowModal(true);
  };

  return (
    <>
      <div className="gallery">
        <div className="gallery-left">
          <h2>Выберите изображения ({totalSelected} из {maxCount})</h2>
          <div className="gallery-grid">
            {images.map((item) => (
              <div key={item.id} className="gallery-item">
                <img src={item.src} alt={item.name} />
                <h4>{item.name}</h4>
                <div className="counter">
                  <button onClick={() => handleRemove(item.id)}><FaMinus /></button>
                  <span>{counts[item.id] || 0}</span>
                  <button onClick={() => handleAdd(item.id)}><FaPlus /></button>
                </div>
              </div>
            ))}
          </div>
        </div>
<div className="gallery-right">
  <div className="upload-block">
      <h2>({totalSelected} из {maxCount})</h2>
    <button className="upload">Загрузить с компьютера</button>
    <button className="text-input">Ввести текст</button>
  </div>

  <p className="info">
    Для продолжения количество макарон должно равняться <strong>{maxCount} шт</strong>.<br />
    Вкусы макаронс можно будет указать в комментарии к заказу
  </p>

  {/* ====== Текст с количеством внутри блока с кнопкой "ДАЛЕЕ" ====== */}
  <div className="next-block">
    <p>Выберите изображения ({totalSelected} из {maxCount})</p>
    <button
      className="next"
      disabled={totalSelected !== maxCount}
      onClick={handleAddToCart}
    >
      ДАЛЕЕ
    </button>
  </div>
</div>

      </div>

      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={() => setShowModal(false)}>×</button>
            <h2>Вы выбрали набор макаронс!</h2>
            <ul>
              {selectedItems.map((m) => (
                <li key={m.id}>{m.name} — {m.count}</li>
              ))}
            </ul>
            <div className="modal-buttons">
              <button onClick={() => navigate("/")}>Домой</button>
              <button onClick={() => navigate("/cart")}>Корзина</button>
              <button onClick={() => navigate("/auther")}>Оформить</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Gallery;
