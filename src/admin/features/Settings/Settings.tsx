import React, { useState } from 'react';
import { Save, Upload, Palette, Mail, Phone, MapPin } from 'lucide-react';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/Card/Input/Input';
import Card from '../../shared/components/Card/Card';
import './Settings.scss';

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    logo: 'https://images.pexels.com/photos/6231884/pexels-photo-6231884.jpeg?auto=compress&cs=tinysrgb&w=100',
    brandName: 'Sweet Macarons',
    email: 'info@sweetmacarons.ru',
    phone: '+7 (999) 123-45-67',
    address: 'г. Москва, ул. Тверская, д. 15',
    primaryColor: '#FFB6C1',
    secondaryColor: '#98FB98',
    accentColor: '#F5F5DC'
  });

  const updateSetting = (key: string, value: string) => {
    setSettings(prev => ({ ...prev, [key]: value }));
  };

  const handleSave = () => {
    // Здесь будет логика сохранения настроек
    console.log('Сохранение настроек:', settings);
    alert('Настройки успешно сохранены!');
  };

  const handleLogoUpload = () => {
    // Имитация загрузки логотипа
    updateSetting('logo', 'https://images.pexels.com/photos/6231884/pexels-photo-6231884.jpeg?auto=compress&cs=tinysrgb&w=100');
  };

  return (
    <div className="settings fade-in">
      <div className="settings-header">
        <h2>⚙️ Настройки</h2>
        <p>Настройки системы и брендинга</p>
      </div>

      <div className="settings-grid">
        {/* Брендинг */}
        <Card className="branding-section">
          <h3>🎨 Брендинг</h3>
          
          <div className="logo-section">
            <label>Логотип</label>
            <div className="logo-upload">
              <div className="logo-preview">
                <img src={settings.logo} alt="Логотип" />
              </div>
              <Button 
                variant="secondary" 
                size="sm"
                onClick={handleLogoUpload}
              >
                <Upload size={16} />
                Загрузить логотип
              </Button>
            </div>
          </div>

          <Input
            label="Название бренда"
            value={settings.brandName}
            onChange={(value) => updateSetting('brandName', value)}
          />

          <div className="color-section">
            <h4>Цветовая палитра</h4>
            <div className="color-inputs">
              <div className="color-input">
                <label>Основной цвет</label>
                <div className="color-picker">
                  <input
                    type="color"
                    value={settings.primaryColor}
                    onChange={(e) => updateSetting('primaryColor', e.target.value)}
                  />
                  <span>{settings.primaryColor}</span>
                </div>
              </div>
              
              <div className="color-input">
                <label>Вторичный цвет</label>
                <div className="color-picker">
                  <input
                    type="color"
                    value={settings.secondaryColor}
                    onChange={(e) => updateSetting('secondaryColor', e.target.value)}
                  />
                  <span>{settings.secondaryColor}</span>
                </div>
              </div>
              
              <div className="color-input">
                <label>Акцентный цвет</label>
                <div className="color-picker">
                  <input
                    type="color"
                    value={settings.accentColor}
                    onChange={(e) => updateSetting('accentColor', e.target.value)}
                  />
                  <span>{settings.accentColor}</span>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Контакты */}
        <Card className="contacts-section">
          <h3>📞 Контактная информация</h3>
          
          <div className="contact-field">
            <Mail className="field-icon" size={20} />
            <Input
              label="Email"
              type="email"
              value={settings.email}
              onChange={(value) => updateSetting('email', value)}
            />
          </div>

          <div className="contact-field">
            <Phone className="field-icon" size={20} />
            <Input
              label="Телефон"
              type="tel"
              value={settings.phone}
              onChange={(value) => updateSetting('phone', value)}
            />
          </div>

          <div className="contact-field">
            <MapPin className="field-icon" size={20} />
            <Input
              label="Адрес"
              value={settings.address}
              onChange={(value) => updateSetting('address', value)}
            />
          </div>
        </Card>

        {/* Предварительный просмотр */}
        <Card className="preview-section">
          <h3>👀 Предварительный просмотр</h3>
          
          <div className="preview-container">
            <div 
              className="preview-header"
              style={{
                background: `linear-gradient(135deg, ${settings.primaryColor} 0%, ${settings.secondaryColor} 100%)`
              }}
            >
              <div className="preview-logo">
                <img src={settings.logo} alt="Логотип" />
                <span>{settings.brandName}</span>
              </div>
            </div>
            
            <div className="preview-content">
              <div className="preview-card" style={{ borderColor: settings.primaryColor }}>
                <h4>Пример карточки продукта</h4>
                <p>Ванильные макаронс</p>
                <div 
                  className="preview-button"
                  style={{ backgroundColor: settings.primaryColor }}
                >
                  Добавить в корзину
                </div>
              </div>
              
              <div className="preview-info">
                <h4>Контакты</h4>
                <p>📧 {settings.email}</p>
                <p>📞 {settings.phone}</p>
                <p>📍 {settings.address}</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Системные настройки */}
        <Card className="system-section">
          <h3>🔧 Системные настройки</h3>
          
          <div className="system-options">
            <div className="system-option">
              <input type="checkbox" id="notifications" defaultChecked />
              <label htmlFor="notifications">Email уведомления о новых заказах</label>
            </div>
            
            <div className="system-option">
              <input type="checkbox" id="analytics" defaultChecked />
              <label htmlFor="analytics">Сбор аналитики</label>
            </div>
            
            <div className="system-option">
              <input type="checkbox" id="backups" defaultChecked />
              <label htmlFor="backups">Автоматическое резервное копирование</label>
            </div>
            
            <div className="system-option">
              <input type="checkbox" id="maintenance" />
              <label htmlFor="maintenance">Режим обслуживания</label>
            </div>
          </div>
        </Card>
      </div>

      <div className="settings-actions">
        <Button onClick={handleSave} size="lg">
          <Save size={20} />
          Сохранить настройки
        </Button>
      </div>
    </div>
  );
};

export default Settings;