import React, { useState } from 'react';
import Sidebar from "../../../widgets/Sidebar/Sidebar"
import Header from '../../../widgets/Header/Header';
import MainContent from '../../../widgets/MainContent/MainContent';
import './DashboardPage.scss';

const DashboardPage: React.FC = () => {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="dashboard-page">
      <Sidebar 
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isOpen={isSidebarOpen}
        onToggle={() => setIsSidebarOpen(!isSidebarOpen)}
      />
      
      <div className={`main-area ${isSidebarOpen ? 'sidebar-open' : 'sidebar-closed'}`}>
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <MainContent activeSection={activeSection} />
      </div>
    </div>
  );
};

export default DashboardPage;