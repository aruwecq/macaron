import React, { useState } from "react";
import { Mail, Lock, User, Eye, EyeOff, User2Icon } from "lucide-react";
import { useAuth } from "../../../shared/components/context/AuthContext";
import Button from "../../../shared/components/Button/Button";
import Input from "../../../shared/components/Card/Input/Input";
import Card from "../../../shared/components/Card/Card";
import "./LoginPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const { setIsAuthenticated } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));

    // очищаем ошибку у конкретного поля при вводе
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.email) {
      newErrors.email = "Электронная почта обязательна";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Неверный формат email";
    }

    if (!formData.password) {
      newErrors.password = "Пароль обязателен";
    } else if (formData.password.length < 6) {
      newErrors.password = "Пароль должен быть не менее 6 символов";
    }

    if (isRegisterMode) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = "Подтверждение пароля обязательно";
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = "Пароли не совпадают";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      if (isRegisterMode) {
        // --- Регистрация ---
        const response = await axios.post(
          "https://68ae8d71b91dfcdd62b979fb.mockapi.io/users",
          {
            role:"client",
            username: formData.username,
            email: formData.email,
            password: formData.password,
          }
        );

        console.log("Зарегистрирован:", response.data);

        // сохраняем пользователя в localStorage
        localStorage.setItem("user", JSON.stringify(response.data));
        navigate("/")
        setIsAuthenticated(true);
      
      } else {
        // --- Логин ---
        const response = await axios.get(
          "https://68ae8d71b91dfcdd62b979fb.mockapi.io/users"
        );

        const user = response.data.find(
          (u) => u.email === formData.email && u.password === formData.password
        );

        if (user) {
          console.log("Успешный вход:", user);

          // сохраняем пользователя в localStorage
          localStorage.setItem("user", JSON.stringify(user));

          setIsAuthenticated(true);
          if (user.role === "admin") {
            navigate("/admin")
          }else{
            navigate("/")
          }
        } else {
          setErrors({ password: "Неверный email или пароль" });
        }
      }
    } catch (error) {
      console.error("Ошибка при запросе:", error);
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="brand">
            <div className="logo">🍬</div>
            <h1>Sweet Macarons</h1>
          </div>
        </div>

        <Card padding="lg">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="form-title">
              {isRegisterMode ? "Регистрация" : "Вход в систему"}
            </h2>

            <div className="form-fields">
              {isRegisterMode && (
                <div className="input-with-icon">
                  <User2Icon className="input-icon" size={20} />
                  <Input
                    type="text"
                    placeholder="Введите имя"
                    value={formData.username}
                    onChange={(value) => updateFormData("username", value)}
                    error={errors.username}
                    required
                  />
                </div>
              )}
              <div className="input-with-icon">
                <Mail className="input-icon" size={20} />
                <Input
                  type="email"
                  placeholder="Введите электронную почту"
                  // value={formData.email}
                  onChange={(value) => updateFormData("email", value)}
                  error={errors.email}
                  required
                />
              </div>

              <div className="input-with-icon">
                <Lock className="input-icon" size={20} />
                <Input
                  type={showPassword ? "text" : "password"}
                  placeholder="Введите пароль"
                  // value={formData.password}
                  onChange={(value) => updateFormData("password", value)}
                  error={errors.password}
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>

              {isRegisterMode && (
                <div className="input-with-icon">
                  <Lock className="input-icon" size={20} />
                  <Input
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Подтвердите пароль"
                    // value={formData.confirmPassword}
                    onChange={(value) =>
                      updateFormData("confirmPassword", value)
                    }
                    error={errors.confirmPassword}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff size={20} />
                    ) : (
                      <Eye size={20} />
                    )}
                  </button>
                </div>
              )}
            </div>

            <div className="form-actions">
              <Button type="submit" fullWidth size="lg">
                {isRegisterMode ? "Зарегистрироваться" : "Войти"}
              </Button>

              <button
                type="button"
                className="switch-mode"
                onClick={() => {
                  setIsRegisterMode(!isRegisterMode);
                  setErrors({});
                  setFormData({ email: "", password: "", confirmPassword: "" });
                }}
              >
                {isRegisterMode
                  ? "Уже есть аккаунт? Войти"
                  : "Нет аккаунта? Зарегистрироваться"}
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;
