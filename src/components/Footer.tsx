import { Instagram, Facebook, Youtube } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";

const TikTokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.88-2.88 2.89 2.89 0 0 1 2.88-2.88c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.56a8.16 8.16 0 0 0 4.77 1.52v-3.4s-1.01.01-1.01.01Z" />
  </svg>
);

const socialLinks = [
  { href: "https://www.instagram.com/deathwatercl", Icon: Instagram, label: "Instagram" },
  { href: "https://www.facebook.com/deathwatercl", Icon: Facebook, label: "Facebook" },
  { href: "https://www.youtube.com/@deathwatercl", Icon: Youtube, label: "YouTube" },
  { href: "https://www.tiktok.com/@deathwatercl", Icon: TikTokIcon, label: "TikTok" },
];

const navColumns = [
  {
    heading: "Información",
    links: ["Club Calavera", "Gift Card", "Calidad del Agua", "Contáctanos"],
  },
  {
    heading: "Compañía",
    links: [
      "Muerte al Plástico",
      "Preguntas Frecuentes",
      "Trabaja con Nosotros",
      "Sobre Nosotros",
    ],
  },
  {
    heading: "Tienda",
    links: ["Bebidas", "Merch", "Mi Cuenta", "Mis Pedidos"],
  },
];

const Footer = () => (
  <footer
    aria-label="Pie de página"
    className="border-t border-border bg-card"
  >
    <div className="mx-auto max-w-7xl px-4 md:px-6 pt-12 xs:pt-14 md:pt-16 pb-8">

      {/* Main grid — 1 col on xs, 2 col on sm, 4 col on md */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 xs:gap-10 mb-10 xs:mb-14">

        {/* Nav columns */}
        {navColumns.map((col) => (
          <nav key={col.heading} aria-label={col.heading}>
            <h4 className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 xs:mb-5">
              {col.heading}
            </h4>
            <ul className="space-y-3">
              {col.links.map((l) => (
                <li key={l}>
                  <a
                    href="#"
                    className="font-body text-sm text-muted-foreground hover:text-primary transition-colors duration-200 leading-relaxed min-h-[36px] inline-flex items-center"
                  >
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        ))}

        {/* Shipping info */}
        <div>
          <h4 className="font-heading text-[10px] font-bold uppercase tracking-[0.3em] text-primary mb-4 xs:mb-5">
            Envíos
          </h4>
          <ul className="space-y-3">
            {[
              "Despacho a todo Chile",
              "Envío gratis sobre $50.000",
              "Pago con Webpay y tarjetas",
              "Región / CLP",
            ].map((item) => (
              <li
                key={item}
                className="font-body text-sm text-muted-foreground leading-relaxed"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom bar — centred stack on mobile, row on md */}
      <div className="flex flex-col items-center md:flex-row md:justify-between border-t border-border pt-6 xs:pt-8 gap-5 xs:gap-6">

        {/* Logo — centred on mobile */}
        <a href="#" aria-label="Death Water — volver al inicio" className="shrink-0">
          <img
            src={logoHorizontal}
            alt="Death Water"
            className="h-8 xs:h-9 md:h-10 brightness-0 invert opacity-70 hover:opacity-90 transition-opacity duration-200"
          />
        </a>

        {/* Social icons */}
        <div className="flex items-center gap-1">
          {socialLinks.map(({ href, Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="w-9 h-9 flex items-center justify-center text-muted-foreground hover:text-primary transition-colors duration-200"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        {/* Legal links */}
        <nav aria-label="Legal" className="flex flex-wrap justify-center gap-x-4 xs:gap-x-5 gap-y-2">
          {[
            "Política de Privacidad",
            "Términos y Condiciones",
            "Política de Devoluciones",
          ].map((l) => (
            <a
              key={l}
              href="#"
              className="font-body text-xs text-muted-foreground hover:text-primary transition-colors duration-200 min-h-[36px] inline-flex items-center"
            >
              {l}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-body text-xs text-muted-foreground/60 shrink-0 text-center md:text-right">
          &copy; 2026 Death Water Chile.{" "}
          <span className="block xs:inline">Todos los derechos reservados.</span>
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
