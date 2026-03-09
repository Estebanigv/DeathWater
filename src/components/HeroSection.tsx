import { motion } from "framer-motion";

const HeroSection = () => (
  <section
    aria-label="Hero — Mata Tu Sed"
    className="relative flex items-end overflow-hidden bg-black"
    style={{ minHeight: "100svh" }}
  >
    {/* Background — imagen en mobile, video en desktop */}
    <img
      src="/Image/Banner%20home/DWbannerHome3.webp"
      alt=""
      aria-hidden="true"
      className="md:hidden absolute inset-0 w-full h-full object-cover object-center"
      fetchPriority="high"
    />
    <video
      aria-hidden="true"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      className="hidden md:block absolute inset-0 w-full h-full object-cover object-center"
    >
      <source src="/Image/Banner%20home/DWBannerV2.webm" type="video/webm" />
    </video>

    {/* Gradientes — más fuerte en mobile para legibilidad */}
    <div className="absolute inset-x-0 bottom-0 h-[55%] md:h-[35%] bg-gradient-to-t from-black via-black/60 to-transparent z-[3]" />
    <div className="absolute inset-y-0 left-0 w-full md:w-[45%] bg-gradient-to-r from-black/60 md:from-black/30 to-transparent z-[3]" />

    {/* Contenido */}
    <div
      className="relative z-10 w-full mx-auto max-w-7xl px-5 xs:px-6 md:px-12"
      style={{ paddingBottom: "max(5rem, calc(3.5rem + env(safe-area-inset-bottom)))" }}
    >
      <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between sm:gap-8">

        {/* Headline */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-2 drop-shadow-md"
          >
            Agua de los Andes. Sin excusas.
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-bold leading-[0.9] mb-3"
            style={{
              fontSize: "clamp(2.5rem, 10vw, 4.5rem)",
              textShadow: "0 2px 20px rgba(0,0,0,0.8)",
            }}
          >
            <span className="text-white">Tu botella de</span>
            <br />
            <span className="text-gold-gradient">plástico te odia.</span>
            <br />
            <span className="text-white">Nosotros no.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-sm text-white/80 leading-relaxed max-w-[30ch]"
            style={{ textShadow: "0 1px 8px rgba(0,0,0,0.9)" }}
          >
            Agua pura de los Andes. Enlatada para que dejes de beber agua de fuentes que saben a tristeza. No es solo hidratación, es una actitud.
          </motion.p>
        </div>

        {/* CTAs — siempre apilados, izquierda, no llegan al WhatsApp */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col gap-3 shrink-0 w-fit"
        >
          <a href="#productos" className="btn-primary">
            Asegura tu lote
          </a>
          <a href="#proposito" className="btn-secondary">
            Nuestra Misión
          </a>
        </motion.div>
      </div>
    </div>

    {/* Scroll indicator — hidden on very small screens to avoid overlap */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 0.8 }}
      aria-hidden="true"
      className="hidden xs:flex absolute bottom-8 right-4 xs:right-6 md:right-10 flex-col items-center gap-2 z-10"
    >
      <span className="font-heading text-[9px] uppercase tracking-[0.45em] text-white/35">
        Scroll
      </span>
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
        className="w-px h-10 bg-gradient-to-b from-primary/50 to-transparent"
      />
    </motion.div>
  </section>
);

export default HeroSection;
