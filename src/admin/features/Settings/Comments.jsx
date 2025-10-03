import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Comments.scss";

function Comments() {
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchComments = async () => {
    try {
      const res = await axios.get(
        "https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron"
      );
      setComments(res.data);
    } catch (err) {
      console.error("Ошибка загрузки комментариев:", err);
    } finally {
      setLoading(false);
    }
  };

  const deleteComment = async (id) => {
    if (!window.confirm("Удалить комментарий?")) return;
    try {
      await axios.delete(
        `https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron/${id}`
      );
      setComments((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error("Ошибка удаления:", err);
    }
  };

  const toggleComment = async (id, isActive) => {
    try {
      await axios.put(
        `https://68da53f223ebc87faa2fbc11.mockapi.io/comment-macacron/${id}`,
        { active: isActive }
      );
      setComments((prev) =>
        prev.map((c) => (c.id === id ? { ...c, active: isActive } : c))
      );
    } catch (err) {
      console.error("Ошибка изменения:", err);
    }
  };

  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <div className="comments-page">
      <h1>Комментарии пользователей</h1>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <div className="comments-list">
          {comments.length === 0 ? (
            <p>Комментариев пока нет 😔</p>
          ) : (
            comments.map((comment) => (
              <div key={comment.id} className="comment-card">
                <div className="comment-header">
                  <h3>{comment.name || "Без имени"}</h3>
                  <span>{comment.phone}</span>
                </div>
                <p className="comment-body">{comment.idea}</p>

                {/* Рейтинг */}
                <div className="comment-rating">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        comment.rating >= star ? "star filled" : "star"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <div className="btns-div">
                  <button
                    className={`edit-btn ${
                      comment.active ? "active-comment" : "notactive-comment"
                    }`}
                    onClick={() => toggleComment(comment.id, !comment.active)}
                  >
                    {comment.active ? "Выключить" : "Включить"}
                  </button>
                  <button
                    className="delete-btn"
                    onClick={() => deleteComment(comment.id)}
                  >
                    Удалить
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      )}
    </div>
  );
}

export default Comments;
