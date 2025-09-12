import React, { useState } from 'react';
import { AuthProvider } from '../shared/context/AuthContext';
import LoginPage from '../pages/LoginPage/LoginPage';
import DashboardPage from '../pages/DashboardPage/DashboardPage';
import './App.scss';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <div className="app">
      <AuthProvider value={{ isAuthenticated, setIsAuthenticated }}>
        {isAuthenticated ? <DashboardPage /> : <LoginPage />}
      </AuthProvider>
    </div>
  );
}

export default App;