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

    {/* Gradient overlays */}
    <div className="absolute inset-x-0 bottom-0 h-[35%] bg-gradient-to-t from-black/90 via-black/40 to-transparent z-[3]" />
    <div className="absolute inset-y-0 left-0 w-[50%] xs:w-[40%] bg-gradient-to-r from-black/25 to-transparent z-[3]" />

    {/* Content — pb must clear the scroll indicator; pt is handled by absolute positioning at bottom */}
    <div className="relative z-10 w-full mx-auto max-w-7xl px-4 xs:px-5 md:px-12 pb-20 md:pb-28">
      {/*
        Layout: on mobile everything stacks vertically.
        On sm+ the headline sits left and CTAs sit right on the same baseline row.
      */}
      <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 sm:gap-8">

        {/* Left — headline */}
        <div className="max-w-xs xs:max-w-sm">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-[9px] xs:text-[10px] uppercase tracking-[0.35em] xs:tracking-[0.5em] text-primary mb-2 xs:mb-3"
          >
            Agua Purificada de los Andes
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-display font-bold leading-[0.88] mb-3 xs:mb-4"
            style={{ fontSize: "clamp(2rem, 9vw, 4rem)" }}
          >
            <span className="text-gold-gradient">MATA</span>
            <br />
            <span className="text-white">TU SED</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-body text-xs xs:text-sm text-white/65 leading-relaxed max-w-[26ch]"
          >
            Agua pura de los Andes en lata de aluminio.
            <br />
            Porque el plástico ya mató suficiente.
          </motion.p>
        </div>

        {/* CTAs — full-width stacked on mobile, inline on sm+ */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="flex flex-col xs:flex-row sm:flex-col gap-3 shrink-0 w-full xs:w-auto sm:w-auto"
        >
          <a
            href="#productos"
            className="btn-primary w-full xs:w-auto justify-center"
          >
            Reservar Ahora
          </a>
          <a
            href="#proposito"
            className="btn-secondary w-full xs:w-auto justify-center"
          >
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
