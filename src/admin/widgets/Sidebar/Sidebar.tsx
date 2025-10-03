import React from 'react';
import { 
  BarChart3, 
  Package, 
  ShoppingCart, 
  Users, 
  Settings,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { FaCommentDots } from "react-icons/fa";
import './Sidebar.scss';

interface SidebarProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}

const menuItems = [
  { id: 'dashboard', label: 'Главная', icon: BarChart3, emoji: '📊' },
  { id: 'products', label: 'Продукты', icon: Package, emoji: '🍬' },
  { id: 'orders', label: 'Заказы', icon: ShoppingCart, emoji: '🛒' },
  { id: 'users', label: 'Пользователи', icon: Users, emoji: '👥' },
  { id: 'comments', label: 'Комментарии', icon: FaCommentDots, emoji: '💬' },
];

const Sidebar: React.FC<SidebarProps> = ({
  activeSection,
  setActiveSection,
  isOpen,
  onToggle
}) => {
  const handleSelect = (sectionId: string) => {
    setActiveSection(sectionId);
    localStorage.setItem("activeSection", sectionId); // ✅ сохраняем
  };

  return (
    <>
      <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
        <div className="sidebar-header">
          <div className="brand">
            <span className="brand-emoji">🍬</span>
            {isOpen && (
              <div className="brand-text">
                <h2>Sweet Macarons</h2>
                <p>Админ-панель</p>
              </div>
            )}
          </div>
          
          <button className="toggle-btn" onClick={onToggle}>
            {isOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
          </button>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => handleSelect(item.id)}
              >
                <span className="nav-emoji">{item.emoji}</span>
                <Icon size={20} className="nav-icon" />
                {isOpen && <span className="nav-label">{item.label}</span>}
              </button>
            );
          })}
        </nav>
      </div>
      
      {/* Mobile overlay */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`}
        onClick={onToggle}
      />
    </>
  );
};

export default Sidebar;
