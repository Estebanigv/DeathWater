import { createContext, useContext, useState, useCallback, ReactNode } from "react";

export type CartItem = {
  id: string;          // name + variant
  name: string;
  priceStr: string;    // "$990"
  price: number;       // 990
  img: string | null;
  variant: string;     // talla, color, cantidad seleccionada
  quantity: number;
};

type CartContextType = {
  items: CartItem[];
  cartOpen: boolean;
  setCartOpen: (open: boolean) => void;
  addItem: (item: Omit<CartItem, "id" | "quantity">) => void;
  removeItem: (id: string) => void;
  updateQty: (id: string, qty: number) => void;
  clearCart: () => void;
  totalItems: number;
  totalPrice: number;
};

const CartContext = createContext<CartContextType | null>(null);

// Parsea "$19.990" → 19990  (formato CLP)
const parseCLP = (str: string) => parseInt(str.replace(/\$|\./g, ""), 10);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);

  const addItem = useCallback((newItem: Omit<CartItem, "id" | "quantity">) => {
    const id = `${newItem.name}__${newItem.variant}`;
    setItems((prev) => {
      const exists = prev.find((i) => i.id === id);
      if (exists) {
        return prev.map((i) => i.id === id ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { ...newItem, id, quantity: 1 }];
    });
    setCartOpen(true);
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }, []);

  const updateQty = useCallback((id: string, qty: number) => {
    if (qty < 1) return;
    setItems((prev) => prev.map((i) => i.id === id ? { ...i, quantity: qty } : i));
  }, []);

  const clearCart = useCallback(() => setItems([]), []);

  const totalItems = items.reduce((sum, i) => sum + i.quantity, 0);
  const totalPrice = items.reduce((sum, i) => sum + i.price * i.quantity, 0);

  return (
    <CartContext.Provider value={{
      items, cartOpen, setCartOpen,
      addItem, removeItem, updateQty, clearCart,
      totalItems, totalPrice,
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
};

export { parseCLP };
