import { motion } from "framer-motion";
import { Crown, Handshake } from "lucide-react";

const CommunitySection = () => (
  <section
    id="comunidad"
    aria-label="Comunidad y distribución"
    className="section-divider py-16 xs:py-20 md:py-24 bg-card"
  >
    <div className="mx-auto max-w-7xl px-4 md:px-6">

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-8 xs:mb-12"
      >
        <p className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3">
          Club &amp; Distribución
        </p>
        <h2
          className="font-display font-bold text-foreground"
          style={{ fontSize: "clamp(1.5rem, 6vw, 2.25rem)" }}
        >
          Únete al Movimiento
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 xs:gap-5 md:gap-6">

        {/* Club Calavera */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group border border-border bg-background hover:border-primary hover:glow-gold-sm transition-all duration-300 p-8 xs:p-10 md:p-14 text-center flex flex-col items-center justify-center"
        >
          <Crown
            className="h-10 w-10 md:h-12 md:w-12 text-primary mb-5 xs:mb-6 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <h3
            className="font-display font-bold text-gold-gradient mb-4"
            style={{ fontSize: "clamp(1.25rem, 5vw, 2.25rem)" }}
          >
            Club Calavera
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6 xs:mb-8 max-w-xs leading-relaxed">
            Junta calaveras con cada compra. Canjea por merch exclusivo,
            descuentos y experiencias que te van a matar.
          </p>
          <a href="#" className="btn-primary w-full xs:w-auto justify-center">
            Únete al Club
          </a>
        </motion.div>

        {/* Vende Death Water */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="group border border-border bg-background hover:border-primary hover:glow-gold-sm transition-all duration-300 p-8 xs:p-10 md:p-14 text-center flex flex-col items-center justify-center"
        >
          <Handshake
            className="h-10 w-10 md:h-12 md:w-12 text-primary mb-5 xs:mb-6 transition-transform duration-300 group-hover:scale-110"
            aria-hidden="true"
          />
          <h3
            className="font-display font-bold text-gold-gradient mb-4"
            style={{ fontSize: "clamp(1.25rem, 5vw, 2.25rem)" }}
          >
            Vende Death Water
          </h3>
          <p className="font-body text-sm text-muted-foreground mb-6 xs:mb-8 max-w-xs leading-relaxed">
            ¿Tienes un bar, restorán o tienda? Lleva la marca más brígida de
            agua a tu local. Hablemos de negocios.
          </p>
          <a href="#" className="btn-secondary w-full xs:w-auto justify-center">
            Ser Distribuidor
          </a>
        </motion.div>

      </div>
    </div>
  </section>
);

export default CommunitySection;
