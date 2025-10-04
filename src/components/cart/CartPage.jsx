import React from "react";
import { useCart } from "./CartContext";
import { Link } from "react-router-dom";
import "./CartPage.scss";

function CartPage() {
  const { cart, updateCount, removeFromCart, clearCart } = useCart();
  const deliveryBase = 499;

  const totalCount = cart.reduce((sum, item) => sum + (item.count || 1), 0);
  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * (item.count || 1),
    0
  );
  const totalDelivery = deliveryBase * totalCount;
  const total = subtotal + totalDelivery;

  console.log(cart);

  if (cart.length === 0) {
    return (
      <div className="cartEmpty">
        <h2>Корзина пуста</h2>
        <p>Но это никогда не поздно исправить 🙂</p>
        <Link to="/" className="backToShop">
          В каталог товаров
        </Link>
      </div>
    );
  }

  return (
    <div className="cartList">
      <div className="cartGrid">
        <div className="cartColLeft">
          <h3 className="cartSectionTitle">Корзина</h3>
          {cart.map((item) => (
            <div className="cartCard" key={item.id}>
              <div className="cartRow">
                <img
                  className="cartItemImg"
                  src={item.mainImage || item.image || item.img}
                  alt={item.title}
                />
                <div className="cartItemMain">
                  <div className="cartItemHead">
                    <div>
                      {item.type === "sobrat-nabor" ? (
                        <div className="cartItemTitle">
                          <h4>Nabor iz</h4>
                          {item.items.map((item, index) => (
                            <>
                            <span key={index}>{item.count} {item.name}</span> <br />
                            </>
                          ))}
                        </div>
                      ) : (
                        <p className="cartItemTitle">{item.title}</p>
                      )}
                      <p className="cartItemSub">{item.price} сом</p>
                    </div>
                    <div className="cartItemTotal">
                      {item.price * (item.count || 1)} сом
                    </div>
                  </div>
                  <div className="cartQty">
                    <button
                      type="button"
                      onClick={() => updateCount(item.id, -1)}
                    >
                      −
                    </button>
                    <span>{item.count || 1}</span>
                    <button
                      type="button"
                      onClick={() => updateCount(item.id, 1)}
                    >
                      +
                    </button>
                    <button
                      type="button"
                      className="cartRemoveBtn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      х
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <h3 className="cartSectionTitle">Доставка</h3>
          <div className="cartDeliveryCard">
            <div className="cartMap">
              <iframe
                src="https://yandex.com/map-widget/v1/?ll=74.585671%2C42.880350&z=16&l=map&pt=74.585671,42.880350,pm2rdm"
                width="625px"
                height="200px"
                frameBorder="0"
                allowFullScreen
                title="Yandex Map"
              ></iframe>
            </div>
            <div className="cartDeliveryRow">
              <div className="cartDeliveryLeft">
                <span>Доставка курьером</span>
              </div>
              <div className="cartDeliveryPrice">{totalDelivery} сом</div>
            </div>
          </div>
        </div>

        <aside className="cartRight">
          <div className="cartSummary">
            <div className="cartSummaryHead">
              <span>ИТОГО</span>
              <strong>{total} сом</strong>
            </div>
            <div className="cartSummaryRow">
              <span>Товаров</span>
              <span>{totalCount}</span>
            </div>
            <div className="cartSummaryRow">
              <span>Сумма</span>
              <span>{subtotal} сом</span>
            </div>
            <div className="cartSummaryRow">
              <span>Доставка</span>
              <span>{totalDelivery} сом</span>
            </div>
            <button className="cart-clear" onClick={clearCart}>
              Очистить корзину
            </button>
            <Link to="/auther" className="cartCheckoutBtn">
              Перейти к оформлению
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
}

export default CartPage;
