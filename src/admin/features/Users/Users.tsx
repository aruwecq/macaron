import React, { useState } from 'react';
import { Edit, UserPlus, Shield, User } from 'lucide-react';
import Card from '../../shared/components/Card/Card';
import Modal from '../../shared/components/Card/Input/Modal/Modal';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/Card/Input/Input';
import './Users.scss';

interface User {
  id: string;
  name: string;
  email: string;
  role: 'admin' | 'client';
  status: 'active' | 'inactive';
  registrationDate: string;
  lastLogin: string;
}

const Users: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit'>('add');
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    role: 'client' as 'admin' | 'client'
  });

  const users: User[] = [
    {
      id: '1',
      name: 'Анна Петрова',
      email: 'anna@example.com',
      role: 'client',
      status: 'active',
      registrationDate: '2024-01-10',
      lastLogin: '2024-01-15 14:30'
    },
    {
      id: '2',
      name: 'Михаил Сидоров',
      email: 'mikhail@example.com',
      role: 'client',
      status: 'active',
      registrationDate: '2024-01-08',
      lastLogin: '2024-01-14 16:45'
    },
    {
      id: '3',
      name: 'Екатерина Иванова',
      email: 'kate@example.com',
      role: 'admin',
      status: 'active',
      registrationDate: '2023-12-15',
      lastLogin: '2024-01-15 09:15'
    },
    {
      id: '4',
      name: 'Дмитрий Козлов',
      email: 'dmitry@example.com',
      role: 'client',
      status: 'inactive',
      registrationDate: '2024-01-05',
      lastLogin: '2024-01-12 11:20'
    }
  ];

  const roleLabels = {
    admin: 'Админ',
    client: 'Клиент'
  };

  const statusLabels = {
    active: 'Активен',
    inactive: 'Неактивен'
  };

  const openModal = (type: typeof modalType, user?: User) => {
    setModalType(type);
    setSelectedUser(user || null);
    
    if (user) {
      setFormData({
        name: user.name,
        email: user.email,
        role: user.role
      });
    } else {
      setFormData({
        name: '',
        email: '',
        role: 'client'
      });
    }
    
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({ name: '', email: '', role: 'client' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Здесь будет логика сохранения пользователя
    console.log('Сохранение пользователя:', formData);
    closeModal();
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const renderUserForm = () => (
    <form onSubmit={handleSubmit} className="user-form">
      <Input
        label="Имя пользователя"
        placeholder="Введите имя"
        value={formData.name}
        onChange={(value) => updateFormData('name', value)}
        required
      />

      <Input
        type="email"
        label="Email"
        placeholder="user@example.com"
        value={formData.email}
        onChange={(value) => updateFormData('email', value)}
        required
      />

      <div className="role-selection">
        <label>Роль пользователя *</label>
        <div className="role-options">
          <button
            type="button"
            className={`role-option ${formData.role === 'client' ? 'active' : ''}`}
            onClick={() => updateFormData('role', 'client')}
          >
            <User size={20} />
            <span>Клиент</span>
          </button>
          <button
            type="button"
            className={`role-option ${formData.role === 'admin' ? 'active' : ''}`}
            onClick={() => updateFormData('role', 'admin')}
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
          {modalType === 'edit' ? 'Сохранить' : 'Добавить пользователя'}
        </Button>
      </div>
    </form>
  );

  return (
    <div className="users fade-in">
      <div className="users-header">
        <div>
          <h2>👥 Пользователи</h2>
          <p>Управление пользователями системы</p>
        </div>
        <Button onClick={() => openModal('add')}>
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
            <div className="header-cell">Регистрация</div>
            <div className="header-cell">Последний вход</div>
            <div className="header-cell">Действия</div>
          </div>

          <div className="table-body">
            {users.map((user) => (
              <div key={user.id} className="table-row">
                <div className="table-cell">
                  <div className="user-info">
                    <div className="user-avatar">
                      {user.role === 'admin' ? <Shield size={16} /> : <User size={16} />}
                    </div>
                    <div className="user-details">
                      <div className="user-name">{user.name}</div>
                      <div className="user-id">ID: {user.id}</div>
                    </div>
                  </div>
                </div>
                <div className="table-cell email">{user.email}</div>
                <div className="table-cell">
                  <span className={`role-badge role-${user.role}`}>
                    {roleLabels[user.role]}
                  </span>
                </div>
                <div className="table-cell">
                  <span className={`status-badge status-${user.status}`}>
                    {statusLabels[user.status]}
                  </span>
                </div>
                <div className="table-cell date">{user.registrationDate}</div>
                <div className="table-cell date">{user.lastLogin}</div>
                <div className="table-cell actions">
                  <button
                    className="action-btn edit"
                    onClick={() => openModal('edit', user)}
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
        title={modalType === 'add' ? 'Добавить пользователя' : 'Редактирование пользователя'}
      >
        {renderUserForm()}
      </Modal>
    </div>
  );
};

export default Users;