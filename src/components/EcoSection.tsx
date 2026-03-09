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
      const eased = 1 - Math.pow(1 - elapsed, 3);
      setCount(Math.round(from + (to - from) * eased));
      if (elapsed < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [inView, stat.target]);

  const displayed =
    stat.target === null ? stat.display : `${count}${stat.suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay }}
      className="group flex items-start gap-4 border-b border-border pb-5 last:border-0 last:pb-0"
    >
      <div className="shrink-0 mt-1 p-2 border border-border group-hover:border-primary transition-colors duration-300">
        <stat.icon
          className="h-5 w-5 text-primary transition-transform duration-300 group-hover:scale-110"
          aria-hidden="true"
        />
      </div>
      <div>
        <p
          className="font-display font-bold text-gold-gradient tabular-nums leading-none mb-1"
          style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)" }}
          aria-label={stat.display}
        >
          {displayed}
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
};

const EcoSection = () => (
  <section
    id="proposito"
    aria-label="Nuestro propósito ecológico"
    className="section-divider bg-secondary relative"
  >
    {/* Radial glow */}
    <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(ellipse_at_left,hsl(43_72%_50%)_0%,transparent_60%)]" />
    </div>

    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 items-center">

      {/* Columna contenido */}
      <div className="flex flex-col justify-center px-8 sm:px-12 md:px-16 lg:pl-20 lg:pr-10 xl:pl-28 xl:pr-12 py-16 xs:py-20 md:py-24 order-2 lg:order-1">

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-body text-xs tracking-[0.25em] uppercase text-primary mb-4"
        >
          El Manifiesto
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          className="font-display font-bold leading-tight mb-6"
          style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)" }}
        >
          <span className="text-gold-gradient">¿Por qué</span>
          <br />
          <span className="text-gold-gradient">esta lata?</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.18 }}
          className="font-body text-sm xs:text-base text-muted-foreground mb-10 leading-relaxed max-w-sm"
        >
          Estamos cansados de las botellas de plástico que matan el planeta.
          Nuestra agua viene en aluminio, porque el aluminio es infinito. El
          plástico es para siempre, y nosotros no. No buscamos convencerte.
          Buscamos a los que ya entienden el problema.
        </motion.p>

        {/* Stats en lista vertical */}
        <div className="flex flex-col gap-5 mb-10">
          {stats.map((s, i) => (
            <AnimatedStat key={s.label} stat={s} delay={0.2 + i * 0.12} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.55 }}
        >
          <a href="/conoce-mas" className="btn-secondary self-start">
            Leer más
          </a>
        </motion.div>
      </div>

      {/* Columna imagen — sin recorte */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative order-1 lg:order-2"
      >
        <img
          src="/Image/Muerta al plastico/Muertealplastico.webp"
          alt="La lata Death Water combatiendo el plástico"
          className="w-full h-auto block"
        />
        {/* Fusión izquierda — desktop */}
        <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-secondary to-transparent hidden lg:block pointer-events-none" />
        {/* Fusión inferior — mobile */}
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-secondary to-transparent lg:hidden pointer-events-none" />
      </motion.div>
    </div>
  </section>
);

export default EcoSection;
