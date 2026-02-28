import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Valentina R.",
    location: "Santiago",
    rating: 5,
    text: "Nunca pensé que el agua podía ser tan buena. La sin gas tiene un sabor limpio que no tiene ninguna botella de plástico. Además me siento bien comprándola.",
    product: "Tsunami Andino",
  },
  {
    name: "Matías C.",
    location: "Valparaíso",
    rating: 5,
    text: "La con gas es brutal. Las burbujas son finas y duran. La llevo a todos lados en la mochila. Ya no compro agua en botella, punto.",
    product: "Avalancha",
  },
  {
    name: "Camila S.",
    location: "Concepción",
    rating: 5,
    text: "El diseño es lo primero que me llamó la atención, pero el sabor me convenció para siempre. La mejor agua que he tomado en Chile sin dudas.",
    product: "Tsunami Andino",
  },
  {
    name: "Diego F.",
    location: "Vitacura",
    rating: 5,
    text: "La pedí para la oficina y ahora todos mis colegas la quieren. Ya somos un equipo sin botellas de plástico. Death Water nos cambió el chip.",
    product: "Pack Mixto",
  },
  {
    name: "Fernanda M.",
    location: "Las Condes",
    rating: 5,
    text: "Me encanta la propuesta. Agua andina pura en lata reciclable, sin drama. El Hoodie también está increíble, lo pedí y llegó perfecto.",
    product: "Hoodie + Bebidas",
  },
  {
    name: "Sebastián T.",
    location: "Providencia",
    rating: 5,
    text: "Tiene más sentido tomar agua en lata que en plástico. Y encima sabe mejor. El envío llegó rápido y bien embalado. 100% recomendado.",
    product: "Avalancha",
  },
];

const Stars = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {Array.from({ length: count }).map((_, i) => (
      <Star key={i} className="h-3.5 w-3.5 fill-primary text-primary" aria-hidden="true" />
    ))}
  </div>
);

const TestimonialsSection = () => (
  <section
    aria-label="Testimonios de clientes"
    className="section-divider py-20 md:py-24 bg-secondary"
  >
    <div className="mx-auto max-w-7xl px-4 md:px-6">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
          Clientes
        </p>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-4">
          Lo Que Dicen
        </h2>
        <p className="font-body text-sm text-muted-foreground max-w-[40ch] mx-auto">
          Gente real que dejó el plástico atrás
        </p>
      </motion.div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: Math.min(i * 0.08, 0.4) }}
            className="bg-card border border-border p-6 flex flex-col gap-4 hover:border-primary transition-colors duration-300"
          >
            <Stars count={t.rating} />

            <p className="font-body text-sm text-muted-foreground leading-relaxed flex-1">
              "{t.text}"
            </p>

            <div className="flex items-center justify-between pt-3 border-t border-border">
              <div>
                <p className="font-heading text-xs font-bold uppercase text-foreground">
                  {t.name}
                </p>
                <p className="font-body text-[11px] text-muted-foreground">
                  {t.location}
                </p>
              </div>
              <span className="font-heading text-[9px] uppercase tracking-wider text-primary border border-primary/40 px-2 py-1">
                {t.product}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
