import React, { useEffect, useState } from "react";
import wedding from "../../assets/images/wedding.png";
import "./gift.css";
import { toast } from "react-toastify";
import axios from "axios";

function Gift() {
  const [products, setProducts] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    idea: "",
    rating: 0, // рейтинг
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    fetch("https://68ae8d71b91dfcdd62b979fb.mockapi.io/products")
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter(
          (item) => item.forEvent === "Свадебные предложения"
        );
        if (filtered.length > 0) {
          const oneProduct = filtered[0];
          const repeated = Array.from({ length: 9 }, (_, i) => ({
            ...oneProduct,
            id: `${oneProduct.id}-${i}`,
          }));
          setProducts(repeated);
        }
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
      alert("Не удалось отправить заявку 😔");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gift">
      {/* ==== 1. Жогорку блок ==== */}
      <div className="gift-all">
        <div className="gift-img">
          <img src={wedding} alt="" />
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
          <button>Презентация</button>
        </div>
      </div>

      {/* ==== 2. Карточки свадебных наборов ==== */}
      <section className="wedding">
        <h2 className="wedding-title">Наборы для свадьбы</h2>
        <div className="wedding-list">
          {products.map((product) => (
            <div className="wedding-card" key={product.id}>
              <div className="wedding-img">
                <img src={product.mainImage} alt={product.title} />
              </div>
              <div className="wedding-info">
                <h3>{product.title}</h3>
                <p>{product.descriptionShort}</p>
              </div>
              <div className="wedding-bottom">
                <span className="wedding-price">{product.price} руб</span>
                <button className="wedding-btn">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="M6 6h15l-1.5 9h-13z"></path>
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="19" cy="21" r="1"></circle>
                  </svg>
                  Купить
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ==== 3. Форма для отзывов и идей ==== */}
      <section className="idea">
        <div className="idea-container">
          <div className="idea-left"></div>
          <div className="idea-right">
            <h2>
              Мы открыты, чтобы вы могли написать свои отзывы и идеи
            </h2>
            <p>
              Каждое событие уникально и мы готовы предложить индивидуальные
              решения для Вашего мероприятия
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

              {/* Рейтинг */}
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
                Нажимая на кнопку “Оформить заказ” Я принимаю и соглашаюсь с
                Договором оферты и разрешаю обработку моих персональных данных в
                соответствии с <a href="#">Политикой конфиденциальности</a>
              </small>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Gift;
