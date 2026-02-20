import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Flame, Clock, ArrowRight, ShoppingCart } from "lucide-react";
import { useCart } from "@/context/CartContext";

// Featured offer products — edit these to change daily offers
const dailyOffers = [
    {
        id: "offer-1",
        name: "Harina Pan 1kg",
        desc: "Harina de maíz blanco precocida",
        originalPrice: 1.50,
        offerPrice: 1.20,
        badge: "MÁS VENDIDO",
        image: null as string | null, // Set a product image if available
    },
    {
        id: "offer-2",
        name: "Arroz Mary Superior 900g",
        desc: "Arroz blanco de calidad superior",
        originalPrice: 1.50,
        offerPrice: 1.20,
        badge: "OFERTA",
        image: null as string | null,
    },
    {
        id: "offer-3",
        name: "Café Amanecer 200g",
        desc: "Café molido gourmet venezolano",
        originalPrice: 0.00,
        offerPrice: 0.00,
        badge: "NUEVO",
        image: null as string | null,
    },
    {
        id: "offer-4",
        name: "Pasta Capri Vermicelli 1kg",
        desc: "Pasta larga premium - Semola Durum",
        originalPrice: 1.60,
        offerPrice: 1.30,
        badge: "OFERTA",
        image: null as string | null,
    },
];

const OffersCarousel = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-50px" });
    const { addToCart } = useCart();

    return (
        <section className="section-padding bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
            <div className="container mx-auto" ref={ref}>
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 gap-4"
                >
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-bold"
                                style={{ background: "var(--gradient-promo)", color: "white" }}>
                                <Flame className="w-4 h-4" />
                                Ofertas del Día
                            </div>
                            <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-muted text-muted-foreground text-xs font-medium">
                                <Clock className="w-3.5 h-3.5" />
                                Actualizado hoy
                            </div>
                        </div>
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                            Productos <span className="gradient-text">Destacados</span>
                        </h2>
                    </div>

                    <a
                        href="#productos"
                        className="group flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all duration-300"
                    >
                        Ver todo el catálogo
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>

                {/* Offers Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                    {dailyOffers.map((offer, i) => {
                        const discount = offer.originalPrice > 0 && offer.offerPrice > 0
                            ? Math.round(((offer.originalPrice - offer.offerPrice) / offer.originalPrice) * 100)
                            : 0;

                        return (
                            <motion.div
                                key={offer.id}
                                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                                animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                                className="card-product-featured group flex flex-col"
                            >
                                {/* Image area */}
                                <div className="relative w-full h-40 md:h-48 bg-gradient-to-br from-slate-50 to-gray-100 flex items-center justify-center overflow-hidden">
                                    {offer.image ? (
                                        <img
                                            src={offer.image}
                                            alt={offer.name}
                                            className="h-full w-full object-contain p-3 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                                        />
                                    ) : (
                                        <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <ShoppingCart className="w-7 h-7 text-primary" />
                                        </div>
                                    )}

                                    {/* Badge */}
                                    <div className="absolute top-3 left-3">
                                        <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase shadow-sm backdrop-blur-sm ${offer.badge === "OFERTA" ? "bg-red-500/90 text-white" :
                                                offer.badge === "NUEVO" ? "bg-blue-500/90 text-white" :
                                                    "bg-emerald-500/90 text-white"
                                            }`}>
                                            {offer.badge === "OFERTA" && <Flame className="w-3 h-3" />}
                                            {offer.badge}
                                        </span>
                                    </div>

                                    {/* Discount badge */}
                                    {discount > 0 && (
                                        <div className="absolute top-3 right-3">
                                            <span className="price-discount text-[11px] font-extrabold shadow-sm">
                                                -{discount}%
                                            </span>
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="p-4 flex flex-col flex-1">
                                    <h4 className="font-heading font-bold text-foreground text-sm md:text-base mb-1 line-clamp-1 group-hover:text-primary transition-colors duration-300">
                                        {offer.name}
                                    </h4>
                                    <p className="text-muted-foreground text-xs mb-3 line-clamp-2">
                                        {offer.desc}
                                    </p>

                                    <div className="mt-auto space-y-2.5">
                                        {/* Price */}
                                        <div className="flex items-baseline gap-2">
                                            {offer.offerPrice > 0 ? (
                                                <>
                                                    <span className="text-lg font-bold text-primary">
                                                        ${offer.offerPrice.toFixed(2)}
                                                    </span>
                                                    {offer.originalPrice > offer.offerPrice && (
                                                        <span className="price-original">
                                                            ${offer.originalPrice.toFixed(2)}
                                                        </span>
                                                    )}
                                                </>
                                            ) : (
                                                <span className="text-sm font-medium text-muted-foreground">
                                                    Consultar precio
                                                </span>
                                            )}
                                        </div>

                                        {/* Add button */}
                                        <button
                                            onClick={() => addToCart({
                                                id: offer.id,
                                                name: offer.name,
                                                price: offer.offerPrice,
                                                image: offer.image || undefined,
                                            })}
                                            className="w-full flex items-center justify-center gap-1.5 h-9 rounded-xl font-semibold text-xs text-primary-foreground transition-all duration-300 active:scale-95 hover:shadow-lg hover:shadow-primary/20"
                                            style={{ background: "var(--gradient-premium)" }}
                                        >
                                            <ShoppingCart className="w-3.5 h-3.5" />
                                            Agregar
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default OffersCarousel;
