import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MessageCircle, MapPin, Clock, Phone, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [form, setForm] = useState({ name: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = encodeURIComponent(
      `Hola, soy ${form.name}. ${form.message}`
    );
    window.open(`https://wa.me/584221790195?text=${text}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 3000);
  };

  return (
    <section id="contacto" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            <span className="gradient-text">Contáctanos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            ¡Estamos para servirte! Escríbenos por WhatsApp o visítanos en nuestra tienda.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">WhatsApp</h3>
                <a
                  href="https://wa.me/584221790195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  +58 0422-1790195
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <MapPin className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Ubicación</h3>
                <p className="text-muted-foreground">Jacura, Venezuela</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center shrink-0">
                <Clock className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">Horarios</h3>
                <p className="text-muted-foreground">Lunes a Sábado: 8:00 AM – 9:00 PM</p>
                <p className="text-muted-foreground">Domingos: 8:00 AM – 4:00 PM</p>
              </div>
            </div>

            {/* Map embed */}
            <div className="rounded-xl overflow-hidden border border-border h-48">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15587.0!2d-69.85!3d10.95!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zSmFjdXJh!5e0!3m2!1ses!2sve!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Minimarket Bendito Hogar"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <form onSubmit={handleSubmit} className="card-product p-8 space-y-6">
              <h3 className="font-heading text-xl font-bold text-foreground flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                Envíanos un mensaje
              </h3>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tu nombre</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all"
                  placeholder="Ej: María"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Mensaje</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all resize-none"
                  placeholder="¿En qué podemos ayudarte?"
                />
              </div>

              <button
                type="submit"
                className="btn-whatsapp w-full justify-center text-lg"
              >
                <Send className="w-5 h-5" />
                {sent ? "¡Enviado!" : "Enviar por WhatsApp"}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
