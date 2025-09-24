import React from "react";
import Modal from "../../../../shared/components/Card/Input/Modal/Modal";

export default function AddProduct({isOpen, product, title, closeModal}) {
  
  const renderModalContent = () => {
    return (
      <div className="product-details">
        {/* <img
          src={product.image}
          alt={product.name}
          className="product-image-large"
        /> */}
        <div className="product-info">
          <h3>{product.name}</h3>
          <div className="info-grid">
            <div className="info-item">
              <span className="label">Вкус:</span>
              <span>{product.flavor}</span>
            </div>
            <div className="info-item">
              <span className="label">Цена:</span>
              <span>₽{product.price}</span>
            </div>
            <div className="info-item">
              <span className="label">Состав:</span>
              <span>{product.composition}</span>
            </div>
            <div className="info-item">
              <span className="label">Пищевая ценность:</span>
              <span>{product.nutrition}</span>
            </div>
            <div className="info-item">
              <span className="label">Срок хранения:</span>
              <span>{product.shelfLife}</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div>
      <Modal
        isOpen={isOpen}
        onClose={closeModal}
        title={title}
      >
        {renderModalContent()}
      </Modal>
    </div>
  );
}
