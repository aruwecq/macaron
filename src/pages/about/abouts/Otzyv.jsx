import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styles/otzyv.scss";
import { useTranslation } from "react-i18next";

function Otzyv() {
  const { t } = useTranslation();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    idea: "",
    rating: 0,
  });
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    axios
      .get("https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron")
      .then((res) => {
        setReviews(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        "https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron",
        formData
      );
      setReviews((prev) => [...prev, res.data]);
      setFormData({ name: "", phone: "", idea: "", rating: 0 });
      setSuccess(true);
    } catch (err) {
      console.error(err);
      alert("Ошибка отправки отзыва 😔");
    }
  };

  return (
    <div className="otzyv-page">
      <h1 className="page-title">{t("otzyv.pageTitle")}</h1>
      <div className="war">
        <form className="review-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder={t("otzyv.form.name")}
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder={t("otzyv.form.phone")}
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <textarea
            name="idea"
            placeholder={t("otzyv.form.idea")}
            value={formData.idea}
            onChange={handleChange}
            required
          ></textarea>

          <div className="review-rating">
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

          <button type="submit">{t("otzyv.form.submit")}</button>
          {success && <p style={{ color: "green" }}>{t("otzyv.form.success")}</p>}
        </form>

        {loading ? (
          <p className="loading-text">{t("otzyv.loading")}</p>
        ) : reviews.length === 0 ? (
          <p className="empty-text">{t("otzyv.empty")}</p>
        ) : (
          <div className="reviews-list">
            {reviews
              .filter((review) => review.active)
              .map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-header">
                    <span className="review-author">{review.name}</span>
                    <span className="review-date">
                      {new Date(review.createdAt).toLocaleDateString()}
                    </span>
                  </div>
                  <p className="review-text">{review.idea}</p>

                  <div className="review-rating">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span
                        key={i}
                        className={i < review.rating ? "star filled" : "star"}
                      >
                        ★
                      </span>
                    ))}
                  </div>
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Otzyv;
