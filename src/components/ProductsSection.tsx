
import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Sparkles, SprayCan, Beef, Plus, Search, X } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
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
      { id: "v1", name: "Harina P.A.N.", desc: "Harina de maíz blanco precocida 1kg", price: 1.10 },
      { id: "v2", name: "Arroz Mary", desc: "Arroz blanco de mesa tipo I 1kg", price: 1.20 },
      { id: "v3", name: "Margarina Mavesa", desc: "500g - La preferida de todos", price: 2.50 },
      { id: "v4", name: "Pasta Mary", desc: "Vermicelli / Spaghetti 1kg", price: 1.50 },
      { id: "v5", name: "Azúcar Montalbán", desc: "Refinada de primera calidad 1kg", price: 1.30 },
      { id: "v6", name: "Mayonesa Mavesa", desc: "445g - El rico sabor de mavesa", price: 3.00 },
    ],
  },
  {
    icon: Sparkles,
    title: "Higiene Personal",
    image: catHigiene,
    products: [
      { id: "h1", name: "Papel Higiénico Rosal", desc: "Paquete de 4 rollos", price: 2.50 },
      { id: "h2", name: "Pasta Dental Colgate", desc: "Protección Anticaries 100ml", price: 2.00 },
      { id: "h3", name: "Shampoo Bio", desc: "Manzanilla y Miel / Variado", price: 4.50 },
      { id: "h4", name: "Jabón Mimlot", desc: "Aloe Vera / Avena pack x3", price: 2.20 },
      { id: "h5", name: "Toallas Kotex", desc: "Paquete de 8/10 unidades", price: 2.80 },
      { id: "h6", name: "Desodorante", desc: "Roll-on y spray varias marcas", price: 3.00 },
    ],
  },
  {
    icon: SprayCan,
    title: "Productos de Limpieza",
    image: catLimpieza,
    products: [
      { id: "l1", name: "Detergente Kiero", desc: "Multiusos en polvo 1kg", price: 3.20 },
      { id: "l2", name: "Cloro Nevex", desc: "Blanqueador desinfectante", price: 1.50 },
      { id: "l3", name: "Desinfectante", desc: "Lavanda / Bebé 1L", price: 2.00 },
      { id: "l4", name: "Suavizante", desc: "Para ropa delicada", price: 2.80 },
      { id: "l5", name: "Jabón Las Llaves", desc: "Panela azul original", price: 1.50 },
      { id: "l6", name: "Esponjas", desc: "Doble acción multiusos", price: 0.50 },
    ],
  },
  {
    icon: Beef,
    title: "Charcutería",
    image: catCharcuteria,
    products: [
      { id: "c1", name: "Jamón de Pierna", desc: "Plumrose / Arichuna (x100g)", price: 1.20 },
      { id: "c2", name: "Queso Amarillo", desc: "Torondoy / Paisa (x100g)", price: 1.50 },
      { id: "c3", name: "Mortadela Especial", desc: "Tapara roja (x100g)", price: 0.90 },
      { id: "c4", name: "Salchichas", desc: "Pollo / Viena paquete", price: 3.50 },
      { id: "c5", name: "Diablitos Underwood", desc: "Lata 54g original", price: 1.50 },
      { id: "c6", name: "Queso Blanco", desc: "Duro / Semiduro llanero (x1kg)", price: 6.00 },
    ],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const { addToCart } = useCart();

  const allProducts = categories.flatMap(cat => cat.products.map(p => ({ ...p, category: cat.title, categoryImage: cat.image })));

  const filteredProducts = searchTerm
    ? allProducts.filter(p =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.desc.toLowerCase().includes(searchTerm.toLowerCase())
    )
    : categories[activeCategory].products.map(p => ({ ...p, category: categories[activeCategory].title, categoryImage: categories[activeCategory].image }));

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    if (e.target.value) setActiveCategory(-1);
    else setActiveCategory(0);
  };

  const clearSearch = () => {
    setSearchTerm("");
    setActiveCategory(0);
  };

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
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Explora nuestras categorías y descubre todo lo que tenemos para ti.
          </p>

          <div className="relative max-w-md mx-auto mb-10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Buscar productos (ej. Arroz, Jabón)..."
                className="pl-10 pr-10 h-12 text-lg rounded-full border-primary/20 focus-visible:ring-primary shadow-sm"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-1/2 -translate-y-1/2 p-1 hover:bg-muted rounded-full"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Category tabs - Only show if not searching */}
        {!searchTerm && (
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
                className={`flex items-center gap-2 px-5 py-3 rounded-full font-medium transition-all duration-300 ${activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-card text-muted-foreground hover:bg-primary/10 hover:text-primary"
                  }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{cat.title}</span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Product display area */}
        <motion.div
          key={searchTerm || activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Category header with image - Only show if NOT searching */}
          {!searchTerm && activeCategory !== -1 && (
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
          )}

          {/* Product grid */}
          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {filteredProducts.map((product, i) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: i * 0.05 }}
                  className="card-product p-5 flex flex-col items-center text-center group"
                >
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {(() => {
                      // Find icon for product category
                      const cat = categories.find(c => c.title === product.category) || categories[0];
                      const Icon = cat.icon;
                      return <Icon className="w-6 h-6 text-primary" />;
                    })()}
                  </div>
                  <h4 className="font-heading font-bold text-foreground text-lg mb-1 line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-muted-foreground text-sm mb-2 h-10 line-clamp-2">{product.desc}</p>
                  <p className="text-primary font-bold text-lg mb-3">${product.price.toFixed(2)}</p>

                  <button
                    onClick={() => addToCart({
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      image: product.categoryImage
                    })}
                    className="w-full bg-primary text-primary-foreground py-2 rounded-md font-medium flex items-center justify-center gap-2 hover:brightness-110 transition-all active:scale-95"
                  >
                    <Plus className="w-4 h-4" />
                    Agregar
                  </button>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-muted-foreground" />
              </div>
              <h3 className="font-heading text-lg font-bold">No se encontraron productos</h3>
              <p className="text-muted-foreground">Intenta con otro término de búsqueda</p>
            </div>
          )}
        </motion.div>

        {/* All categories overview - Only show if not searching */}
        {!searchTerm && (
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
                className={`relative overflow-hidden rounded-xl h-48 group cursor-pointer ${activeCategory === i ? "ring-2 ring-primary ring-offset-2" : ""
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
        )}
      </div>
    </section>
  );
};

export default ProductsSection;
