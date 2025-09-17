import React, { useEffect, useState } from "react";
import { Plus, Edit, Trash2, Eye } from "lucide-react";
import Button from "../../shared/components/Button/Button";
import Card from "../../shared/components/Card/Card";
import Modal from "../../shared/components/Card/Input/Modal/Modal";
import ProductForm from "./ProductForm";
import "./Products.scss";
import axios from "axios";

const Products = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("add");
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [product, setProduct] = useState([]);

  // npm install axios

  async function getProductsAxios() {
    try {
      const res = await axios.get(
        "https://68ae8d71b91dfcdd62b979fb.mockapi.io/products"
      );
      console.log("Products (axios):", res.data);
      setProduct(res.data);
      return res.data;
    } catch (error) {
      // Ошибка может быть сетевой или ответ с ошибкой
      if (error.response) {
        // Сервер вернул статус вне 2xx
        console.error(
          "Server error:",
          error.response.status,
          error.response.data
        );
      } else if (error.request) {
        // Запрос отправлен, но ответа нет
        console.error("No response received:", error.request);
      } else {
        // Другая ошибка
        console.error("Axios error:", error.message);
      }
      return null;
    }
  }

  useEffect(() => {
    getProductsAxios();
    // console.log(product);
  }, []);

  const openModal = (type, product) => {
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
      case "add":
      case "edit":
        return <ProductForm product={selectedProduct} onClose={closeModal} />;
      case "view":
        return selectedProduct ? (
          <div className="product-details">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              className="product-image-large"
            />
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

      case "delete":
        return (
          <div className="delete-confirmation">
            <p>
              Вы уверены, что хотите удалить продукт "{selectedProduct?.name}"?
            </p>
            <p className="warning">Это действие нельзя отменить.</p>
          </div>
        );

      default:
        return null;
    }
  };

  const renderModalActions = () => {
    switch (modalType) {
      case "delete":
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

      case "view":
        return <Button onClick={closeModal}>Закрыть</Button>;

      default:
        return null;
    }
  };

  const getModalTitle = () => {
    switch (modalType) {
      case "add":
        return "Добавить продукт";
      case "edit":
        return "Редактировать продукт";
      case "view":
        return "Просмотр продукта";
      case "delete":
        return "Удалить продукт?";
      default:
        return "";
    }
  };

  return (
    <div className="products-admin fade-in">
      <div className="products-header">
        <div>
          <h2>🍬 Продукты</h2>
          <p>Управление каталогом макаронс</p>
        </div>
        <Button onClick={() => openModal("add")}>
          <Plus size={20} />
          Добавить продукт
        </Button>
      </div>

      <div className="products-grid">
        {Array.isArray(product) &&
          [...product].reverse().map((product) => (
            <Card key={product.id} className="product-card" hover>
              <div className="product-image">
                <img src={product.mainImage} alt={product.title} />
                {/* <div className={`product-status ${product.inStock ? 'in-stock' : 'out-of-stock'}`}>
                {product.inStock ? 'В наличии' : 'Нет в наличии'}
              </div> */}
              </div>

              <div className="product-content">
                <h3>{product.title}</h3>
                <div className="product-meta">
                  <span className="flavor">{product.flavors}</span>
                  <span className="price">₽{product.price}</span>
                </div>

                <div className="product-actions">
                  <button
                    className="action-btn view"
                    onClick={() => openModal("view", product)}
                    title="Просмотр"
                  >
                    <Eye size={16} />
                  </button>
                  <button
                    className="action-btn edit"
                    onClick={() => openModal("edit", product)}
                    title="Редактировать"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="action-btn delete"
                    onClick={() => openModal("delete", product)}
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
