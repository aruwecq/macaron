import React from "react";

export default function addProduct() {
  const renderModalContent = () => {
    return (
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
    );
  };
  return (
    <div>
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
}
