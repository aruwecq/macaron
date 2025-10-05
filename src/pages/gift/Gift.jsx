// import React, { useEffect, useState } from "react";
// import wedding from "../../assets/images/wedding.png";
// import "./gift.css";
// import Card from "../../components/card/Card"; // ✅ добавили импорт карточки
// import axios from "axios";
// import { toast } from "react-toastify";

// function Gift() {
//   const [products, setProducts] = useState([]);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//     idea: "",
//     rating: 0,
//   });
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   useEffect(() => {
//     fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
//       .then((res) => res.json())
//       .then((data) => {
//         const filtered = data.filter(
//           (item) => item.forEvent === "Свадебные предложения"
//         );
//         setProducts(filtered);
//       })
//       .catch((err) => console.log(err));
//   }, []);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     try {
//       await axios.post(
//         "https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron",
//         formData
//       );
//       setSuccess(true);
//       toast.success("Заявка успешно отправлена");
//       setFormData({ name: "", phone: "", idea: "", rating: 0 });
//     } catch (err) {
//       console.error("Ошибка:", err);
//       toast.error("Не удалось отправить заявку 😔");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="gift">
//       {/* ==== 1. Жогорку блок ==== */}
//       <div className="gift-all">
//         <div className="gift-img">
//           <img src={wedding} alt="wedding" />
//         </div>
//         <div className="text-gift">
//           <h1>
//             Оригинальные сладкие <br /> подарки на свадьбу
//           </h1>
//           <p>
//             Нежные пирожные макаронс с разными вкусами для <br />
//             украшения вашего свадебного торжества
//           </p>

//           <p>
//             <strong>100% натурально</strong> <br />
//             Только миндальная мука, фруктовое пюре, безопасные пищевые красители
//           </p>
//           <p>
//             <strong>Удобно</strong> <br />
//             Порционные угощения украсят и дополнят любой стол
//           </p>
//           <p>
//             <strong>Быстро</strong> <br />
//             Изготовим за 3 дня, доставим на мероприятие, собираем и сервируем
//             стол
//           </p>
//           <button>Презентация</button>
//         </div>
//       </div>

//       {/* ==== 2. Карточки свадебных наборов через компонент Card ==== */}
//       <section className="wedding">
//         <h2 className="wedding-title">Наборы для свадьбы</h2>
//         <div className="wedding-list">
//           {products.map((product) => (
//             <Card key={product.id} item={product} />
//           ))}
//         </div>
//       </section>

//       <section className="idea">
//         <div className="idea-container">
//           <div className="idea-left"></div>
//           <div className="idea-right">
//             <h2>Мы открыты, чтобы вы могли написать свои отзывы и идеи</h2>
//             <p>
//               Каждое событие уникально, и мы готовы предложить индивидуальные
//               решения для вашего мероприятия
//             </p>

//             <form className="idea-form" onSubmit={handleSubmit}>
//               <div className="form-row">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Укажите имя"
//                   value={formData.name}
//                   onChange={handleChange}
//                   required
//                 />
//                 <input
//                   type="tel"
//                   name="phone"
//                   placeholder="+7 (___) ___-__-__"
//                   value={formData.phone}
//                   onChange={handleChange}
//                   required
//                 />
//               </div>

//               <textarea
//                 name="idea"
//                 placeholder="Опишите Вашу идею"
//                 value={formData.idea}
//                 onChange={handleChange}
//               ></textarea>

//               <div className="rating">
//                 {[1, 2, 3, 4, 5].map((star) => (
//                   <span
//                     key={star}
//                     className={formData.rating >= star ? "star filled" : "star"}
//                     onClick={() =>
//                       setFormData((prev) => ({ ...prev, rating: star }))
//                     }
//                   >
//                     ★
//                   </span>
//                 ))}
//               </div>

//               <button type="submit" disabled={loading}>
//                 {loading ? "Отправка..." : "Отправить заявку"}
//               </button>

//               {success && (
//                 <p style={{ color: "green" }}>✅ Заявка успешно отправлена!</p>
//               )}

//               <small>
//                 Нажимая на кнопку “Оформить заказ”, я принимаю условия
//                 <a href="#"> Политики конфиденциальности</a>.
//               </small>
//             </form>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Gift;
import React, { useEffect, useState } from "react";
import wedding from "../../assets/images/wedding.png";
import "./gift.css";
import Card from "../../components/card/Card";
import axios from "axios";
import { toast } from "react-toastify";

function Gift() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    idea: "",
    rating: 0,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [showPresentation, setShowPresentation] = useState(false); // ✅ состояние для модалки

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.forEvent === "Свадебные предложения"
        );
        setProducts(filtered);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await axios.post(
        "https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron",
        formData
      );
      setSuccess(true);
      toast.success("Заявка успешно отправлена");
      setFormData({ name: "", phone: "", idea: "", rating: 0 });
    } catch (err) {
      console.error("Ошибка:", err);
      toast.error("Не удалось отправить заявку 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gift">
      {/* ==== 1. Жогорку блок ==== */}
      <div className="gift-all">
        <div className="gift-img">
          <img src={wedding} alt="wedding" />
        </div>
        <div className="text-gift">
          <h1>
            Оригинальные сладкие <br /> подарки на свадьбу
          </h1>
          <p>
            Нежные пирожные макаронс с разными вкусами для <br />
            украшения вашего свадебного торжества
          </p>

          <p>
            <strong>100% натурально</strong> <br />
            Только миндальная мука, фруктовое пюре, безопасные пищевые красители
          </p>
          <p>
            <strong>Удобно</strong> <br />
            Порционные угощения украсят и дополнят любой стол
          </p>
          <p>
            <strong>Быстро</strong> <br />
            Изготовим за 3 дня, доставим на мероприятие, собираем и сервируем
            стол
          </p>
          <button onClick={() => setShowPresentation(true)}>Презентация</button>
        </div>
      </div>

      {/* ==== 2. Карточки ==== */}
      <section className="wedding">
        <h2 className="wedding-title">Наборы для свадьбы</h2>
        <div className="wedding-list">
          {products.map((product) => (
            <Card key={product.id} item={product} />
          ))}
        </div>
      </section>

      {/* ==== 3. Форма ==== */}
      <section className="idea">
        <div className="idea-container">
          <div className="idea-left"></div>
          <div className="idea-right">
            <h2>Мы открыты, чтобы вы могли написать свои отзывы и идеи</h2>
            <p>
              Каждое событие уникально, и мы готовы предложить индивидуальные
              решения для вашего мероприятия
            </p>

            <form className="idea-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Укажите имя"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="+7 (___) ___-__-__"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <textarea
                name="idea"
                placeholder="Опишите Вашу идею"
                value={formData.idea}
                onChange={handleChange}
              ></textarea>

              <div className="rating">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={formData.rating >= star ? "star filled" : "star"}
                    onClick={() =>
                      setFormData((prev) => ({ ...prev, rating: star }))
                    }
                  >
                    ★
                  </span>
                ))}
              </div>

              <button type="submit" disabled={loading}>
                {loading ? "Отправка..." : "Отправить заявку"}
              </button>

              {success && (
                <p style={{ color: "green" }}>✅ Заявка успешно отправлена!</p>
              )}

              <small>
                Нажимая на кнопку “Оформить заказ”, я принимаю условия
                <a href="#"> Политики конфиденциальности</a>.
              </small>
            </form>
          </div>
        </div>
      </section>

      {/* ==== МОДАЛКА С ПРЕЗЕНТАЦИЕЙ ==== */}
     {showPresentation && (
  <div className="modal-overla" onClick={() => setShowPresentation(false)}>
    <div
      className="modal-content"
      onClick={(e) => e.stopPropagation()}
    >
      <button className="close-btn" onClick={() => setShowPresentation(false)}>
        ✖
      </button>

      <h2> Презентация свадебных подарков</h2>
      <p>
        Мы создаем эксклюзивные сладкие наборы для вашего праздника — макаронс,
        десерты и оформление в вашем стиле. Всё на 100% натуральное и с любовью 💕
      </p>

      <img
        src={wedding}
        alt="presentation"
        className="presentation-img"
      />

      <p>
        Наши подарочные наборы включают:
        <ul>
          <li> Классические макаронс — 10 вкусов;</li>
          <li> Индивидуальное оформление в цветах свадьбы;</li>
          <li> Мини-десерты и муссы с натуральными ингредиентами;</li>
          <li>Упаковку с вашим логотипом или именами молодожёнов.</li>
        </ul>
      </p>
<div className="gifftimg">
      <img
        src="https://balthazar.club/uploads/posts/2022-10/1666326037_3-balthazar-club-p-svadebnie-makaruni-krasivo-3.jpg"
        alt="набор"
        style={{
          width: "300px",
          height: "400px",
          borderRadius: "12px",
          margin: "20px 0"
        }}
      />

      <p>
        Мы также можем разработать уникальный дизайн и концепцию для вашего
        торжества — от сладкого стола до индивидуальных подарков для гостей.
      </p>
</div>
    

      <p>
        Свяжитесь с нами, чтобы обсудить идеи — мы с радостью сделаем ваш день
        по-настоящему сладким 
      </p>
    </div>
  </div>
)}

    </div>
  );
}

export default Gift;
