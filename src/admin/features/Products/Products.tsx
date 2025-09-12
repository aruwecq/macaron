import React, { useState } from 'react';
import { Plus, Edit, Trash2, Eye } from 'lucide-react';
import Button from '../../shared/components/Button/Button';
import Card from '../../shared/components/Card/Card';
import Modal from '../../shared/components/Card/Input/Modal/Modal';
import ProductForm from './ProductForm';
import './Products.scss';

interface Product {
  id: string;
  name: string;
  image: string;
  flavor: string;
  price: number;
  composition: string;
  nutrition: string;
  shelfLife: string;
  inStock: boolean;
}

const Products: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'add' | 'edit' | 'delete' | 'view'>('add');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const products: Product[] = [
    {
      id: '1',
      name: 'Ванильные макаронс',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      flavor: 'Ваниль',
      price: 150,
      composition: 'Миндальная мука, сахарная пудра, белки, краситель, ванильный экстракт',
      nutrition: 'Калории: 120 ккал, Белки: 3г, Жиры: 5г, Углеводы: 18г',
      shelfLife: '7 дней',
      inStock: true
    },
    {
      id: '2',
      name: 'Шоколадные макаронс',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      flavor: 'Шоколад',
      price: 170,
      composition: 'Миндальная мука, сахарная пудра, белки, какао, темный шоколад',
      nutrition: 'Калории: 140 ккал, Белки: 4г, Жиры: 6г, Углеводы: 19г',
      shelfLife: '7 дней',
      inStock: true
    },
    {
      id: '3',
      name: 'Клубничные макаронс',
      image: 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400',
      flavor: 'Клубника',
      price: 160,
      composition: 'Миндальная мука, сахарная пудра, белки, клубничный порошок',
      nutrition: 'Калории: 125 ккал, Белки: 3г, Жиры: 5г, Углеводы: 20г',
      shelfLife: '5 дней',
      inStock: false
    }
  ];

  const openModal = (type: typeof modalType, product?: Product) => {
    setModalType(type);
    setSelectedProduct(product || null);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedProduct(null);
  };

  const renderModalContent = () => {
    switch (modalType) {
      case 'add':
      case 'edit':
        return <ProductForm product={selectedProduct} onClose={closeModal} />;
      
      case 'view':
        return selectedProduct ? (
          <div className="product-details">
            <img src={selectedProduct.image} alt={selectedProduct.name} className="product-image-large" />
            <div className="product-info">
              <h3>{selectedProduct.name}</h3>
              <div className="info-grid">
                <div className="info-item">
                  <span className="label">Вкус:</span>
                  <span>{selectedProduct.flavor}</span>
                </div>
                <div className="info-item">
                  <span className="label">Цена:</span>
                  <span>₽{selectedProduct.price}</span>
                </div>
                <div className="info-item">
                  <span className="label">Состав:</span>
                  <span>{selectedProduct.composition}</span>
                </div>
                <div className="info-item">
                  <span className="label">Пищевая ценность:</span>
                  <span>{selectedProduct.nutrition}</span>
                </div>
                <div className="info-item">
                  <span className="label">Срок хранения:</span>
                  <span>{selectedProduct.shelfLife}</span>
                </div>
              </div>
            </div>
          </div>
        ) : null;
      
      case 'delete':
        return (
          <div className="delete-confirmation">
            <p>Вы уверены, что хотите удалить продукт "{selectedProduct?.name}"?</p>
            <p className="warning">Это действие нельзя отменить.</p>
          </div>
        );
      
      default:
        return null;
    }
  };

  const renderModalActions = () => {
    switch (modalType) {
      case 'delete':
        return (
          <>
            <Button variant="secondary" onClick={closeModal}>
              Отмена
            </Button>
            <Button variant="danger" onClick={closeModal}>
              Да, удалить
            </Button>
          </>
        );
      
      case 'view':
        return (
          <Button onClick={closeModal}>
            Закрыть
          </Button>
        );
      
      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case 'add':
        return 'Добавить продукт';
      case 'edit':
        return 'Редактировать продукт';
      case 'view':
        return 'Просмотр продукта';
      case 'delete':
        return 'Удалить продукт?';
      default:
        return '';
    }
  };

  return (
    <div className="products fade-in">
      <div className="products-header">
        <div>
          <h2>🍬 Продукты</h2>
          <p>Управление каталогом макаронс</p>
        </div>
        <Button onClick={() => openModal('add')}>
          <Plus size={20} />
          Добавить продукт
        </Button>
      </div>

      <div className="products-grid">
        {products.map((product) => (
          <Card key={product.id} className="product-card" hover>
            <div className="product-image">
              <img src={product.image} alt={product.name} />
              <div className={`product-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </div>
            </div>
            
            <div className="product-content">
              <h3>{product.name}</h3>
              <div className="product-meta">
                <span className="flavor">{product.flavor}</span>
                <span className="price">₽{product.price}</span>
              </div>
              
              <div className="product-actions">
                <button 
                  className="action-btn view"
                  onClick={() => openModal('view', product)}
                  title="Просмотр"
                >
                  <Eye size={16} />
                </button>
                <button 
                  className="action-btn edit"
                  onClick={() => openModal('edit', product)}
                  title="Редактировать"
                >
                  <Edit size={16} />
                </button>
                <button 
                  className="action-btn delete"
                  onClick={() => openModal('delete', product)}
                  title="Удалить"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={closeModal}
        title={getModalTitle()}
        actions={renderModalActions()}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
};

export default Products;