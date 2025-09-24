  import React, { useState } from "react";
  import "./Gallery.css";
  import { FaPlus, FaMinus } from "react-icons/fa";

  import img2 from "../../../assets/images/images1.png";
  import img1 from "../../../assets/images/images2.png";
  import img3 from "../../../assets/images/images3.png";
  import img4 from "../../../assets/images/images4.png";
  import img5 from "../../../assets/images/images5.png";
  import img6 from "../../../assets/images/images6.png";
  import img7 from "../../../assets/images/images7.png";
  import img8 from "../../../assets/images/images8.png";

  function Gallery() {
    const images = [img1, img2, img3, img4, img5, img6, img7, img8];
    const [counts, setCounts] = useState(Array(images.length).fill(0));

    const handleChange = (index, delta) => {
      setCounts((prev) =>
        prev.map((c, i) => (i === index ? Math.max(0, c + delta) : c))
      );
    };

    const total = counts.reduce((a, b) => a + b, 0);

    return (
      <div className="gallery">
        <div className="gallery-left">
          <div className="gallery-header">
            <span className="breadcrumb">Главная страница » Печенье с логотипом на заказ</span>
            <h2>Выберите изображения</h2>
            <p>Загрузите собственные изображения или выберите из нашей галереи</p>
            <select>
              <option>Темы</option>
              <option>Школа</option>
              <option>Праздники</option>
            </select>
          </div>

          <div className="gallery-grid">
            {images.map((src, index) => (
              <div key={index} className="gallery-item">
                <img src={src} alt={`img${index}`} />
                <div className="counter">
                  <button onClick={() => handleChange(index, -1)}><FaMinus /></button>
                  <span>{counts[index]}</span>
                  <button onClick={() => handleChange(index, 1)}><FaPlus /></button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="gallery-right">
          <div className="summary">
            <p>{total} из 12 шт</p>
          </div>
          <div className="upload-block">
            <button className="upload">Загрузить с компьютера</button>
            <button className="text-input">Ввести текст</button>
          </div>
          <p className="info">
            Для продолжения количество макарон должно равняться <strong>12 шт</strong>.<br />
            Вкусы макаронс можно будет указать в комментарии к заказу
          </p>
          <button className="next" disabled={total !== 12}>ДАЛЕЕ</button>
        </div>
      </div>
    );
  }

  export default Gallery;
