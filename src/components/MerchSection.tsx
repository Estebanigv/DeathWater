import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCart, parseCLP } from "@/context/CartContext";

type Variation = {
  label: string;
  options: string[];
};

type MerchItem = {
  name: string;
  price: string;
  type: string;
  img: string | null;
  description: string;
  details: string[];
  variation: Variation | null;
};

const merch: MerchItem[] = [
  {
    name: "Polera Mata Tu Sed",
    price: "$00000",
    type: "Polera",
    img: "/Image/Tienda/Polera Mata Tu Sed.webp",
    description:
      "Polera de algodón 100% con estampado de alta calidad. Corte regular unisex, ideal para el día a día.",
    details: [
      "100% algodón ring-spun",
      "Estampado serigráfico",
      "Corte regular unisex",
      "Lavado a máquina 30°C",
    ],
    variation: { label: "Talla", options: ["XS", "S", "M", "L", "XL", "XXL"] },
  },
  {
    name: "Cooler Calavera 2-Pack",
    price: "$00000",
    type: "Accesorio",
    img: "/Image/Tienda/Cooler Calavera 2-Pack.webp",
    description:
      "Pack de 2 coolers aislantes para lata de 500ml. Mantén tu Death Water fría donde vayas.",
    details: [
      "Pack de 2 unidades",
      "Neopreno aislante",
      "Para latas de 500ml",
      "Diseño Calavera exclusivo",
    ],
    variation: {
      label: "Cantidad",
      options: ["1 Pack (×2)", "2 Packs (×4)", "3 Packs (×6)"],
    },
  },
  {
    name: "Gorro Death Water",
    price: "$00000",
    type: "Gorro",
    img: "/Image/Tienda/Gorro Death Water.webp",
    description:
      "Gorro snapback con bordado frontal Death Water. Ajuste universal, estilo inconfundible.",
    details: [
      "Tela 100% algodón",
      "Bordado frontal en relieve",
      "Cierre snapback ajustable",
      "Talla única",
    ],
    variation: { label: "Color", options: ["Negro", "Negro/Dorado"] },
  },
  {
    name: "Vaso Térmico Andino",
    price: "$00000",
    type: "Drinkware",
    img: "/Image/Tienda/Vaso Térmico Andino.webp",
    description:
      "Vaso térmico de acero inoxidable con doble pared. Mantiene frío 24h y caliente 12h.",
    details: [
      "Acero inoxidable 18/8",
      "Doble pared al vacío",
      "Frío 24h / Caliente 12h",
      "Capacidad 500ml",
    ],
    variation: { label: "Color", options: ["Plata", "Negro Mate"] },
  },
  {
    name: "Hoodie Avalancha",
    price: "$00000",
    type: "Hoodie",
    img: "/Image/Tienda/Hoodie Avalancha.webp",
    description:
      "Hoodie de algodón pesado con estampado en la espalda. Para enfrentar la montaña o la ciudad.",
    details: [
      "Algodón 400g/m²",
      "Estampado espalda completa",
      "Bolsillo canguro",
      "Cordones planos",
    ],
    variation: { label: "Talla", options: ["XS", "S", "M", "L", "XL", "XXL"] },
  },
  {
    name: "Stickers Pack",
    price: "$00000",
    type: "Stickers",
    img: "/Image/Tienda/Stickers Pack.webp",
    description:
      "Pack de stickers vinilo premium con acabado mate. Resistentes al agua y al sol.",
    details: [
      "Vinilo de alta calidad",
      "Acabado mate UV",
      "Resistente al agua",
      "5 diseños exclusivos",
    ],
    variation: {
      label: "Cantidad",
      options: ["1 Pack (×5)", "2 Packs (×10)", "3 Packs (×15)"],
    },
  },
  {
    name: "Tote Bag Muerte al Plástico",
    price: "$00000",
    type: "Bolso",
    img: "/Image/Tienda/Tote Bag Muerte al Plástico.webp",
    description:
      "Tote bag de lona 100% algodón. El antídoto al plástico de un solo uso.",
    details: [
      "Lona 100% algodón",
      "Asas reforzadas",
      "Capacidad 15L",
      "Lavable a máquina",
    ],
    variation: null,
  },
  {
    name: "Llavero Calavera",
    price: "$00000",
    type: "Accesorio",
    img: "/Image/Tienda/Llavero Calavera.webp",
    description:
      "Llavero metálico con acabado bronce antiguo. Diseño calavera Death Water en relieve.",
    details: [
      "Zinc fundido a presión",
      "Acabado bronce antiguo",
      "Argolla acero inoxidable",
      "4.5 × 3 cm",
    ],
    variation: { label: "Cantidad", options: ["×1", "×2", "×3"] },
  },
];

