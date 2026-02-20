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
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }}>
        {/* Logo background */}
        <div
          className="absolute inset-0 bg-no-repeat opacity-50 hidden md:block" // Hidden on small screens if you want, but let's keep it visible
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "85% center", // Move to the right
            backgroundSize: "45%", // Make it fit half the screen nicely
          }}
        />
        <div
          className="absolute inset-0 bg-no-repeat opacity-40 block md:hidden"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundPosition: "center top 20%",
            backgroundSize: "80%",
          }}
        />
      </div>
      {/* Overlay removed per user request for a lighter background */}
      {/* <div className="absolute inset-0 bg-black/20" /> */}

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-[10%] w-3 h-3 bg-primary/30 rounded-full animate-float" style={{ animationDelay: "0s" }} />
        <div className="absolute top-40 right-[15%] w-2 h-2 bg-primary/20 rounded-full animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute bottom-32 left-[20%] w-4 h-4 bg-primary/25 rounded-full animate-float" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[60%] right-[25%] w-2 h-2 bg-primary/15 rounded-full animate-float" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-32 md:mt-0">
        <div className="max-w-2xl text-left drop-shadow-md bg-black/10 md:bg-transparent p-6 md:p-0 rounded-2xl backdrop-blur-sm md:backdrop-blur-none border border-white/10 md:border-none">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="mb-6 flex justify-start"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium bg-white/20 backdrop-blur-md border border-white/50 text-white shadow-sm">
              🏪 Tu minimarket de confianza
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight drop-shadow-lg"
          >
            Minimarket <br className="hidden md:block" />
            <span className="text-white drop-shadow-md">Bendito Hogar</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/95 mb-12 font-body max-w-xl drop-shadow-md font-medium"
          >
            Bienvenido a Minimarket Bendito Hogar – Todo lo que necesitas a tu alcance
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a href="#productos" className="bg-white text-primary px-8 py-4 rounded-lg font-bold text-lg hover:scale-105 hover:shadow-xl transition-all duration-300 text-center">
              Ver Productos
            </a>
            <a
              href="https://wa.me/584221790195"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-whatsapp text-lg bg-green-500/20 backdrop-blur-sm border border-green-400 text-white hover:bg-green-500/40 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Contáctanos
            </a>
          </motion.div>
        </div>
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
