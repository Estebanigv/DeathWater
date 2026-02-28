import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowLeft, Phone, Mail, Instagram, Recycle, Trash2, Droplets, Leaf, Zap, AlertTriangle } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import FloatingButtons from "@/components/FloatingButtons";

const stats = [
  { icon: Trash2,       number: "79%",    label: "Del plástico en Chile termina en vertederos o el océano" },
  { icon: Recycle,      number: "∞",      label: "Veces que el aluminio puede reciclarse sin perder calidad" },
  { icon: AlertTriangle,number: "450",    label: "Años tarda en degradarse una botella de plástico" },
  { icon: Droplets,     number: "990K",   label: "Toneladas de plástico generadas en Chile cada año" },
  { icon: Leaf,         number: "95%",    label: "Menos energía usa reciclar aluminio vs producir nuevo" },
  { icon: Zap,          number: "0",      label: "Botellas de plástico en todo nuestro proceso" },
];

const steps = [
  {
    number: "01",
    title: "Captación en los Andes",
    body: "El agua proviene de manantiales de alta montaña en la Cordillera de los Andes, donde la nieve y el hielo glaciar filtran naturalmente el agua durante décadas.",
  },
  {
    number: "02",
    title: "Purificación natural",
    body: "El proceso de filtración glaciar elimina impurezas de forma natural. Sin químicos, sin aditivos. Solo agua en su estado más puro.",
  },
  {
    number: "03",
    title: "Envasado en aluminio",
    body: "Llenamos cada lata de aluminio 100% reciclable en nuestra planta. El aluminio protege el sabor y la pureza del agua, sin transferir sabores ni químicos.",
  },
  {
    number: "04",
    title: "Ciclo infinito",
    body: "Cuando terminas tu Death Water, la lata se recicla y vuelve a ser aluminio nuevo en 60 días. Sin pérdida de calidad, infinitas veces.",
  },
];

const faqs = [
  {
    q: "¿Por qué aluminio y no vidrio?",
    a: "El vidrio es pesado, requiere más energía de transporte y se rompe. El aluminio es liviano, irrompible y se recicla infinitamente con un 95% menos de energía que fabricarlo nuevo.",
  },
  {
    q: "¿El aluminio afecta el sabor del agua?",
    a: "No. La lata tiene un recubrimiento interior de resina grado alimentario que aísla completamente el agua del metal. El sabor es puro, tal como sale del manantial.",
  },
  {
    q: "¿Dónde puedo reciclar mi lata?",
    a: "En cualquier punto de reciclaje de Chile. Las latas de aluminio son el material más reciclado del mundo. También puedes buscar los puntos verdes de tu municipio.",
  },
  {
    q: "¿Death Water tiene sodio o aditivos?",
    a: "Cero. Agua purificada, sin sodio, sin calorías, sin azúcar, sin conservantes, sin aditivos de ningún tipo. Solo agua.",
  },
  {
    q: "¿Hacen envíos a todo Chile?",
    a: "Sí, despachamos a todo Chile. Envío gratis en compras sobre $50.000. Los pedidos se procesan en 24-48 horas hábiles.",
  },
];

