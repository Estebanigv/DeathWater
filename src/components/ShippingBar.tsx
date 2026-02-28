import { Truck } from "lucide-react";

const ShippingBar = () => (
  <div
    role="banner"
    aria-label="Información de envío"
    className="bg-gold-gradient py-2 text-center"
  >
    <p className="font-heading text-[10px] xs:text-[11px] font-bold uppercase tracking-[0.12em] xs:tracking-[0.18em] text-black flex items-center justify-center gap-1.5 xs:gap-2 px-3 leading-snug flex-wrap">
      <Truck className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
      <span>Envío gratis en pedidos sobre $50.000&nbsp;CLP a todo Chile</span>
    </p>
  </div>
);

export default ShippingBar;
