import React from 'react';
import DashboardSection from '../../features/Dashboard/Dashboard';
import ProductsSection from '../../features/Products/Products';
import OrdersSection from '../../features/Orders/Orders';
import UsersSection from '../../features/Users/Users';
import SettingsSection from '../../features/Settings/Settings';
import './MainContent.scss';

const MainContent = ({ activeSection }) => {
  const renderSection = () => {
    switch (activeSection) {
      case 'dashboard':
        return <DashboardSection />;
      case 'products':
        return <ProductsSection />;
      case 'orders':
        return <OrdersSection />;
      case 'users':
        return <UsersSection />;
      case 'settings':
        return <SettingsSection />;
      default:
        return <DashboardSection />;
    }
  };

  return (
    <main className="main-content">
      <div className="content-container">
        {renderSection()}
      </div>
    </main>
  );
};

export default MainContent;