const ConoceMas = () => (
  <div className="min-h-screen bg-background">

    {/* Navbar simple */}
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl px-4 md:px-8 py-3 flex items-center justify-between">
        <Link to="/" aria-label="Volver al inicio">
          <img
            src={logoHorizontal}
            alt="Death Water"
            className="h-8 md:h-10"
            style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 6px rgba(190,150,50,0.6))" }}
          />
        </Link>
        <Link
          to="/"
          className="flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="h-3.5 w-3.5" />
          Volver
        </Link>
      </div>
    </header>

    {/* Hero */}
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 bg-secondary overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_top,hsl(43_72%_50%)_0%,transparent_60%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-4xl px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-4"
        >
          Muerte al Plástico
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-foreground leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}
        >
          Agua pura.<br />
          <span className="text-gold-gradient">Sin excusas.</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="font-body text-base md:text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
        >
          Death Water nació de una pregunta simple: ¿por qué seguimos usando plástico
          cuando tenemos el aluminio? Aquí está toda la historia.
        </motion.p>
      </div>
    </section>

    {/* Stats */}
    <section className="section-divider py-20 md:py-24 bg-background" aria-label="Datos sobre el plástico">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">La realidad</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            El plástico no se recicla.<br />
            <span className="text-gold-gradient">Eso es un hecho.</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-border bg-card p-6 md:p-8 text-center hover:border-primary hover:glow-gold-sm transition-all duration-300"
            >
              <s.icon className="h-7 w-7 text-primary mx-auto mb-4" aria-hidden="true" />
              <p className="font-display text-4xl md:text-5xl font-bold text-gold-gradient mb-3">
                {s.number}
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Proceso */}
    <section className="section-divider py-20 md:py-24 bg-secondary" aria-label="Nuestro proceso">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">Proceso</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Del Glaciar a tu Mano
          </h2>
        </div>
        <div className="space-y-0">
          {steps.map((s, i) => (
            <motion.div
              key={s.number}
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="flex gap-6 md:gap-10 pb-10 md:pb-12 relative"
            >
              {/* Línea vertical */}
              {i < steps.length - 1 && (
                <div className="absolute left-6 top-12 bottom-0 w-px bg-border" aria-hidden="true" />
              )}
              <div className="shrink-0 w-12 h-12 border border-primary flex items-center justify-center">
                <span className="font-display text-sm font-bold text-primary">{s.number}</span>
              </div>
              <div className="pt-2">
                <h3 className="font-heading text-base md:text-lg font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                  {s.title}
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-lg">
                  {s.body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Manifesto */}
    <section className="section-divider py-20 md:py-24 bg-background relative overflow-hidden" aria-label="Manifiesto">
      <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(ellipse_at_center,hsl(43_72%_50%)_0%,transparent_70%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-3xl px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-6"
        >
          Manifiesto
        </motion.p>
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display font-bold text-foreground leading-tight mb-8"
          style={{ fontSize: "clamp(1.5rem, 4vw, 2.5rem)" }}
        >
          "No creemos en el greenwashing.<br />
          Creemos en el aluminio, en los Andes<br />
          y en decir las cosas como son.<br />
          <span className="text-gold-gradient">El plástico mata. Punto."</span>
        </motion.blockquote>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground"
        >
          — Equipo Death Water Chile
        </motion.p>
      </div>
    </section>

    {/* FAQ */}
    <section className="section-divider py-20 md:py-24 bg-secondary" aria-label="Preguntas frecuentes">
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <div className="text-center mb-14">
          <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">FAQ</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Preguntas Frecuentes
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <motion.div
              key={f.q}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="border border-border bg-card p-5 md:p-6"
            >
              <h3 className="font-heading text-sm font-bold uppercase tracking-[0.1em] text-foreground mb-2">
                {f.q}
              </h3>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {f.a}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Contacto */}
    <section className="section-divider py-20 md:py-24 bg-background" aria-label="Contacto">
      <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3"
        >
          Contáctanos
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="font-display text-3xl md:text-4xl font-bold text-gold-gradient mb-4"
        >
          Hablemos
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="font-body text-sm text-muted-foreground mb-12 max-w-[40ch] mx-auto"
        >
          Distribución, prensa, colaboraciones o simplemente saludar. Estamos.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-5">
          {/* WhatsApp */}
          <motion.a
            href="https://wa.me/56928649365?text=Hola%2C%20quiero%20saber%20m%C3%A1s%20sobre%20Death%20Water%20%F0%9F%92%80"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center gap-3 border border-border bg-card p-6 hover:border-primary hover:glow-gold-sm transition-all duration-300 group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: "#25D366" }}>
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
              <p className="font-body text-sm text-muted-foreground">+56 9 2864 9365</p>
            </div>
          </motion.a>

          {/* Teléfono */}
          <motion.a
            href="tel:+56928649365"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center gap-3 border border-border bg-card p-6 hover:border-primary hover:glow-gold-sm transition-all duration-300 group"
          >
            <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
              <Phone className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-foreground group-hover:text-primary transition-colors">Teléfono</p>
              <p className="font-body text-sm text-muted-foreground">+56 9 2864 9365</p>
            </div>
          </motion.a>

          {/* Email */}
          <motion.a
            href="mailto:hola@deathwater.cl"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center gap-3 border border-border bg-card p-6 hover:border-primary hover:glow-gold-sm transition-all duration-300 group"
          >
            <div className="w-10 h-10 border border-primary/40 flex items-center justify-center">
              <Mail className="h-4 w-4 text-primary" aria-hidden="true" />
            </div>
            <div>
              <p className="font-heading text-xs font-bold uppercase text-foreground group-hover:text-primary transition-colors">Email</p>
              <p className="font-body text-sm text-muted-foreground">hola@deathwater.cl</p>
            </div>
          </motion.a>
        </div>

        {/* Instagram */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-8"
        >
          <a
            href="https://instagram.com/deathwatercl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 font-heading text-xs uppercase tracking-[0.2em] text-muted-foreground hover:text-primary transition-colors"
          >
            <Instagram className="h-4 w-4" aria-hidden="true" />
            @deathwatercl
          </a>
        </motion.div>
      </div>
    </section>

    {/* CTA volver */}
    <section className="section-divider py-16 bg-secondary text-center">
      <Link
        to="/"
        className="btn-primary inline-flex"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Ver Bebidas y Tienda
      </Link>
    </section>

    {/* Footer mínimo */}
    <footer className="border-t border-border bg-card py-6 text-center">
      <p className="font-body text-xs text-muted-foreground/60">
        © 2026 Death Water Chile. Todos los derechos reservados.
      </p>
    </footer>

    <FloatingButtons />
  </div>
);

export default ConoceMas;
