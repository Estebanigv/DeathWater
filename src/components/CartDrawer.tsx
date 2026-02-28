import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Trash2, Plus, Minus, X } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const formatCLP = (n: number) =>
  "$" + n.toLocaleString("es-CL");

const CartDrawer = () => {
  const { items, cartOpen, setCartOpen, removeItem, updateQty, clearCart, totalItems, totalPrice } = useCart();

  return (
    <Sheet open={cartOpen} onOpenChange={setCartOpen}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col gap-0 bg-card border-l border-border"
        aria-label="Carrito de compras"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-border shrink-0">
          <div className="flex items-center gap-3">
            <ShoppingCart className="h-5 w-5 text-primary" aria-hidden="true" />
            <h2 className="font-heading text-base font-bold uppercase tracking-[0.2em] text-foreground">
              Carrito
            </h2>
            {totalItems > 0 && (
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                {totalItems}
              </span>
            )}
          </div>
          {items.length > 0 && (
            <button
              onClick={clearCart}
              className="font-body text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Vaciar carrito
            </button>
          )}
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto">
          <AnimatePresence initial={false}>
            {items.length === 0 ? (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex flex-col items-center justify-center h-full gap-4 py-24 px-6 text-center"
              >
                <ShoppingCart className="h-12 w-12 text-muted-foreground/20" aria-hidden="true" />
                <p className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground">
                  Tu carrito está vacío
                </p>
                <button
                  onClick={() => setCartOpen(false)}
                  className="btn-primary !text-[10px] !py-2.5 !px-6"
                >
                  Ver Productos
                </button>
              </motion.div>
            ) : (
              <ul className="divide-y divide-border">
                {items.map((item) => (
                  <motion.li
                    key={item.id}
                    layout
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 20, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="flex gap-4 p-5"
                  >
                    {/* Imagen */}
                    <div className="w-24 h-24 shrink-0 bg-muted overflow-hidden">
                      {item.img
                        ? <img src={item.img} alt={item.name} className="w-full h-full object-cover" />
                        : <div className="w-full h-full flex items-center justify-center">
                            <span className="font-display text-2xl text-muted-foreground/30">DW</span>
                          </div>
                      }
                    </div>

                    {/* Info */}
                    <div className="flex-1 min-w-0">
                      <p className="font-heading text-sm font-bold uppercase text-foreground truncate">
                        {item.name}
                      </p>
                      {item.variant && (
                        <p className="font-body text-xs text-muted-foreground mt-0.5 mb-2">
                          {item.variant}
                        </p>
                      )}
                      <p className="font-heading text-lg font-bold text-foreground">
                        {formatCLP(item.price * item.quantity)}
                      </p>

                      {/* Qty */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          aria-label="Reducir cantidad"
                          onClick={() => updateQty(item.id, item.quantity - 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Minus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                        <span className="font-heading text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          aria-label="Aumentar cantidad"
                          onClick={() => updateQty(item.id, item.quantity + 1)}
                          className="w-8 h-8 border border-border flex items-center justify-center hover:border-primary transition-colors"
                        >
                          <Plus className="h-3.5 w-3.5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    {/* Remove */}
                    <button
                      aria-label={`Eliminar ${item.name}`}
                      onClick={() => removeItem(item.id)}
                      className="shrink-0 text-muted-foreground hover:text-primary transition-colors p-1 mt-0.5"
                    >
                      <X className="h-5 w-5" aria-hidden="true" />
                    </button>
                  </motion.li>
                ))}
              </ul>
            )}
          </AnimatePresence>
        </div>

        {/* Footer con total y CTA */}
        {items.length > 0 && (
          <div className="shrink-0 border-t border-border px-6 py-5 flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <span className="font-heading text-sm uppercase tracking-[0.2em] text-muted-foreground">
                Subtotal
              </span>
              <span className="font-heading text-2xl font-bold text-foreground">
                {formatCLP(totalPrice)}
              </span>
            </div>
            <p className="font-body text-xs text-muted-foreground/60">
              Envío gratis sobre $50.000 · Calculado al finalizar
            </p>
            <button className="btn-primary w-full !py-4 !text-sm">
              Ir al Pago
            </button>
            <button
              onClick={() => setCartOpen(false)}
              className="font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors text-center py-1"
            >
              Seguir Comprando
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default CartDrawer;
