import { motion } from "framer-motion";
import { MessageCircle, ChevronDown } from "lucide-react";
import heroBg from "@/assets/hero-logo-bg.png";

const HeroSection = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background container */}
      <div className="absolute inset-0" style={{ backgroundColor: "#82ac7a" }}>
        {/* Logo background */}
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-60"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "60%", // Adjust this to make the logo the right size
          }}
        />
      </div>
      {/* Overlay for text legibility if needed, but the green background is solid enough */}
      <div className="absolute inset-0 bg-black/20" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-[20%] w-4 h-4 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-primary/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto drop-shadow-md">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-sm">
            🏪 Tu minimarket de confianza
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="text-4xl md:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
        >
          Minimarket{" "}
          <span className="text-white drop-shadow-md">Bendito Hogar</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-white/95 mb-12 font-body max-w-xl mx-auto drop-shadow-md font-medium"
        >
          Bienvenido a Minimarket Bendito Hogar – Todo lo que necesitas a tu alcance
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#productos" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300">
            Ver Productos
          </a>
          <a
            href="https://wa.me/584221790195"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-whatsapp text-lg bg-white/10 backdrop-blur-sm border border-white/20 text-primary-foreground hover:bg-white/20"
          >
            <MessageCircle className="w-5 h-5" />
            Contáctanos
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#nosotros" className="flex flex-col items-center gap-1 text-primary-foreground/50 hover:text-primary-foreground/80 transition-colors">
          <span className="text-xs font-medium">Descubre más</span>
          <ChevronDown className="w-5 h-5 animate-scroll-indicator" />
        </a>
      </motion.div>
    </section>
  );
};

export default HeroSection;
