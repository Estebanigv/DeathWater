import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Recycle, Trash2, Droplets } from "lucide-react";

type Stat = {
  icon: React.ElementType;
  target: number | null;
  suffix: string;
  display: string;
  label: string;
};

const stats: Stat[] = [
  {
    icon: Trash2,
    target: 79,
    suffix: "%",
    display: "79%",
    label: "Del plástico en Chile termina en vertederos",
  },
  {
    icon: Recycle,
    target: null,
    suffix: "",
    display: "∞",
    label: "El aluminio es infinitamente reciclable",
  },
  {
    icon: Droplets,
    target: 0,
    suffix: "",
    display: "0",
    label: "Botellas de plástico en nuestro proceso",
  },
];

const AnimatedStat = ({ stat, delay }: { stat: Stat; delay: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || stat.target === null || started.current) return;
    started.current = true;

    const duration = 1600;
    const startTime = performance.now();
    const from = stat.target === 0 ? 0 : 0;
    const to = stat.target;

    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (elapsed < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, stat.target]);

  const displayed =
    stat.target === null
      ? stat.display
      : `${count}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group border border-border bg-card p-6 xs:p-8 md:p-10 hover:border-primary hover:glow-gold-sm transition-all duration-300 text-center"
    >
      <stat.icon
        className="h-7 w-7 xs:h-8 xs:w-8 text-primary mx-auto mb-4 xs:mb-5 transition-transform duration-300 group-hover:scale-110"
        aria-hidden="true"
      />
      <p
        className="font-display font-bold text-gold-gradient mb-2 xs:mb-3 tabular-nums"
        style={{ fontSize: "clamp(2.5rem, 8vw, 3.75rem)" }}
        aria-label={stat.display}
      >
        {displayed}
      </p>
      <p className="font-body text-sm text-muted-foreground leading-relaxed">
        {stat.label}
      </p>
    </motion.div>
  );
};

const EcoSection = () => (
  <section
    id="proposito"
    aria-label="Nuestro propósito ecológico"
    className="section-divider py-16 xs:py-20 md:py-24 bg-secondary relative overflow-hidden"
  >
    {/* Radial glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_center,hsl(43_72%_50%)_0%,transparent_65%)]" />
    </div>

    <div className="relative z-10 mx-auto max-w-5xl px-4 md:px-6 text-center">

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-4"
      >
        Muerte al Plástico
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold mb-5 xs:mb-6 leading-tight"
        style={{ fontSize: "clamp(1.5rem, 6vw, 3.75rem)" }}
      >
        <span className="text-foreground">EL RECICLAJE DE PLÁSTICO</span>
        <br />
        <span className="text-gold-gradient">ES UN MITO</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm xs:text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-10 xs:mb-14 md:mb-16 leading-relaxed"
      >
        En Chile generamos más de 990 mil toneladas de plástico al año. La
        mayoría termina en vertederos o en el océano. Nosotros elegimos el
        aluminio porque se recicla de verdad, infinitas veces, sin perder
        calidad.
      </motion.p>

      {/* Stat cards con contador animado */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5 mb-10 sm:mb-14">
        {stats.map((s, i) => (
          <AnimatedStat key={s.label} stat={s} delay={i * 0.15} />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4 }}
      >
        <a href="#" className="btn-secondary">
          Conoce Más
        </a>
      </motion.div>
    </div>
  </section>
);

export default EcoSection;
