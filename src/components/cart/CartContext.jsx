import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);


export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exist = prev.find((item) => item.id === product.id);
      if (exist) {
        return prev.map((item) =>
          item.id === product.id
            ? { ...item, count: (item.count || 1) + 1 }
            : item
        );
      } else {
        return [...prev, { ...product, count: 1 }];
      }
    });
  };

  const updateCount = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.id === id
            ? { ...item, count: Math.max(1, (item.count || 1) + delta) }
            : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const removeFromCart = (id) => setCart((prev) => prev.filter((item) => item.id !== id));
  const clearCart = () => setCart([]);

  const totalCount = cart.reduce((sum, item) => sum + (item.count || 1), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateCount, totalCount }}
    >
      {children}
    </CartContext.Provider>
  );
};
