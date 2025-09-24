import React, { useState, useEffect } from "react";
import { Edit, UserPlus, Shield, User } from "lucide-react";
import Card from "../../shared/components/Card/Card";
import Modal from "../../shared/components/Card/Input/Modal/Modal";
import Button from "../../shared/components/Button/Button";
import Input from "../../shared/components/Card/Input/Input";
import "./Users.scss";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedUser, setSelectedUser] = useState(null);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    role: "",
    status: "active",
  });

  // --- GET запрос к API ---
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const res = await fetch(
          "https://68ae8d71b91dfcdd62b979fb.mockapi.io/users"
        );
        if (!res.ok) throw new Error("Ошибка загрузки пользователей");
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  const roleLabels = {
    admin: "Админ",
    client: "user",
  };

  const statusLabels = {
    active: "Активен",
    inactive: "Неактивен",
  };

  const openModal = (type, user) => {
    setModalType(type);
    setSelectedUser(user || null);

    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role,
      });
    } else {
      setFormData({ name: "", email: "", role: "client" });
    }

    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({ name: "", email: "", role: "client" });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (modalType === "add") {
        // --- Добавление пользователя ---
        const res = await fetch(
          "https://68ae8d71b91dfcdd62b979fb.mockapi.io/users",
          {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!res.ok) throw new Error("Ошибка при добавлении пользователя");
        const newUser = await res.json();
        setUsers((prev) => [...prev, newUser]);
      } else if (modalType === "edit" && selectedUser) {
        // --- Обновление пользователя ---
        const res = await fetch(
          `https://68ae8d71b91dfcdd62b979fb.mockapi.io/users/${selectedUser.id}`,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
          }
        );

        if (!res.ok) throw new Error("Ошибка при обновлении пользователя");
        const updatedUser = await res.json();

        setUsers((prev) =>
          prev.map((u) => (u.id === selectedUser.id ? updatedUser : u))
        );
      }

      closeModal();
    } catch (err) {
      alert(err.message);
    }
  };

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const renderUserForm = () => (
    <form onSubmit={handleSubmit} className="user-form">
      <Input
        label="Имя пользователя"
        placeholder="Введите имя"
        value={formData.username}
        onChange={(value) => updateFormData("username", value)}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="user@example.com"
        value={formData.email}
        onChange={(value) => updateFormData("email", value)}
        required
      />

      <Input
        type="password"
        label="password"
        placeholder="Password"
        value={formData.password}
        onChange={(value) => updateFormData("password", value)}
        required
      />

      <div className="role-selection">
        <label>Роль пользователя *</label>
        <div className="role-options">
          <button
            type="button"
            className={`role-option ${
              formData.role === "client" ? "active" : ""
            }`}
            onClick={() => updateFormData("role", "client")}
          >
            <User size={20} />
            <span>Клиент</span>
          </button>
          <button
            type="button"
            className={`role-option ${
              formData.role === "admin" ? "active" : ""
            }`}
            onClick={() => updateFormData("role", "admin")}
          >
            <Shield size={20} />
            <span>Админ</span>
          </button>
        </div>
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={closeModal}>
          Отмена
        </Button>
        <Button type="submit">
          {modalType === "edit" ? "Сохранить" : "Добавить пользователя"}
        </Button>
      </div>
    </form>
  );

  if (loading) return <div>Загрузка...</div>;
  if (error) return <div style={{ color: "red" }}>Ошибка: {error}</div>;

  return (
    <div className="users fade-in">
      <div className="users-header">
        <div>
          <h2>👥 Пользователи</h2>
          <p>Управление пользователями системы</p>
        </div>
        <Button onClick={() => openModal("add")}>
          <UserPlus size={20} />
          Добавить пользователя
        </Button>
      </div>

      <Card>
        <div className="users-table">
          <div className="table-header">
            <div className="header-cell">Пользователь</div>
            <div className="header-cell">Email</div>
            <div className="header-cell">Роль</div>
            <div className="header-cell">Статус</div>
            <div className="header-cell">Действия</div>
          </div>

          <div className="table-body">
            {users.map((user) => (
              <div key={user.id} className="table-row">
                <div className="table-cell">
                  <div className="user-info">
                    <div className="user-avatar">
                      {user.role === "admin" ? (
                        <Shield size={16} />
                      ) : (
                        <User size={16} />
                      )}
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user.username}</div>
                      <div className="user-id">ID: {user.id}</div>
                    </div>
                  </div>
                </div>
                <div className="table-cell email">{user.email}</div>
                <div className="table-cell">
                  <span className={`role-badge role-${user.role}`}>
                    {user.role}
                  </span>
                </div>
                <div className="table-cell">
                  <span className={`status-badge status-${user.status}`}>
                    {user.status}
                  </span>
                </div>

                <div className="table-cell actions">
                  <button
                    className="action-btn edit"
                    onClick={() => openModal("edit", user)}
                    title="Редактировать пользователя"
                  >
                    <Edit size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Card>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={
          modalType === "add"
            ? "Добавить пользователя"
            : "Редактирование пользователя"
        }
      >
        {renderUserForm()}
      </Modal>
    </div>
  );
};

export default Users;
