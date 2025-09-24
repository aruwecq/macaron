import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SobratNabor.scss";

const macarons = [
  {
    id: 1,
    name: "Чёрная смородина",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/smorodina-macaron.png",
  },
  {
    id: 2,
    name: "Манго-маракуйя",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/mango_marakuj.png",
  },
  {
    id: 3,
    name: "Шоколад-апельсин",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/apelsin.png",
  },
  {
    id: 4,
    name: "Солёная карамель",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_solenaya_karamel.png",
  },
  {
    id: 5,
    name: "Фисташка",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_fistashka.png",
  },
  {
    id: 6,
    name: "Лавандовый прованс",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/lavanda-1.png",
  },
  {
    id: 7,
    name: "Мята",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/myata-macaron.png",
  },
  {
    id: 8,
    name: "Шоколад",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron-shokolad-1.png",
  },
  {
    id: 9,
    name: "Пряная вишня",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/vishnya-1.png",
  },
  {
    id: 10,
    name: "Лимон",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2021/08/limon-macaron.png",
  },
  {
    id: 11,
    name: "Ванильный пломбир",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2022/04/vanil_-1.png",
  },
  {
    id: 13,
    name: "Лесной орех",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/oreh.png",
  },
  {
    id: 14,
    name: "Бабл гам",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/babl-gam-macaron.png",
  },
  {
    id: 15,
    name: "Бодрящий капучино",
    price: 120,
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/capuchino.png",
  },
];

function SobratNabor() {
  const { id } = useParams(); // например, 6, 12, 24
  const maxCount = Number(id) || 6;

  const [counts, setCounts] = useState({}); // { macaronId: количество }

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
      if (newCounts[macaronId] > 0) {
        newCounts[macaronId] -= 1;
      }
      return newCounts;
    });
  };

  // создаём список выбранных с правильным количеством
  const selectedMacarons = Object.entries(counts)
    .filter(([_, count]) => count > 0)
    .map(([id, count]) => {
      const macaron = macarons.find((m) => m.id === Number(id));
      return { ...macaron, count };
    });

  return (
    <div className="sobrat-nabor">
      <div className="link">
        <Link to="/">Главная страница</Link> »{" "}
        <Link to="/assemble">Каталог наборов</Link> »{" "}
        <p className="ppp">{maxCount} шт.</p>
      </div>

      <h2 className="title">Выберите {maxCount} макаронс</h2>

      <div className="content">
        {/* Карточки */}
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

        {/* Сайдбар */}
        <div className="sidebar">
          <p>
            {totalSelected} от {maxCount} шт.
          </p>

          <ul>
            {selectedMacarons.map((m) => (
              <li key={m.id}>
                {m.name} — {m.count} шт.
              </li>
            ))}
          </ul>

          <button disabled={totalSelected < maxCount}>Далее</button>
        </div>
      </div>
    </div>
  );
}

export default SobratNabor;