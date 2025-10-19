import { createContext, useContext, useEffect, useMemo, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState(() => {
    try {
      const raw = localStorage.getItem("cart_items");
      return raw ? JSON.parse(raw) : [];
    } catch (e) {
      // Si falla la lectura, parte con carrito vacío y registra el aviso
      console.warn("No se pudo leer cart_items desde localStorage:", e);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem("cart_items", JSON.stringify(items));
    } catch (e) {
      // Si falla la escritura, solo avisa
      console.warn("No se pudo guardar cart_items en localStorage:", e);
    }
  }, [items]);

  const addItem = (product, qty = 1) => {
    setItems(prev => {
      const i = prev.findIndex(p => p.id === product.id);
      if (i !== -1) {
        const copy = [...prev];
        copy[i] = { ...copy[i], qty: copy[i].qty + qty };
        return copy;
      }
      return [...prev, { ...product, qty }];
    });
  };

  const inc = id => setItems(prev => prev.map(p => (p.id === id ? { ...p, qty: p.qty + 1 } : p)));
  const dec = id =>
    setItems(prev =>
      prev
        .map(p => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter(p => p.qty > 0)
    );
  const removeItem = id => setItems(prev => prev.filter(p => p.id !== id));
  const clear = () => setItems([]);

  const total = useMemo(
    () => items.reduce((acc, p) => acc + (Number(p.price) || 0) * (Number(p.qty) || 0), 0),
    [items]
  );

  const value = { items, addItem, inc, dec, removeItem, clear, total };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside <CartProvider>");
  return ctx;
};
