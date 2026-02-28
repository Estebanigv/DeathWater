import { motion } from "framer-motion";
import { Instagram, Facebook, Youtube } from "lucide-react";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.16 8.16 0 0 0 4.77 1.52v-3.4s-1.01.01-1.01.01Z" />
  </svg>
);

const socials = [
  {
    href: "https://www.instagram.com/deathwatercl",
    icon: Instagram,
    handle: "@deathwatercl",
    platform: "Instagram",
    ariaLabel: "Seguirnos en Instagram — @deathwatercl",
  },
  {
    href: "https://www.facebook.com/deathwatercl",
    icon: Facebook,
    handle: "Death Water Chile",
    platform: "Facebook",
    ariaLabel: "Seguirnos en Facebook — Death Water Chile",
  },
  {
    href: "https://www.youtube.com/@deathwatercl",
    icon: Youtube,
    handle: "@deathwatercl",
    platform: "YouTube",
    ariaLabel: "Suscribirse en YouTube — @deathwatercl",
  },
  {
    href: "https://www.tiktok.com/@deathwatercl",
    icon: TikTokIcon,
    handle: "@deathwatercl",
    platform: "TikTok",
    ariaLabel: "Seguirnos en TikTok — @deathwatercl",
  },
];

const SocialSection = () => (
  <section
    aria-label="Redes sociales"
    className="section-divider py-16 xs:py-20 md:py-24 bg-secondary"
  >
    <div className="mx-auto max-w-4xl px-4 md:px-6 text-center">

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="font-heading text-[10px] uppercase tracking-[0.5em] text-primary mb-3"
      >
        Redes Sociales
      </motion.p>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="font-display font-bold text-foreground mb-4"
        style={{ fontSize: "clamp(1.75rem, 7vw, 3rem)" }}
      >
        SÍGUENOS
      </motion.h2>

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2 }}
        className="font-body text-sm xs:text-base text-muted-foreground mb-8 xs:mb-12"
      >
        Contenido, lanzamientos y caos directo en tus redes
      </motion.p>

      {/* Social cards — stacked full-width on mobile, inline on sm+ */}
      <div className="grid grid-cols-1 xs:grid-cols-2 lg:grid-cols-4 gap-3 xs:gap-4">
        {socials.map(({ href, icon: Icon, handle, platform, ariaLabel }, i) => (
          <motion.a
            key={platform}
            href={href}
            aria-label={ariaLabel}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25 + i * 0.12 }}
            className="group flex items-center gap-4 border border-border bg-card px-6 xs:px-8 py-4 xs:py-5 hover:border-primary hover:glow-gold-sm transition-all duration-300 w-full sm:w-auto sm:min-w-[220px]"
          >
            <Icon className="h-6 w-6 xs:h-7 xs:w-7 text-primary shrink-0 transition-transform duration-300 group-hover:scale-110" />
            <div className="text-left">
              <p className="font-heading text-sm font-bold uppercase text-foreground group-hover:text-primary transition-colors duration-200">
                {handle}
              </p>
              <p className="font-body text-xs text-muted-foreground">{platform}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default SocialSection;
