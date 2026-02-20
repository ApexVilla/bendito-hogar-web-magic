import { ShoppingBasket, MessageCircle, MapPin, Clock, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="relative bg-foreground text-primary-foreground py-14 px-4 overflow-hidden">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: "var(--gradient-premium)" }} />

      <div className="container mx-auto relative z-10">
        <div className="grid md:grid-cols-3 gap-10 mb-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-premium)" }}>
                <ShoppingBasket className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-heading text-xl font-bold">Bendito Hogar</span>
            </div>
            <p className="text-primary-foreground/60 text-sm leading-relaxed">
              Tu minimarket de confianza en Jacura. Todo lo que necesitas a tu alcance, siempre con la mejor calidad.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <a
                href="https://wa.me/584221790195"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 hover:text-primary transition-colors group"
              >
                <MessageCircle className="w-4 h-4 group-hover:scale-110 transition-transform" />
                +58 422-1790195
              </a>
              <a
                href="mailto:bodegonbenditohogarlnl@gmail.com"
                className="flex items-center gap-3 hover:text-primary transition-colors group break-all"
              >
                <Mail className="w-4 h-4 shrink-0" />
                bodegonbenditohogarlnl@gmail.com
              </a>
              <p className="flex items-center gap-3">
                <MapPin className="w-4 h-4 shrink-0" />
                Jacura, Venezuela
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-5">Horarios</h4>
            <div className="space-y-3 text-sm text-primary-foreground/60">
              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                Lun – Sáb: 8 AM – 9 PM
              </p>
              <p className="flex items-center gap-3">
                <Clock className="w-4 h-4" />
                Dom: 8 AM – 4 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/40">
          © {new Date().getFullYear()} Minimarket Bendito Hogar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
