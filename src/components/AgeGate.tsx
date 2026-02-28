import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logoHorizontal from "@/assets/logo-horizontal.png";

const STORAGE_KEY = "dw_age_ok";

const AgeGate = () => {
  const [visible, setVisible] = useState(false);
  const [denied, setDenied] = useState(false);

  useEffect(() => {
    if (!sessionStorage.getItem(STORAGE_KEY)) {
      setVisible(true);
    }
  }, []);

  const allow = () => {
    sessionStorage.setItem(STORAGE_KEY, "1");
    setVisible(false);
  };

  const deny = () => setDenied(true);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key="agegate"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6 } }}
          className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center px-6 text-center"
        >
          {/* Banner de fondo muy sutil */}
          <img
            src="/Image/Banner home/DWbannerHome3.webp"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-cover object-center opacity-25"
          />
          {/* Overlay negro para que el contenido sea legible */}
          <div className="absolute inset-0 bg-black/60" aria-hidden="true" />

          <div className="relative z-10 flex flex-col items-center gap-6 max-w-sm w-full">
            {/* Logo */}
            <motion.img
              src={logoHorizontal}
              alt="Death Water Chile"
              initial={{ opacity: 0, y: -16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="h-14 xs:h-16 md:h-20"
              style={{
                filter:
                  "brightness(0) invert(1) drop-shadow(0 0 14px rgba(190,150,50,0.7))",
              }}
            />

            <AnimatePresence mode="wait">
              {!denied ? (
                <motion.div
                  key="question"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.35, duration: 0.5 }}
                  className="flex flex-col items-center gap-6"
                >
                  {/* Eyebrow */}
                  <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary">
                    Antes de entrar
                  </p>

                  {/* Headline */}
                  <h1
                    className="font-display font-bold leading-tight"
                    style={{ fontSize: "clamp(2rem, 10vw, 3.5rem)" }}
                  >
                    <span className="text-gold-gradient">¿ERES</span>
                    <br />
                    <span className="text-white">MAYOR DE</span>
                    <br />
                    <span className="text-gold-gradient">EDAD?</span>
                  </h1>

                  {/* Copia */}
                  <p className="font-body text-base xs:text-lg text-white/90 leading-relaxed max-w-[28ch] font-medium">
                    No es alcohol. Es agua andina en lata.
                    <br />
                    <span className="text-primary">Pero nos gusta el drama.</span>
                  </p>

                  {/* Botones */}
                  <div className="flex flex-col xs:flex-row gap-3 w-full">
                    <button
                      onClick={allow}
                      className="btn-primary flex-1 !py-4 !text-sm"
                    >
                      Sí, tengo +18
                    </button>
                    <button
                      onClick={deny}
                      className="btn-secondary flex-1 !py-4 !text-sm"
                    >
                      No, soy menor
                    </button>
                  </div>

                  <p className="font-body text-[10px] text-white/25 max-w-[34ch] leading-relaxed">
                    Al ingresar confirmas que tienes 18 años o más.
                    Death Water no contiene alcohol.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  key="denied"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center gap-5"
                >
                  <h2
                    className="font-display font-bold text-white leading-tight"
                    style={{ fontSize: "clamp(1.5rem, 7vw, 2.5rem)" }}
                  >
                    Vuelve en
                    <br />
                    <span className="text-gold-gradient">unos años.</span>
                  </h2>
                  <p className="font-body text-sm text-white/55 leading-relaxed max-w-[28ch]">
                    El agua seguirá aquí esperándote.
                    <br />
                    La Cordillera también.
                  </p>
                  <button
                    onClick={() => setDenied(false)}
                    className="font-heading text-xs uppercase tracking-[0.3em] text-muted-foreground hover:text-primary transition-colors mt-2"
                  >
                    ← Volver
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AgeGate;
