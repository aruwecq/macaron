import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./SobratNabor.scss";
import { products } from "../../components/assemble/assembleSet/AssembleSet"; 

const macarons = [
  {
    id: 1,
    name: "Чёрная смородина",
    desc: "Яркий вкус с лёгкой кислинкой. Готовится из ягод смородины и белого шоколада.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/smorodina-macaron.png",
  },
  {
    id: 2,
    name: "Манго-маракуйя",
    desc: "Сладкое манго и ароматная маракуйя. Из спелых плодов.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/mango_marakuj.png",
  },
  {
    id: 3,
    name: "Шоколад-апельсин",
    desc: "Бельгийский шоколад, сливки и цедра апельсина.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/apelsin.png",
  },
  {
    id: 4,
    name: "Солёная карамель",
    desc: "Домашняя сливочная карамель, сливочное масло и немного знаменитой морской соли, чтобы подчеркнуть вкус.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_solenaya_karamel.png",
  },
  {
    id: 5,
    name: "Фисташка",
    desc: "Пожалуй, самый популярный, классический вкус. Ганаш из сливок, белого шоколада и свежеобжаренных фисташек.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron_fistashka.png",
  },
  {
    id: 6,
    name: "Лавандовый прованс",
    desc: "Лавандовые макаронс — одни из самых ярких и цветочных произведений. Приготовлено из французского шоколада.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/lavanda-1.png",
  },
  {
    id: 7,
    name: "Мята",
    desc: "Сочетание аристократического вкуса, радужной палитры цвета и утонченного мятно-миндального аромата.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/myata-macaron.png",
  },
  {
    id: 8,
    name: "Шоколад",
    desc: "Нежнейшее сочетание бельгийского шоколада и натуральных сливок. Устоять просто невозможно!",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/macaron-shokolad-1.png",
  },
  {
    id: 9,
    name: "Пряная вишня",
    desc: "Изысканный вишневый вкус, дополненный композицией специй: кардамона, мускатного ореха и корицы.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/07/vishnya-1.png",
  },
  {
    id: 10,
    name: "лимон",
    desc: "Чудесное сочетание лимона и белого шоколада. Кисло-сладкий привкус придаёт дополнительную вкусовую глубину.",
    img: "https://macaronshop.ru/wp-content/uploads/2021/08/limon-macaron.png",
  },
  {
    id: 11,
    name: "Ванильный пломбир",
    desc: "Классическое сочетание белого шоколада и ванили. Вкус макаронс особенно насыщенный и аутентичный.",
    img: "https://macaronshop.ru/wp-content/uploads/2022/04/vanil_-1.png",
  },
  {
    id: 12,
    name: "Бабл гам",
    desc: "Нежный сливочно-йогуртовый вкус и послевкусие жвачки Тутти Фрутти, обязательно придется по душе детям и взрослым.",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/babl-gam-macaron.png",
  }, {
    id: 13,
    name: "Лесной орех",
    desc: "Идеальное сочетание молочного шоколада и свежеобжаренного фундука. Имеет насыщенный шоколадно-ореховый вкус.",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/oreh.png",
  }, {
    id: 14,
    name: "Бабл гам",
    desc: "Нежный сливочно-йогуртовый вкус и послевкусие жвачки Тутти Фрутти, обязательно придется по душе детям и взрослым.",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/babl-gam-macaron.png",
  }, {
    id: 15,
    name: "Бодрящий капучино",
    desc: "Белый и молочный шоколад с добавлением 100% арабики. Имеет шоколадно-кофейный вкус и бодрящий аромат.",
    img: "https://macaronshop.ru/wp-content/uploads/2023/03/capuchino.png",
  },
];

function SobratNabor() {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    return <h2>Набор не найден</h2>;
  }

  const [counts, setCounts] = useState(
    macarons.reduce((acc, m) => ({ ...acc, [m.id]: 0 }), {})
  );

  const totalCount = Object.values(counts).reduce((a, b) => a + b, 0);
  const maxCount = product.count;
  const price = product.price;

  const handleChange = (id, delta) => {
    setCounts((prev) => {
      const newCount = Math.max(0, (prev[id] || 0) + delta);
      return { ...prev, [id]: newCount };
    });
  };

  const selectedMacarons = macarons.filter((m) => counts[m.id] > 0);

  return (
    <div className="sobrat-nabor">
      <div className="link">
        <Link to="/">Главная страница</Link> »
        <Link to="/assemble">Каталог наборов</Link> »
        <p className="ppp">{product.title}</p>
      </div>

      <h2 className="title">Выберите {maxCount} макаронс</h2>

      <div className="content">
        <div className="cards">
          {macarons.map((m) => (
            <div key={m.id} className="card">
              <img src={m.img} alt={m.name} />
              <h3>{m.name}</h3>
              <p>{m.desc}</p>
              <div className="counter">
                <button onClick={() => handleChange(m.id, -1)}>-</button>
                <span>{counts[m.id]}</span>
                <button onClick={() => handleChange(m.id, 1)}>+</button>
              </div>
            </div>
          ))}
        </div>

    <div className="sidebar">
  <p>
    {totalCount} из {maxCount} шт.{" "}
    <span className="price">{price} руб</span>
  </p>

  <ul>
    {selectedMacarons.map((m) => (
      <li key={m.id}>
        {m.name} — {counts[m.id]} шт.
      </li>
    ))}
  </ul>

  {totalCount !== maxCount && (
    <p className="warning">
      Для продолжения количество макарон должно равняться {maxCount} шт.
    </p>
  )}

  <button disabled={totalCount !== maxCount}>Далее</button>
</div>

      </div>
    </div>
  );
}

export default SobratNabor;
