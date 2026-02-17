import { ShoppingBasket, MessageCircle, MapPin, Clock } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShoppingBasket className="w-6 h-6 text-primary" />
              <span className="font-heading text-xl font-bold">Bendito Hogar</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">
              Tu minimarket de confianza en Jacura. Todo lo que necesitas a tu alcance.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-3 text-sm text-primary-foreground/70">
              <a
                href="https://wa.me/584221790195"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                +58 0422-1790195
              </a>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Jacura, Venezuela
              </p>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-4">Horarios</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Lun - Sáb: 8 AM – 9 PM
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                Dom: 8 AM – 4 PM
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Minimarket Bendito Hogar. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
