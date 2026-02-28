import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Menu, X, User } from "lucide-react";
import logoHorizontal from "@/assets/logo-horizontal.png";
import { useCart } from "@/context/CartContext";

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const { totalItems, setCartOpen } = useCart();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) {
        setMobileOpen(false);
      }
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => document.body.classList.remove("menu-open");
  }, [mobileOpen]);

  const links = [
    { label: "Bebidas",  href: "#productos" },
    { label: "Tienda",   href: "#merch"     },
    { label: "Nosotros", href: "#proposito" },
    { label: "Club",     href: "#comunidad" },
  ];

  const handleMobileNav = (href: string) => {
    // Quitar overflow:hidden antes de navegar para que el scroll funcione
    document.body.classList.remove("menu-open");
    setMobileOpen(false);
    setTimeout(() => {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }, 300);
  };

  return (
    <nav
      role="navigation"
      aria-label="Navegación principal"
      className={`transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-md border-b border-border shadow-[0_2px_20px_rgba(0,0,0,0.6)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 md:px-8 py-2.5 md:py-4">

        {/* Logo */}
        <a
          href="#"
          aria-label="Death Water — ir al inicio"
          className="flex-shrink-0 group touch-target !min-w-0"
        >
          <img
            src={logoHorizontal}
            alt="Death Water"
            className="h-7 xs:h-8 md:h-10 transition-opacity duration-200 group-hover:opacity-80"
            style={{
              filter:
                "brightness(0) invert(1) drop-shadow(0 0 6px rgba(190,150,50,0.6)) drop-shadow(0 2px 10px rgba(0,0,0,1))",
            }}
          />
        </a>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-8" role="list">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              role="listitem"
              className="relative font-heading text-sm uppercase tracking-[0.15em] text-white hover:text-primary transition-colors duration-200 drop-shadow-md
                         after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-0 after:bg-primary after:transition-[width] after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-0 xs:gap-1 md:gap-2">
          <button
            aria-label="Mi cuenta"
            className="touch-target text-white hover:text-primary transition-colors duration-200 drop-shadow-md"
          >
            <User className="h-5 w-5" aria-hidden="true" />
          </button>

          <button
            aria-label={`Carrito de compras, ${totalItems} artículos`}
            onClick={() => setCartOpen(true)}
            className="relative touch-target text-white hover:text-primary transition-colors duration-200 drop-shadow-md"
          >
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  key="badge"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  aria-hidden="true"
                  className="absolute right-1.5 top-1.5 flex h-4 w-4 items-center justify-center rounded-full bg-primary text-[10px] font-bold leading-none text-primary-foreground"
                >
                  {totalItems > 9 ? "9+" : totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>

          <button
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="md:hidden touch-target text-white hover:text-primary transition-colors duration-200 drop-shadow-md"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            <AnimatePresence mode="wait" initial={false}>
              {mobileOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="h-6 w-6" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="h-6 w-6" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="menu"
            aria-label="Menú móvil"
            key="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden overflow-hidden border-t border-border bg-background/98 backdrop-blur-md"
          >
            <div className="px-4 pb-5 pt-1">
              {links.map((l, i) => (
                <motion.a
                  key={l.label}
                  role="menuitem"
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.06 }}
                  className="flex items-center min-h-[52px] py-3 font-heading text-base uppercase tracking-[0.15em] text-foreground hover:text-primary transition-colors border-b border-border/60 last:border-b-0 cursor-pointer"
                  onClick={() => handleMobileNav(l.href)}
                >
                  {l.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
