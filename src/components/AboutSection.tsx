import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Heart, Users, Star } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Cercanía",
    description: "Somos parte de tu comunidad, siempre listos para atenderte con calidez.",
  },
  {
    icon: Users,
    title: "Confianza",
    description: "Productos de calidad a precios justos para tu familia.",
  },
  {
    icon: Star,
    title: "Variedad",
    description: "Encuentra todo lo que necesitas en un solo lugar, cerca de tu hogar.",
  },
];

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="nosotros" className="section-padding bg-background">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Quiénes <span className="gradient-text">Somos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            En Minimarket Bendito Hogar nos dedicamos a ofrecerte los mejores productos con la
            atención cálida y cercana que mereces. Somos tu tienda de confianza en Jacura.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="card-product p-8 text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-heading text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
