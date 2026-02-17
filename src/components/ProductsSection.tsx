import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Sparkles, SprayCan, Beef } from "lucide-react";
import catViveres from "@/assets/cat-viveres.jpg";
import catHigiene from "@/assets/cat-higiene.jpg";
import catLimpieza from "@/assets/cat-limpieza.jpg";
import catCharcuteria from "@/assets/cat-charcuteria.jpg";

const categories = [
  {
    icon: ShoppingCart,
    title: "Víveres en General",
    image: catViveres,
    products: [
      { name: "Arroz", desc: "1kg - Variedad de marcas" },
      { name: "Pasta", desc: "500g - Todas las formas" },
      { name: "Aceite", desc: "Vegetal y de oliva" },
      { name: "Harina de Maíz", desc: "Precocida 1kg" },
      { name: "Enlatados", desc: "Atún, sardinas y más" },
      { name: "Granos", desc: "Caraotas, lentejas, arvejas" },
    ],
  },
  {
    icon: Sparkles,
    title: "Higiene Personal",
    image: catHigiene,
    products: [
      { name: "Jabón de Baño", desc: "Barra y líquido" },
      { name: "Shampoo", desc: "Diversas marcas" },
      { name: "Crema Dental", desc: "Protección completa" },
      { name: "Desodorante", desc: "Roll-on y spray" },
      { name: "Papel Higiénico", desc: "Paquetes individuales" },
      { name: "Toallas Sanitarias", desc: "Varias presentaciones" },
    ],
  },
  {
    icon: SprayCan,
    title: "Productos de Limpieza",
    image: catLimpieza,
    products: [
      { name: "Detergente", desc: "En polvo y líquido" },
      { name: "Cloro", desc: "Desinfección total" },
      { name: "Desinfectante", desc: "Pisos y superficies" },
      { name: "Suavizante", desc: "Para tu ropa" },
      { name: "Jabón de Platos", desc: "Líquido y en barra" },
      { name: "Esponjas", desc: "Multiusos" },
    ],
  },
  {
    icon: Beef,
    title: "Charcutería",
    image: catCharcuteria,
    products: [
      { name: "Jamón", desc: "De pierna y ahumado" },
      { name: "Queso", desc: "Blanco, amarillo, mozarella" },
      { name: "Mortadela", desc: "Fresca del día" },
      { name: "Salchichas", desc: "Variedad de tamaños" },
      { name: "Diablitos", desc: "Jamón endiablado" },
      { name: "Queso Crema", desc: "Para untar" },
    ],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section id="productos" className="section-padding bg-muted/50">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestro <span className="gradient-text">Catálogo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Explora nuestras categorías y descubre todo lo que tenemos para ti.
          </p>
        </motion.div>

        {/* Category tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
              }`}
            >
              <cat.icon className="w-5 h-5" />
              <span className="hidden sm:inline">{cat.title}</span>
            </button>
          ))}
        </motion.div>

        {/* Active category display */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Category header with image */}
          <div className="card-product overflow-hidden mb-8">
            <div className="grid md:grid-cols-2">
              <div className="h-64 md:h-80 overflow-hidden">
                <img
                  src={categories[activeCategory].image}
                  alt={categories[activeCategory].title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-4">
                  {(() => {
                    const Icon = categories[activeCategory].icon;
                    return (
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                    );
                  })()}
                  <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                    {categories[activeCategory].title}
                  </h3>
                </div>
                <p className="text-muted-foreground text-lg mb-6">
                  Descubre nuestra selección de productos de la mejor calidad al mejor precio.
                </p>
                <a
                  href="https://wa.me/584221790195"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp self-start"
                >
                  Consultar disponibilidad
                </a>
              </div>
            </div>
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {categories[activeCategory].products.map((product, i) => (
              <motion.div
                key={product.name}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="card-product p-5 flex flex-col items-center text-center group cursor-pointer"
              >
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  {(() => {
                    const Icon = categories[activeCategory].icon;
                    return <Icon className="w-6 h-6 text-primary" />;
                  })()}
                </div>
                <h4 className="font-heading font-bold text-foreground text-lg mb-1">
                  {product.name}
                </h4>
                <p className="text-muted-foreground text-sm">{product.desc}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* All categories overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {categories.map((cat, i) => (
            <button
              key={cat.title}
              onClick={() => setActiveCategory(i)}
              className={`relative overflow-hidden rounded-xl h-48 group cursor-pointer ${
                activeCategory === i ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
            >
              <img
                src={cat.image}
                alt={cat.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-foreground/50 group-hover:bg-foreground/60 transition-colors flex items-center justify-center">
                <div className="text-center">
                  <cat.icon className="w-8 h-8 text-primary-foreground mx-auto mb-2" />
                  <span className="font-heading font-bold text-primary-foreground text-sm md:text-base">
                    {cat.title}
                  </span>
                </div>
              </div>
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProductsSection;