const MerchSection = () => {
  const [selected, setSelected] = useState<MerchItem | null>(null);
  const [selectedVariant, setSelectedVariant] = useState<string>("");
  const { addItem } = useCart();

  const handleAddToCart = (m: MerchItem, variant: string) => {
    addItem({
      name: m.name,
      priceStr: m.price,
      price: parseCLP(m.price),
      img: m.img,
      variant,
    });
  };

  const handleOpen = (item: MerchItem) => {
    setSelected(item);
    setSelectedVariant(item.variation?.options[0] ?? "");
  };

  const handleClose = () => setSelected(null);

  return (
    <section
      id="merch"
      aria-label="Tienda de merchandising"
      className="section-divider py-16 xs:py-20 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 xs:mb-14"
        >
          <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
            Merchandising
          </p>
          <h2
            className="font-display font-bold text-gold-gradient mb-4"
            style={{ fontSize: "clamp(2rem, 8vw, 3.75rem)" }}
          >
            Tienda
          </h2>
          <p className="font-body text-sm text-muted-foreground">
            Viste como si no te importara (pero te importa)
          </p>
        </motion.div>

        {/* Grid — 2 col mobile, 4 col lg */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4 md:gap-5">
          {merch.map((m, i) => (
            <motion.article
              key={m.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: Math.min(i * 0.07, 0.5) }}
              onClick={() => handleOpen(m)}
              role="button"
              tabIndex={0}
              aria-label={`Ver ${m.name} — ${m.price}`}
              onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); handleOpen(m); } }}
              className="group bg-card border border-border hover:border-primary transition-all duration-300 p-2.5 xs:p-3 md:p-4 cursor-pointer hover:glow-gold-sm flex flex-col"
            >
              {/* Thumbnail */}
              <div className="aspect-square bg-muted mb-2.5 xs:mb-3 overflow-hidden">
                {m.img ? (
                  <img
                    src={m.img}
                    alt={m.name}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span
                      className="font-display text-4xl text-muted-foreground/30"
                      aria-hidden="true"
                    >
                      DW
                    </span>
                  </div>
                )}
              </div>

              {/* Meta */}
              <p className="font-heading text-[9px] text-muted-foreground uppercase tracking-widest mb-1">
                {m.type}
              </p>
              <h3 className="font-heading text-[11px] xs:text-xs md:text-sm font-bold uppercase text-foreground group-hover:text-primary transition-colors duration-200 mb-2 leading-tight line-clamp-2 flex-1">
                {m.name}
              </h3>

              {/* Price + button */}
              <div className="flex items-center justify-between gap-1.5 xs:gap-2 mt-2">
                <span className="font-heading text-sm xs:text-base md:text-lg font-bold text-foreground leading-none">
                  {m.price}
                </span>
                {/* Touch-target wrapper ensures 44px tap area even if button looks small */}
                <button
                  aria-label={`Añadir ${m.name} al carrito`}
                  onClick={(e) => { e.stopPropagation(); handleAddToCart(m, m.variation?.options[0] ?? ""); }}
                  className="touch-target bg-primary hover:opacity-90 active:scale-95 transition-all text-primary-foreground font-heading text-[9px] xs:text-[10px] uppercase tracking-wider px-2 xs:px-2.5"
                >
                  <ShoppingCart className="h-3 w-3 xs:h-3.5 xs:w-3.5 shrink-0" aria-hidden="true" />
                  <span className="ml-0.5 xs:ml-1">Añadir</span>
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Product sheet/drawer */}
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
                  {selected.img ? (
                    <img
                      src={selected.img}
                      alt={selected.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-muted flex items-center justify-center">
                      <span
                        className="font-display text-6xl text-muted-foreground/20"
                        aria-hidden="true"
                      >
                        DW
                      </span>
                    </div>
                  )}

                  {/* Type badge */}
                  <span className="absolute bottom-3 left-3 font-heading text-[9px] uppercase tracking-[0.35em] bg-primary text-primary-foreground px-3 py-1.5">
                    {selected.type}
                  </span>
                </div>

                {/* Scrollable info — columna derecha en desktop */}
                <div className="flex flex-col gap-4 xs:gap-5 p-5 md:p-7 overflow-y-auto flex-1">

                  {/* Name + price */}
                  <div className="flex items-start justify-between gap-3 xs:gap-4">
                    <h2
                      className="font-display font-bold text-foreground leading-tight flex-1"
                      style={{ fontSize: "clamp(1rem, 4.5vw, 1.5rem)" }}
                    >
                      {selected.name}
                    </h2>
                    <span className="font-heading text-lg xs:text-xl md:text-2xl font-bold text-foreground shrink-0">
                      {selected.price}
                    </span>
                  </div>

                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {selected.description}
                  </p>

                  {/* Variant selector */}
                  {selected.variation && (
                    <div>
                      <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
                        {selected.variation.label}
                      </p>
                      <div className="flex flex-wrap gap-2" role="group" aria-label={`Seleccionar ${selected.variation.label}`}>
                        {selected.variation.options.map((opt) => (
                          <button
                            key={opt}
                            aria-pressed={selectedVariant === opt}
                            onClick={() => setSelectedVariant(opt)}
                            className={`px-3 xs:px-4 py-2 min-h-[44px] font-heading text-xs uppercase tracking-wider border transition-all duration-150 ${
                              selectedVariant === opt
                                ? "border-primary bg-primary text-primary-foreground shadow-[0_0_10px_hsl(43_72%_50%/0.35)]"
                                : "border-border text-muted-foreground hover:border-primary/60 hover:text-foreground"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Details list */}
                  <div>
                    <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
                      Detalles
                    </p>
                    <ul className="space-y-2.5" aria-label="Especificaciones del producto">
                      {selected.details.map((d) => (
                        <li
                          key={d}
                          className="flex items-center gap-3 font-body text-sm text-muted-foreground"
                        >
                          <span
                            className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"
                            aria-hidden="true"
                          />
                          {d}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA — sticky at bottom */}
                  <div className="mt-auto pt-4 border-t border-border">
                    <button
                      onClick={() => { handleAddToCart(selected, selectedVariant); handleClose(); }}
                      className="btn-primary w-full !py-4 !text-sm"
                    >
                      <ShoppingCart className="h-4 w-4" aria-hidden="true" />
                      Añadir al Carrito
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

export default MerchSection;
