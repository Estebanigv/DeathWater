import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Droplets, Zap, Leaf, Award } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCart, parseCLP } from "@/context/CartContext";

type Product = {
  name: string;
  category: string;
  label: string;
  cal: string;
  price: string;
  description: string;
  img: string;
  pos: string;
  longDescription: string;
  details: string[];
  facts: { icon: React.ReactNode; label: string; value: string }[];
  quantity: string[];
};

const products: Product[] = [
  {
    name: "Tsunami Andino",
    category: "Sin Gas",
    label: "Agua Purificada",
    cal: "0 Cal · 500 ml",
    price: "$990",
    description: "Pura de los Andes. Sin burbujas, sin drama, sin plástico.",
    img: "/Image/Productos/DHsgs.webp",
    pos: "object-[center_30%]",
    longDescription:
      "Captada en las alturas de la cordillera andina y purificada por procesos naturales de filtración glaciar. Sin gas, sin aditivos, sin plástico. Solo agua en su estado más puro.",
    details: [
      "Agua purificada de origen andino",
      "Sin sodio · Sin calorías · Sin azúcar",
      "Lata de aluminio 100% reciclable",
      "pH neutro balanceado",
    ],
    facts: [
      { icon: <Droplets className="h-4 w-4" />, label: "Origen", value: "Cordillera Andina" },
      { icon: <Leaf className="h-4 w-4" />, label: "Envase", value: "Aluminio reciclable" },
      { icon: <Award className="h-4 w-4" />, label: "Pureza", value: "100% natural" },
      { icon: <Zap className="h-4 w-4" />, label: "Calorías", value: "0 kcal / 500ml" },
    ],
    quantity: ["1 lata", "6 pack", "12 pack", "24 pack"],
  },
  {
    name: "Avalancha",
    category: "Con Gas",
    label: "Agua Con Gas",
    cal: "0 Cal · 500 ml",
    price: "$990",
    description: "La misma pureza andina, pero con la fuerza de un aluvión en cada sorbo.",
    img: "/Image/Productos/DHcgs.webp",
    pos: "object-[center_30%]",
    longDescription:
      "La misma agua de los Andes, carbonatada con CO₂ de alta pureza. Burbujas finas y persistentes que desafían tu sed con la intensidad de una avalancha. Sin colorantes, sin azúcar, sin pretextos.",
    details: [
      "Agua carbonatada de origen andino",
      "CO₂ de alta pureza · Sin edulcorantes",
      "Lata de aluminio 100% reciclable",
      "Carbonatación fina y persistente",
    ],
    facts: [
      { icon: <Droplets className="h-4 w-4" />, label: "Origen", value: "Cordillera Andina" },
      { icon: <Leaf className="h-4 w-4" />, label: "Envase", value: "Aluminio reciclable" },
      { icon: <Award className="h-4 w-4" />, label: "Gas", value: "CO₂ alta pureza" },
      { icon: <Zap className="h-4 w-4" />, label: "Calorías", value: "0 kcal / 500ml" },
    ],
    quantity: ["1 lata", "6 pack", "12 pack", "24 pack"],
  },
];

const getMultiplier = (qty: string) => {
  const match = qty.match(/^(\d+)/);
  return match ? parseInt(match[1], 10) : 1;
};

