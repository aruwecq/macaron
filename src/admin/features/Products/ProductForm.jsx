import React, { useState } from "react";
import { Upload } from "lucide-react";
import Button from "../../shared/components/Button/Button";
import Input from "../../shared/components/Card/Input/Input";
import "./ProductForm.scss";
import axios from "axios";

const ProductForm = ({ product, onClose }) => {
  const [formData, setFormData] = useState({
    category: product?.category || "",
    name: product?.title || "",
    image: product?.mainImage || "",
    images: product?.images?.join(", ") || "",
    descriptionShort: product?.descriptionShort || "",
    descriptionLong: product?.descriptionLong || "",
    items: product?.items?.макарон?.toString() || "",
    flavors: product?.flavors?.join(", ") || "",
    price: product?.price?.toString() || "",
    ingredients: product?.ingredients?.join(", ") || "",
    energy: product?.nutrition?.energy || "",
    proteins: product?.nutrition?.proteins || "",
    fats: product?.nutrition?.fats || "",
    carbohydrates: product?.nutrition?.carbohydrates || "",
    conditions: product?.storage?.conditions || "",
    shelfLife: product?.storage?.shelfLife || "",
    forEvent: product?.forEvent || "",
    sellingType: product?.sellingType || "",
  });

  const [errors, setErrors] = useState({});

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Название обязательно";
    }
    if (!formData.price.trim()) {
      newErrors.price = "Цена обязательна";
    } else if (isNaN(Number(formData.price)) || Number(formData.price) <= 0) {
      newErrors.price = "Введите корректную цену";
    }
    if (!formData.ingredients.trim()) {
      newErrors.ingredients = "Состав обязателен";
    }
    if (!formData.energy.trim()) {
      newErrors.energy = "Энергетическая ценность обязательна";
    }
    if (!formData.shelfLife.trim()) {
      newErrors.shelfLife = "Срок хранения обязателен";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (validateForm()) {
      try {
        const payload = {
          category: formData.category,
          title: formData.name,
          mainImage: formData.image,
          images: formData.images
            ? formData.images.split(",").map((img) => img.trim())
            : [],
          descriptionShort: formData.descriptionShort,
          descriptionLong: formData.descriptionLong,
          items: { макарон: Number(formData.items) || 0 },
          flavors: formData.flavors
            ? formData.flavors.split(",").map((f) => f.trim())
            : [],
          price: Number(formData.price),
          ingredients: formData.ingredients
            ? formData.ingredients.split(",").map((i) => i.trim())
            : [],
          nutrition: {
            energy: formData.energy,
            proteins: formData.proteins,
            fats: formData.fats,
            carbohydrates: formData.carbohydrates,
          },
          storage: {
            conditions: formData.conditions,
            shelfLife: formData.shelfLife,
          },
          forEvent: formData.forEvent,
          sellingType: formData.sellingType,
        };

        let res;
        if (product) {
          res = await axios.put(
            `https://68ae8d71b91dfcdd62b979fb.mockapi.io/products/${product.id}`,
            payload
          );
        } else {
          res = await axios.post(
            "https://68ae8d71b91dfcdd62b979fb.mockapi.io/products",
            payload
          );
        }

        console.log("✅ Сохранено:", res.data);
        onClose();
      } catch (err) {
        console.error("❌ Ошибка при сохранении:", err);
      }
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
            onChange={(value) => updateFormData("name", value)}
            error={errors.name}
            required
          />

          <Input
            type="number"
            label="Цена (₽)"
            placeholder="150"
            value={formData.price}
            onChange={(value) => updateFormData("price", value)}
            error={errors.price}
            required
          />

          {/* Категория */}
          <div className="select-group">
            <label>Категория</label>
            <select
              value={formData.category}
              onChange={(e) => updateFormData("category", e.target.value)}
            >
              <option value="">Выберите категорию</option>
              <option value="macaron">Macaron</option>
              <option value="cake">Cake</option>
              <option value="gift">Gift</option>
            </select>
          </div>

          {/* Событие */}
          <div className="select-group">
            <label>Событие</label>
            <select
              value={formData.forEvent}
              onChange={(e) => updateFormData("forEvent", e.target.value)}
            >
              <option value="">Выберите событие</option>
              <option value="День рождения">День рождения</option>
              <option value="Свадьба">Свадьба</option>
              <option value="8 марта">8 марта</option>
              <option value="Новый год">Новый год</option>
            </select>
          </div>

          {/* Тип продажи */}
          <div className="select-group">
            <label>Тип продажи</label>
            <select
              value={formData.sellingType}
              onChange={(e) => updateFormData("sellingType", e.target.value)}
            >
              <option value="">Выберите тип</option>
              <option value="подарки">Подарки</option>
              <option value="коробки">Коробки</option>
              <option value="наборы">Наборы</option>
            </select>
          </div>
        </div>

        <div className="form-section">
          <h4>Фотографии</h4>
          <div className="image-upload">
            <div className="image-preview">
              {formData.image ? (
                <img src={formData.image} alt="Предпросмотр" />
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
              onClick={() =>
                updateFormData(
                  "image",
                  "https://images.pexels.com/photos/1070850/pexels-photo-1070850.jpeg?w=400"
                )
              }
            >
              Выбрать файл
            </Button>
          </div>
        </div>
      </div>

      <div className="form-section full-width">
        <h4>Описание и состав</h4>

        <Input
          label="Краткое описание"
          placeholder="16 макаронс для праздничного стола"
          value={formData.descriptionShort}
          onChange={(value) => updateFormData("descriptionShort", value)}
        />

        <div className="textarea-group">
          <label htmlFor="descriptionLong">Длинное описание</label>
          <textarea
            id="descriptionLong"
            placeholder="Полное описание набора"
            value={formData.descriptionLong}
            onChange={(e) => updateFormData("descriptionLong", e.target.value)}
            rows={3}
          />
        </div>

        <Input
          label="Количество макарон"
          placeholder="16"
          value={formData.items}
          onChange={(value) => updateFormData("items", value)}
        />

        <Input
          label="Вкусы (через запятую)"
          placeholder="Шоколад, Ваниль, Клубника"
          value={formData.flavors}
          onChange={(value) => updateFormData("flavors", value)}
        />

        <Input
          label="Ингредиенты (через запятую)"
          placeholder="Миндальная мука, сахарная пудра..."
          value={formData.ingredients}
          onChange={(value) => updateFormData("ingredients", value)}
          error={errors.ingredients}
          required
        />
      </div>

      <div className="form-section full-width">
        <h4>Пищевая ценность</h4>
        <Input
          label="Энергия"
          placeholder="380 ккал"
          value={formData.energy}
          onChange={(value) => updateFormData("energy", value)}
          error={errors.energy}
          required
        />
        <Input
          label="Белки"
          placeholder="7 г"
          value={formData.proteins}
          onChange={(value) => updateFormData("proteins", value)}
        />
        <Input
          label="Жиры"
          placeholder="17 г"
          value={formData.fats}
          onChange={(value) => updateFormData("fats", value)}
        />
        <Input
          label="Углеводы"
          placeholder="52 г"
          value={formData.carbohydrates}
          onChange={(value) => updateFormData("carbohydrates", value)}
        />
      </div>

      <div className="form-section full-width">
        <h4>Хранение</h4>
        <Input
          label="Условия хранения"
          placeholder="Хранить при t° +2…+6°C"
          value={formData.conditions}
          onChange={(value) => updateFormData("conditions", value)}
        />
        <Input
          label="Срок хранения"
          placeholder="120 часов"
          value={formData.shelfLife}
          onChange={(value) => updateFormData("shelfLife", value)}
          error={errors.shelfLife}
          required
        />
      </div>

      <div className="form-actions">
        <Button type="button" variant="secondary" onClick={onClose}>
          Отмена
        </Button>
        <Button type="submit">
          {product ? "Сохранить" : "Добавить продукт"}
        </Button>
      </div>
    </form>
  );
};

export default ProductForm;
