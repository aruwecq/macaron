import React, { useState, useEffect } from "react";
import axios from "axios";
import { Eye, Edit, Trash } from "lucide-react";
import Card from "../../shared/components/Card/Card";
import Modal from "../../shared/components/Card/Input/Modal/Modal";
import Button from "../../shared/components/Button/Button";
import "./Orders.scss";

interface CartItem {
  id: string;  
  title: string;
  count: number;
  price: number;
}

interface Address {
  city: string;
  street: string;
  house: string;
  entrance: string;
  apartment: string;
}

interface Order {
  id: string;
  orderNumber: number;
  createdAt: string;
  phone: string;
  promo?: string;
  cartItems: CartItem[];
  subtotal: number;
  totalDelivery: number;
  total: number;
  address: Address;
  status?: "new" | "processing" | "delivered" | "cancelled";
}

const Orders: React.FC = () => {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<"view" | "edit">("view");
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const API_URL = "https://68da53f223ebc87faa2fbc11.mockapi.io/shopping";

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    try {
      const res = await axios.get(API_URL);
      setOrders(res.data);
    } catch (err) {
      console.error("Ошибка при загрузке заказов:", err);
    }
  };

  const statusLabels = {
    new: "Новый",
    processing: "В обработке",
    delivered: "Доставлен",
    cancelled: "Отменён",
  };

  /**
   * @param {typeof modalType} type - The type of the modal to open.
   * @param {Order} order - The order to display in the modal.
   */
  const openModal = (type: typeof modalType, order: Order) => {
    // Set the type of the modal
    setModalType(type);

    // Set the order to display in the modal
    setSelectedOrder(order);

    // Open the modal
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const updateOrderStatus = async (newStatus: Order["status"]) => {
    if (!selectedOrder) return;

    try {
      const updatedOrder = { ...selectedOrder, status: newStatus };
      await axios.put(`${API_URL}/${selectedOrder.id}`, updatedOrder);

      setOrders((prev) =>
        prev.map((o) => (o.id === selectedOrder.id ? updatedOrder : o))
      );

      closeModal();
    } catch (err) {
      console.error("Ошибка при обновлении заказа:", err);
    }
  };

  const deleteOrder = async (id: string) => {
    // if (!selectedOrder) return;
    try {
      await axios.delete(`${API_URL}/${id}`);
      setOrders((prev) => prev.filter((o) => o.id !== id));
      closeModal();
    } catch (err) {
      console.error("Ошибка при удалении заказа:", err);
    }
  }

  const renderOrderDetails = () => {
    if (!selectedOrder) return null;

    return (
      <div className="order-details">
        <div className="order-customer">
          <h4>Информация о клиенте</h4>
          <div className="customer-info">
            <p>
              <strong>Телефон:</strong> {selectedOrder.phone || "Не указан"}
            </p>
            <p>
              <strong>Адрес:</strong>{" "}
              {selectedOrder.address
                ? `${selectedOrder.address.city}, ${selectedOrder.address.street}, д. ${selectedOrder.address.house}, подъезд ${selectedOrder.address.entrance}, кв. ${selectedOrder.address.apartment}`
                : "Не указан"}
            </p>
            {selectedOrder.promo && (
              <p>
                <strong>Промокод:</strong> {selectedOrder.promo}
              </p>
            )}
          </div>
        </div>

        <div className="order-items">
          <h4>Товары в заказе</h4>
          <div className="items-list">
            {selectedOrder.cartItems.map((item) => (
              <div key={item.id} className="item-row">
                <span className="item-name">{item.title}</span>
                <span className="item-quantity">×{item.count}</span>
                <span className="item-price">₽{item.price * item.count}</span>
              </div>
            ))}
            <div className="total-row">
              <strong>Итого: ₽{selectedOrder.total}</strong>
            </div>
          </div>
        </div>

        {modalType === "edit" && (
          <div className="status-update">
            <h4>Изменить статус заказа</h4>
            <div className="status-buttons">
              {Object.entries(statusLabels).map(([status, label]) => (
                <Button
                  key={status}
                  variant={selectedOrder.status === status ? "primary" : "secondary"}
                  size="sm"
                  onClick={() => updateOrderStatus(status as Order["status"])}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderModalActions = () => {
    if (modalType === "view") {
      return <Button onClick={closeModal}>Закрыть</Button>;
    }
    return (
      <Button variant="secondary" onClick={closeModal}>
        Отмена
      </Button>
    );
  };

  return (
    <div className="orders fade-in">
      <div className="orders-header">
        <h2>🛒 Заказы</h2>
        <p>Управление заказами и отслеживание статусов</p>
      </div>

      <Card>
        <div className="orders-table">
          <div className="table-header">
            <div className="header-cell">Заказ</div>
            <div className="header-cell">Телефон</div>
            <div className="header-cell">Товаров</div>
            <div className="header-cell">Сумма</div>
            <div className="header-cell">Статус</div>
            <div className="header-cell">Дата</div>
            <div className="header-cell">Действия</div>
          </div>

      <div className="table-body">
  {orders.map((order) => (
    <div key={order.id} className="table-row">
      <div className="table-cell order-id">#{order.orderNumber}</div>
      <div className="table-cell">{order.phone || "Не указан"}</div>
      <div className="table-cell">
        {(order.cartItems ?? []).reduce((sum, item) => sum + (item.count || 0), 0)}
      </div>
      <div className="table-cell total">₽{order.total}</div>
      <div className="table-cell">
        <span className={`status-badge status-${order.status || "new"}`}>
          {order.status ? statusLabels[order.status] : "Новый"}
        </span>
      </div>
      <div className="table-cell">
        {new Date(order.createdAt).toLocaleDateString()}
      </div>
      <div className="table-cell actions">
        <button
          className="action-btn view"
          onClick={() => openModal("view", order)}
          title="Просмотр заказа"
        >
          <Eye size={16} />
        </button>
        <button
          className="action-btn edit"
          onClick={() => openModal("edit", order)}
          title="Редактировать заказ"
        >
          <Edit size={16} />
        </button>
        <button
          className="action-btn deleete"
          onClick={() => deleteOrder(order.id)}
          title="Удалить заказ"
        >
          <Trash size={16} />
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
        title={modalType === "view" ? "Просмотр заказа" : "Редактирование заказа"}
        actions={renderModalActions()}
      >
        {renderOrderDetails()}
      </Modal>
    </div>
  );
};

export default Orders; 