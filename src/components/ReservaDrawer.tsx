import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, ClipboardList, ChevronDown } from "lucide-react";
import { Sheet, SheetContent } from "@/components/ui/sheet";
import { useCart } from "@/context/CartContext";

const WA_NUMBER = "56928649365";

const formatCLP = (n: number) => "$" + n.toLocaleString("es-CL");

const REGIONES = [
  "Arica y Parinacota",
  "Tarapacá",
  "Antofagasta",
  "Atacama",
  "Coquimbo",
  "Valparaíso",
  "Región Metropolitana",
  "O'Higgins",
  "Maule",
  "Ñuble",
  "Biobío",
  "La Araucanía",
  "Los Ríos",
  "Los Lagos",
  "Aysén",
  "Magallanes",
];

type Field = { nombre: string; email: string; telefono: string; region: string; nota: string };
const EMPTY: Field = { nombre: "", email: "", telefono: "", region: "", nota: "" };

const ReservaDrawer = () => {
  const { items, totalPrice, reservaOpen, setReservaOpen, clearCart } = useCart();
  const [form, setForm] = useState<Field>(EMPTY);
  const [errors, setErrors] = useState<Partial<Field>>({});
  const [done, setDone] = useState(false);

  const validate = () => {
    const e: Partial<Field> = {};
    if (!form.nombre.trim()) e.nombre = "Requerido";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido";
    if (!form.telefono.trim()) e.telefono = "Requerido";
    if (!form.region) e.region = "Selecciona tu región";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const lineas = items
      .map((i) => `• ${i.name}${i.variant ? ` (${i.variant})` : ""} ×${i.quantity} — ${formatCLP(i.price * i.quantity)}`)
      .join("\n");

    const msg = [
      "🌊 *Nueva Reserva — Death Water Chile*",
      "",
      "*Cliente:*",
      `Nombre: ${form.nombre}`,
      `Email: ${form.email}`,
      `Teléfono: ${form.telefono}`,
      `Región: ${form.region}`,
      form.nota ? `Nota: ${form.nota}` : "",
      "",
      "*Productos:*",
      lineas,
      "",
      `*Total reserva: ${formatCLP(totalPrice)}*`,
      "",
      "_Reserva realizada desde death-water.vercel.app_",
    ]
      .filter((l) => l !== undefined)
      .join("\n");

    const url = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
    setDone(true);
    clearCart();
  };

  const handleClose = () => {
    setReservaOpen(false);
    setTimeout(() => { setDone(false); setForm(EMPTY); setErrors({}); }, 400);
  };

  const set = (k: keyof Field) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  return (
    <Sheet open={reservaOpen} onOpenChange={(o) => !o && handleClose()}>
      <SheetContent
        side="right"
        className="w-full sm:max-w-md p-0 flex flex-col bg-card border-l border-border"
        aria-label="Formulario de reserva"
      >
        {/* Header */}
        <div className="flex items-center gap-3 px-6 py-5 border-b border-border shrink-0">
          <ClipboardList className="h-5 w-5 text-primary" aria-hidden="true" />
          <h2 className="font-heading text-base font-bold uppercase tracking-[0.2em] text-foreground">
            Confirmar Reserva
          </h2>
        </div>

        <div className="flex-1 overflow-y-auto">
          <AnimatePresence mode="wait">
            {done ? (
              /* ── Estado éxito ── */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center gap-5 px-8 py-20 text-center"
              >
                <CheckCircle className="h-16 w-16 text-primary" />
                <h3 className="font-display font-bold text-2xl text-foreground">
                  ¡Reserva enviada!
                </h3>
                <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-[28ch]">
                  Te llegará un mensaje de WhatsApp para coordinar el envío y el pago.
                </p>
                <button onClick={handleClose} className="btn-primary !px-8 !py-3">
                  Cerrar
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                id="reserva-form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-0"
                noValidate
              >
                {/* Resumen del pedido */}
                <div className="px-6 py-5 border-b border-border bg-secondary/40">
                  <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary mb-3">
                    Tu pedido
                  </p>
                  <ul className="space-y-2">
                    {items.map((i) => (
                      <li key={i.id} className="flex justify-between gap-3 font-body text-sm">
                        <span className="text-foreground leading-tight">
                          {i.name}
                          {i.variant && <span className="text-muted-foreground"> · {i.variant}</span>}
                          <span className="text-muted-foreground"> ×{i.quantity}</span>
                        </span>
                        <span className="text-foreground font-bold shrink-0">
                          {formatCLP(i.price * i.quantity)}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex justify-between items-center mt-4 pt-3 border-t border-border">
                    <span className="font-heading text-xs uppercase tracking-wider text-muted-foreground">Total</span>
                    <span className="font-heading text-xl font-bold text-foreground">{formatCLP(totalPrice)}</span>
                  </div>
                </div>

                {/* Campos */}
                <div className="flex flex-col gap-5 px-6 py-6">
                  <p className="font-heading text-[10px] uppercase tracking-[0.35em] text-primary">
                    Tus datos
                  </p>

                  {/* Nombre */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      Nombre completo *
                    </label>
                    <input
                      type="text"
                      value={form.nombre}
                      onChange={set("nombre")}
                      placeholder="Ej: María González"
                      className="bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.nombre && <p className="font-body text-xs text-red-400">{errors.nombre}</p>}
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={form.email}
                      onChange={set("email")}
                      placeholder="tu@correo.cl"
                      className="bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.email && <p className="font-body text-xs text-red-400">{errors.email}</p>}
                  </div>

                  {/* Teléfono */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      value={form.telefono}
                      onChange={set("telefono")}
                      placeholder="+56 9 XXXX XXXX"
                      className="bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
                    />
                    {errors.telefono && <p className="font-body text-xs text-red-400">{errors.telefono}</p>}
                  </div>

                  {/* Región */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      Región *
                    </label>
                    <div className="relative">
                      <select
                        value={form.region}
                        onChange={set("region")}
                        className="w-full appearance-none bg-background border border-border px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:border-primary transition-colors pr-10"
                      >
                        <option value="" disabled>Selecciona tu región</option>
                        {REGIONES.map((r) => (
                          <option key={r} value={r}>{r}</option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground pointer-events-none" aria-hidden="true" />
                    </div>
                    {errors.region && <p className="font-body text-xs text-red-400">{errors.region}</p>}
                  </div>

                  {/* Nota opcional */}
                  <div className="flex flex-col gap-1.5">
                    <label className="font-heading text-xs uppercase tracking-wider text-muted-foreground">
                      Nota (opcional)
                    </label>
                    <textarea
                      value={form.nota}
                      onChange={set("nota")}
                      placeholder="Alguna indicación especial para tu pedido…"
                      rows={3}
                      className="bg-background border border-border px-4 py-3 font-body text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
                    />
                  </div>

                  <p className="font-body text-xs text-muted-foreground/60 leading-relaxed">
                    Al confirmar, se abrirá WhatsApp con tu pedido listo para enviarnos.
                    Sin pago online — coordinamos contigo directamente.
                  </p>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>

        {/* Footer CTA */}
        {!done && (
          <div className="shrink-0 border-t border-border px-6 py-5">
            <button
              type="submit"
              form="reserva-form"
              className="btn-primary w-full !py-4 !text-sm"
            >
              Enviar Reserva por WhatsApp
            </button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

export default ReservaDrawer;
