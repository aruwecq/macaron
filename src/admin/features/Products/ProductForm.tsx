import React, { useState } from 'react';
import { Upload } from 'lucide-react';
import Button from '../../shared/components/Button/Button';
import Input from '../../shared/components/Card/Input/Input';
import './ProductForm.scss';

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

interface ProductFormProps {
  product?: Product | null;
  onClose: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    name: product?.name || '',
    flavor: product?.flavor || '',
    price: product?.price?.toString() || '',
    composition: product?.composition || '',
    nutrition: product?.nutrition || '',
    shelfLife: product?.shelfLife || '',
    image: product?.image || ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Название обязательно';
    }

    if (!formData.flavor.trim()) {
      newErrors.flavor = 'Вкус обязателен';
    }

    if (!formData.price.trim()) {
      newErrors.price = 'Цена обязательна';
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = 'Введите корректную цену';
    }

    if (!formData.composition.trim()) {
      newErrors.composition = 'Состав обязателен';
    }

    if (!formData.nutrition.trim()) {
      newErrors.nutrition = 'Пищевая ценность обязательна';
    }

    if (!formData.shelfLife.trim()) {
      newErrors.shelfLife = 'Срок хранения обязателен';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Здесь будет логика сохранения
      console.log('Сохранение продукта:', formData);
      onClose();
    }
  };

  return (
    <form onSubmit={handleSubmit} className="product-form">
      <div className="form-grid">
        <div className="form-section">
          <h4>Основная информация</h4>
          
          <Input
            label="Название макаронс"
            placeholder="Введите название макаронс"
            value={formData.name}
            onChange={(value) => updateFormData('name', value)}
            error={errors.name}
            required
          />

          <Input
            label="Вкус"
            placeholder="Например: Ваниль, Шоколад, Клубника"
            value={formData.flavor}
            onChange={(value) => updateFormData('flavor', value)}
            error={errors.flavor}
            required
          />

          <Input
            type="number"
            label="Цена (₽)"
            placeholder="150"
            value={formData.price}
            onChange={(value) => updateFormData('price', value)}
            error={errors.price}
            required
          />
        </div>

        <div className="form-section">
          <h4>Фотография</h4>
          
          <div className="image-upload">
            <div className="image-preview">
              {formData.image ? (
                <img src={formData.image} alt="Предварительный просмотр" />
              ) : (
                <div className="placeholder">
                  <Upload size={32} />
                  <p>Загрузите фото</p>
                  <span>JPG или PNG</span>
                </div>
              )}
            </div>
            
            <Button 
              type="button" 
              variant="secondary" 
              size="sm"
              onClick={() => {
                // Имитация загрузки изображения
                updateFormData('image', 'https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?auto=compress&cs=tinysrgb&w=400');
              }}
            >
              Выбрать файл
            </Button>
          </div>
        </div>
      </div>

      <div className="form-section full-width">
        <h4>Дополнительная информация</h4>
        
        <div className="textarea-group">
          <label htmlFor="composition">Состав *</label>
          <textarea
            id="composition"
            placeholder="Миндальная мука, сахарная пудра, белки..."
            value={formData.composition}
            onChange={(e) => updateFormData('composition', e.target.value)}
            className={errors.composition ? 'error' : ''}
            rows={3}
            required
          />
          {errors.composition && <span className="error-message">{errors.composition}</span>}
        </div>

        <div className="textarea-group">
          <label htmlFor="nutrition">Пищевая ценность *</label>
          <textarea
            id="nutrition"
            placeholder="Калории: 120 ккал, Белки: 3г, Жиры: 5г..."
            value={formData.nutrition}
            onChange={(e) => updateFormData('nutrition', e.target.value)}
            className={errors.nutrition ? 'error' : ''}
            rows={2}
            required
          />
          {errors.nutrition && <span className="error-message">{errors.nutrition}</span>}
        </div>

        <Input
          label="Срок хранения"
          placeholder="7 дней"
          value={formData.shelfLife}
          onChange={(value) => updateFormData('shelfLife', value)}
          error={errors.shelfLife}
          required
        />
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onClose}>
          Отмена
        </Button>
        <Button type="submit">
          {product ? 'Сохранить' : 'Добавить продукт'}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;