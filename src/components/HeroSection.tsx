import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      {/* Overlay */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-heading font-bold text-primary-foreground mb-6 leading-tight"
        >
          Minimarket{" "}
          <span className="gradient-text">Bendito Hogar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl text-primary-foreground/90 mb-10 font-body"
        >
          Bienvenido a Minimarket Bendito Hogar – Todo lo que necesitas a tu alcance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#productos" className="btn-primary text-lg">
            Ver Productos
          </a>
          <a
            href="https://wa.me/584221790195"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
