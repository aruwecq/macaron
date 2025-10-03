import React from 'react';
import { Menu, Bell, User, LogOut } from 'lucide-react';
import { useAuth } from '../../shared/components/context/AuthContext';
import Button from '../../shared/components/Button/Button';
import './Header.scss';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

interface HeaderProps {
  onToggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggleSidebar }) => {
  const { setIsAuthenticated } = useAuth();
  const navigate = useNavigate()

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("user")
    navigate("/")
    toast.success("Вы успешно вышли")
  };

  return (
    <header className="header">
      <div className="header-left">
        <button className="mobile-menu-btn" onClick={onToggleSidebar}>
          <Menu size={24} />
        </button>
        
        <div className="welcome">
          <h1>Добро пожаловать!</h1>
          <p>Управляйте вашим магазином макаронс</p>
        </div>
      </div>
      
      <div className="header-right">
        <button className="notification-btn">
          <Bell size={20} />
          <span className="notification-badge">3</span>
        </button>
        
        <div className="user-menu">
          <div className="user-avatar">
            <User size={20} />
          </div>
          <div className="user-info">
            <span className="user-name">Администратор</span>
            <span className="user-email">admin@admin.com</span>
          </div>
        </div>
        
        <Button variant="danger" size="sm" onClick={handleLogout}>
          <LogOut size={16} />
          Выйти
        </Button>
      </div>
    </header>
  );
};

export default Header;