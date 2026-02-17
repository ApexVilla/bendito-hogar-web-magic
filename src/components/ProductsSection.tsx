import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Sparkles, SprayCan, Beef } from "lucide-react";

const categories = [
  {
    icon: ShoppingCart,
    title: "Víveres en General",
    description: "Arroz, pasta, harinas, aceites, enlatados y todo lo esencial para tu cocina.",
    items: ["Arroz", "Pasta", "Aceite", "Harina", "Enlatados", "Granos"],
  },
  {
    icon: Sparkles,
    title: "Higiene Personal",
    description: "Cuidado personal de las mejores marcas a precios accesibles.",
    items: ["Jabón", "Shampoo", "Crema dental", "Desodorante"],
  },
  {
    icon: SprayCan,
    title: "Productos de Limpieza",
    description: "Mantén tu hogar impecable con nuestra variedad de productos de limpieza.",
    items: ["Detergente", "Cloro", "Desinfectante", "Suavizante"],
  },
  {
    icon: Beef,
    title: "Charcutería",
    description: "Embutidos y charcutería fresca de la mejor calidad para tu mesa.",
    items: ["Jamón", "Queso", "Mortadela", "Salchichas"],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="productos" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Encuentra todo lo que necesitas organizado por categorías para tu comodidad.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="card-product p-8"
            >
              <div className="flex items-start gap-5">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <category.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">{category.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.items.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
