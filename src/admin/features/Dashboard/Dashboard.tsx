import React from 'react';
import { TrendingUp, Package, ShoppingCart, Users, Star } from 'lucide-react';
import Card from '../../shared/components/Card/Card';
import './Dashboard.scss';

const Dashboard: React.FC = () => {
  const stats = [
    { title: 'Общая выручка', value: '₽247,830', change: '+12%', icon: TrendingUp, color: 'success' },
    { title: 'Продукты', value: '47', change: '+3', icon: Package, color: 'info' },
    { title: 'Заказы', value: '1,247', change: '+18%', icon: ShoppingCart, color: 'warning' },
    { title: 'Пользователи', value: '892', change: '+25', icon: Users, color: 'pink' },
  ];

  const popularFlavors = [
    { name: 'Ванильный', sales: 345, color: '#FFB6C1' },
    { name: 'Шоколадный', sales: 287, color: '#8B4513' },
    { name: 'Клубничный', sales: 234, color: '#FF69B4' },
    { name: 'Лимонный', sales: 198, color: '#FFFF00' },
    { name: 'Лавандовый', sales: 156, color: '#E6E6FA' },
  ];

  const recentOrders = [
    { id: '#1247', customer: 'Анна Петрова', items: 12, total: '₽2,340', status: 'Новый' },
    { id: '#1246', customer: 'Михаил Сидоров', items: 8, total: '₽1,560', status: 'В обработке' },
    { id: '#1245', customer: 'Екатерина Иванова', items: 24, total: '₽4,680', status: 'Доставлен' },
    { id: '#1244', customer: 'Дмитрий Козлов', items: 6, total: '₽1,170', status: 'Новый' },
  ];

  return (
    <div className="dashboard fade-in">
      <div className="dashboard-header">
        <h2>📊 Главная панель</h2>
        <p>Общая статистика и аналитика продаж</p>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <Card key={index} hover className={`stat-card stat-card--${stat.color}`}>
              <div className="stat-content">
                <div className="stat-info">
                  <h3>{stat.title}</h3>
                  <div className="stat-value">{stat.value}</div>
                  <div className="stat-change positive">{stat.change}</div>
                </div>
                <div className="stat-icon">
                  <Icon size={32} />
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      <div className="dashboard-grid">
        {/* Popular Flavors */}
        <Card className="popular-flavors">
          <h3>🌟 Популярные вкусы</h3>
          <div className="flavors-list">
            {popularFlavors.map((flavor, index) => (
              <div key={index} className="flavor-item">
                <div className="flavor-info">
                  <div 
                    className="flavor-color" 
                    style={{ backgroundColor: flavor.color }}
                  />
                  <span className="flavor-name">{flavor.name}</span>
                </div>
                <div className="flavor-sales">
                  <span>{flavor.sales} продаж</span>
                  <div className="flavor-bar">
                    <div 
                      className="flavor-progress" 
                      style={{ 
                        width: `${(flavor.sales / 345) * 100}%`,
                        backgroundColor: flavor.color 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Recent Orders */}
        <Card className="recent-orders">
          <h3>📦 Последние заказы</h3>
          <div className="orders-list">
            {recentOrders.map((order, index) => (
              <div key={index} className="order-item">
                <div className="order-info">
                  <div className="order-id">{order.id}</div>
                  <div className="order-customer">{order.customer}</div>
                  <div className="order-details">
                    {order.items} товаров • {order.total}
                  </div>
                </div>
                <div className={`order-status status-${order.status.toLowerCase().replace(' ', '-')}`}>
                  {order.status}
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quick Actions */}
        <Card className="quick-actions">
          <h3>⚡ Быстрые действия</h3>
          <div className="actions-grid">
            <button className="action-btn">
              <Package size={24} />
              <span>Добавить продукт</span>
            </button>
            <button className="action-btn">
              <ShoppingCart size={24} />
              <span>Новый заказ</span>
            </button>
            <button className="action-btn">
              <Users size={24} />
              <span>Добавить пользователя</span>
            </button>
            <button className="action-btn">
              <Star size={24} />
              <span>Акции и скидки</span>
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;