const ProductsSection = () => {
  const [selected, setSelected] = useState<Product | null>(null);
  const [selectedQty, setSelectedQty] = useState<string>("");
  const { addItem } = useCart();

  const computedPrice = selected
    ? parseCLP(selected.price) * getMultiplier(selectedQty)
    : 0;

  const formatCLP = (n: number) => "$" + n.toLocaleString("es-CL");

  const handleAddToCart = (p: Product, qty: string) => {
    const total = parseCLP(p.price) * getMultiplier(qty);
    addItem({
      name: p.name,
      priceStr: formatCLP(total),
      price: total,
      img: p.img,
      variant: qty,
    });
  };

  const handleOpen = (p: Product) => {
    setSelected(p);
    setSelectedQty(p.quantity[0]);
  };

  const handleClose = () => setSelected(null);

  return (
    <section
      id="productos"
      aria-label="Nuestras Bebidas"
      className="section-divider py-16 xs:py-20 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 xs:mb-14 md:mb-16"
        >
          <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
            Colección
          </p>
          <h2
            className="font-display font-bold text-gold-gradient mb-4"
            style={{ fontSize: "clamp(1.75rem, 7vw, 3rem)" }}
          >
            Nuestras Bebidas
          </h2>
          <p className="font-body text-sm text-muted-foreground max-w-[40ch] mx-auto">
            Elige tu veneno favorito
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-8">
          {products.map((p, i) => (
            <motion.article
              key={p.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              onClick={() => handleOpen(p)}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${p.name} — ${p.price}`}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleOpen(p); } }}
              className="group bg-card border border-border hover:border-primary hover:glow-gold-sm transition-all duration-300 flex flex-col cursor-pointer"
            >
              {/* Image — shorter on mobile to fit without scrolling */}
              <div className="relative aspect-[4/3] xs:aspect-[3/4] overflow-hidden">
                <img
                  src={p.img}
                  alt={`${p.name} — ${p.label}`}
                  loading="lazy"
                  className={`w-full h-full object-cover ${p.pos} transition-transform duration-500 group-hover:scale-105`}
                />
                <span className="absolute top-3 left-3 xs:top-4 xs:left-4 font-heading text-[10px] uppercase tracking-[0.3em] bg-primary text-primary-foreground px-2.5 xs:px-3 py-0.5 xs:py-1">
                  {p.category}
                </span>
              </div>

              {/* Info */}
              <div className="p-4 xs:p-5 md:p-6 flex flex-col gap-3 flex-1">
                <div>
                  <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-1.5">
                    {p.label}
                  </p>
                  <h3 className="font-display text-lg xs:text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-200">
                    {p.name}
                  </h3>
                </div>

                <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
                  {p.description}
                </p>

                {/* Price row */}
                <div className="flex items-center justify-between pt-3 xs:pt-4 border-t border-border gap-2">
                  <div className="flex items-baseline gap-2 min-w-0">
                    <span className="font-heading text-xl xs:text-2xl font-bold text-foreground">
                      {p.price}
                    </span>
                    <span className="font-body text-xs text-muted-foreground hidden xs:inline">
                      {p.cal}
                    </span>
                  </div>
                  <button
                    aria-label={`Añadir ${p.name} al carrito`}
                    onClick={(e) => { e.stopPropagation(); handleAddToCart(p, "1 lata"); }}
                    className="btn-primary !py-2.5 !px-4 xs:!px-5 !text-[10px] shrink-0"
                  >
                    <ShoppingCart className="h-3.5 w-3.5" aria-hidden="true" />
                    Añadir
                  </button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Ficha de producto */}
      <Sheet open={!!selected} onOpenChange={(open) => !open && handleClose()}>
        <SheetContent
          side="right"
          className="w-full sm:max-w-xl md:max-w-3xl p-0 flex flex-col gap-0 overflow-hidden bg-card border-l border-border"
          aria-label={selected ? `Detalle de ${selected.name}` : "Detalle de producto"}
        >
          <AnimatePresence mode="wait">
            {selected && (
              <motion.div
                key={selected.name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }}
                className="flex flex-col h-full overflow-hidden"
              >
                {/* Imagen — siempre arriba */}
                <div className="relative w-full aspect-[4/3] overflow-hidden shrink-0">
                  <img
                    src={selected.img}
                    alt={selected.name}
                    className={`w-full h-full object-cover ${selected.pos}`}
                  />
                  <span className="absolute bottom-3 left-3 font-heading text-[9px] uppercase tracking-[0.35em] bg-primary text-primary-foreground px-3 py-1.5">
                    {selected.category}
                  </span>
                </div>

                {/* Info scrollable — debajo */}
                <div className="flex flex-col gap-4 xs:gap-5 p-5 md:p-7 overflow-y-auto flex-1">

                  {/* Nombre + precio */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="font-heading text-[9px] uppercase tracking-[0.4em] text-primary mb-1">
                        {selected.label}
                      </p>
                      <h2
                        className="font-display font-bold text-foreground leading-tight"
                        style={{ fontSize: "clamp(1.1rem, 5vw, 1.5rem)" }}
                      >
                        {selected.name}
                      </h2>
                    </div>
                    <div className="text-right shrink-0">
                      <span className="font-heading text-xl xs:text-2xl font-bold text-foreground">
                        {formatCLP(computedPrice)}
                      </span>
                      <p className="font-body text-[10px] text-muted-foreground">{selected.cal}</p>
                    </div>
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {selected.longDescription}
                  </p>

                  {/* Facts grid */}
                  <div className="grid grid-cols-2 gap-2">
                    {selected.facts.map((f) => (
                      <div key={f.label} className="flex items-center gap-2 xs:gap-3 border border-border p-2.5 xs:p-3">
                        <span className="text-primary shrink-0" aria-hidden="true">{f.icon}</span>
                        <div className="min-w-0">
                          <p className="font-heading text-[9px] uppercase tracking-wider text-muted-foreground">{f.label}</p>
                          <p className="font-heading text-xs font-bold text-foreground truncate">{f.value}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Cantidad */}
                  <div>
                    <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
                      Cantidad
                    </p>
                    <div className="flex flex-wrap gap-2" role="group" aria-label="Seleccionar cantidad">
                      {selected.quantity.map((q) => (
                        <button
                          key={q}
                          aria-pressed={selectedQty === q}
                          onClick={() => setSelectedQty(q)}
                          className={`px-3 xs:px-4 py-2 min-h-[44px] font-heading text-xs uppercase tracking-wider border transition-all duration-150 ${
                            selectedQty === q
                              ? "border-primary bg-primary text-primary-foreground shadow-[0_0_10px_hsl(43_72%_50%/0.35)]"
                              : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                          }`}
                        >
                          {q}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detalles */}
                  <div>
                    <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
                      Composición
                    </p>
                    <ul className="space-y-2.5" aria-label="Detalles del producto">
                      {selected.details.map((d) => (
                        <li key={d} className="flex items-center gap-3 font-body text-sm text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <button
                      onClick={() => { handleAddToCart(selected, selectedQty); handleClose(); }}
                      className="btn-primary w-full !py-4 !text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                      Añadir — {formatCLP(computedPrice)}
                    </button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default ProductsSection;
