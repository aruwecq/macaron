import React, { useState } from 'react';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useAuth } from '../../../shared/components/context/AuthContext';
import Button from '../../../shared/components/Button/Button';
import Input from '../../../shared/components/Card/Input/Input';
import Card from '../../../shared/components/Card/Card';
import './LoginPage.scss';

const LoginPage = () => {
  const { setIsAuthenticated } = useAuth();
  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.email) {
      newErrors.email = 'Электронная почта обязательна';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Неверный формат email';
    }
    
    if (!formData.password) {
      newErrors.password = 'Пароль обязателен';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Пароль должен быть не менее 6 символов';
    }
    
    if (isRegisterMode) {
      if (!formData.confirmPassword) {
        newErrors.confirmPassword = 'Подтверждение пароля обязательно';
      } else if (formData.password !== formData.confirmPassword) {
        newErrors.confirmPassword = 'Пароли не совпадают';
      }
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Имитация API вызова
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1000);
    }
  };

  const updateFormData = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <div className="login-header">
          <div className="brand">
            <div className="logo">🍬</div>
            <h1>Sweet Macarons</h1>
            <p>Админ-панель</p>
          </div>
        </div>
        
        <Card padding="lg">
          <form onSubmit={handleSubmit} className="login-form">
            <h2 className="form-title">
              {isRegisterMode ? 'Регистрация' : 'Вход в систему'}
            </h2>
            
            <div className="form-fields">
              <div className="input-with-icon">
                <Mail className="input-icon" size={20} />
                <Input
                  type="email"
                  placeholder="Введите электронную почту"
                  value={formData.email}
                  onChange={(value) => updateFormData('email', value)}
                  error={errors.email}
                  required
                />
              </div>
              
              <div className="input-with-icon">
                <Lock className="input-icon" size={20} />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Введите пароль"
                  value={formData.password}
                  onChange={(value) => updateFormData('password', value)}
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
                    type={showConfirmPassword ? 'text' : 'password'}
                    placeholder="Подтвердите пароль"
                    value={formData.confirmPassword}
                    onChange={(value) => updateFormData('confirmPassword', value)}
                    error={errors.confirmPassword}
                    required
                  />
                  <button
                    type="button"
                    className="password-toggle"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              )}
            </div>
            
            <div className="form-actions">
              <Button type="submit" fullWidth size="lg">
                {isRegisterMode ? 'Зарегистрироваться' : 'Войти'}
              </Button>
              
              <button
                type="button"
                className="switch-mode"
                onClick={() => {
                  setIsRegisterMode(!isRegisterMode);
                  setErrors({});
                  setFormData({ email: '', password: '', confirmPassword: '' });
                }}
              >
                {isRegisterMode 
                  ? 'Уже есть аккаунт? Войти' 
                  : 'Нет аккаунта? Зарегистрироваться'
                }
              </button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
};

export default LoginPage;