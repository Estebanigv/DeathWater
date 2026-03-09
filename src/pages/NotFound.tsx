import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-6 text-center">
      {/* Glow sutil */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{ backgroundImage: "radial-gradient(ellipse at 50% 40%, hsl(43 72% 50%) 0%, transparent 65%)" }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <motion.img
          src={logoHorizontal}
          alt="Death Water Chile"
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="h-10 xs:h-12 md:h-14"
          style={{
            filter: "brightness(0) invert(1) drop-shadow(0 0 10px rgba(190,150,50,0.6))",
          }}
        />

        {/* 404 gigante */}
        <motion.p
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold text-gold-gradient leading-none select-none"
          style={{ fontSize: "clamp(6rem, 30vw, 14rem)" }}
          aria-hidden="true"
        >
          404
        </motion.p>

        {/* Títulos */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col gap-2"
        >
          <h1
            className="font-display font-bold text-white leading-tight"
            style={{ fontSize: "clamp(1.5rem, 6vw, 2.5rem)" }}
          >
            Te perdiste.
          </h1>
          <p
            className="font-display text-gold-gradient"
            style={{ fontSize: "clamp(1rem, 3vw, 1.4rem)" }}
          >
            Tal como tu botella de plástico.
          </p>
        </motion.div>

        {/* Descripción */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          className="font-body text-sm xs:text-base text-muted-foreground max-w-[34ch] leading-relaxed"
        >
          Esta página no existe. Como el reciclaje de plástico en Chile.
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="/" className="btn-primary">
            Volver al inicio
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFound;
