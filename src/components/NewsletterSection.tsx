import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight, Users } from "lucide-react";

const NewsletterSection = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubmitted(true);
    }
  };

  return (
    <section
      aria-label="Suscripción al newsletter"
      className="section-divider py-16 xs:py-20 md:py-24 bg-background"
    >
      <div className="mx-auto max-w-xl px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <div
            className="flex items-center justify-center w-12 h-12 xs:w-14 xs:h-14 border border-primary/40 mb-6 xs:mb-7"
            aria-hidden="true"
          >
            <Mail className="h-5 w-5 xs:h-6 xs:w-6 text-primary" />
          </div>

          <p className="font-heading text-[10px] uppercase tracking-[0.4em] text-primary mb-3">
            Sé parte de la resistencia.
          </p>

          <h2
            className="font-display font-bold text-gold-gradient mb-4"
            style={{ fontSize: "clamp(1.5rem, 7vw, 2.25rem)" }}
          >
            La Lista de Iniciados
          </h2>

          <p className="font-body text-sm xs:text-base text-muted-foreground mb-6 xs:mb-8 max-w-[38ch] leading-relaxed">
            No hacemos spam. Solo te avisaremos cuando estemos listos para invadir el mercado y repartir latas. No te quedes fuera.
          </p>

          {/* Contador fijo */}
          <div className="flex items-center gap-2 mb-6 text-muted-foreground/70">
            <Users className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
            <span className="font-body text-xs">247 personas ya están en la lista</span>
          </div>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center gap-3 py-6"
            >
              <p className="font-heading text-sm uppercase tracking-[0.2em] text-primary">
                Bienvenido al Culto.
              </p>
              <p className="font-body text-sm text-muted-foreground max-w-[36ch] leading-relaxed">
                No nos agradezcas todavía, ni siquiera has probado el agua.
              </p>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col xs:flex-row gap-2 w-full"
              aria-label="Formulario de suscripción al newsletter"
            >
              <label htmlFor="newsletter-email" className="sr-only">
                Tu correo electrónico
              </label>
              <input
                id="newsletter-email"
                type="email"
                placeholder="tu@email.cl"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                autoComplete="email"
                className="flex-1 min-w-0 bg-card border border-border px-4 py-3 min-h-[44px] font-body text-sm text-foreground placeholder:text-muted-foreground
                           hover:border-border/80 focus:border-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-colors"
              />
              <button
                type="submit"
                className="btn-primary gap-1.5 whitespace-nowrap w-full xs:w-auto"
                aria-label="Unirse al culto"
              >
                Unirme al culto
                <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </form>
          )}

          <p className="font-body text-[11px] text-muted-foreground/60 mt-4 xs:mt-5">
            Sin spam. Cancela cuando quieras.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default NewsletterSection;
