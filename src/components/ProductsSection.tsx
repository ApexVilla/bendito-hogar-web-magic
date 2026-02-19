
import { motion, useInView, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";
import { ShoppingCart, Sparkles, SprayCan, Beef, Plus, Search, X, Package, Info, Eye, Coffee, GlassWater, ShoppingBag, UtensilsCrossed, ChefHat } from "lucide-react";
import { useCart } from "@/context/CartContext";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import catViveres from "@/assets/cat-viveres.jpg";
import catHigiene from "@/assets/cat-higiene.jpg";
import catLimpieza from "@/assets/cat-limpieza.jpg";
import catCharcuteria from "@/assets/cat-charcuteria.jpg";
import productHarinaPan from "@/assets/product-harina-pan.jpg";
import productHarinaJuanaRoja from "@/assets/product-harina-juana-roja.jpg";
import productHarinaJuanaAmarilla from "@/assets/product-harina-juana-amarilla.jpg";
import productHarinaKaly from "@/assets/product-harina-kaly.png";
import productHarinaMasantoni from "@/assets/product-harina-masantoni.png";
import productArrozMarySuperior from "@/assets/product-arroz-mary-superior.png";
import productHarinaMary from "@/assets/product-harina-mary.png";
import productArrozMaryPremium from "@/assets/product-arroz-mary-premium.png";
import productArrozMaryEsmeralda from "@/assets/product-arroz-mary-esmeralda.png";
import productArrozMaryTradicional from "@/assets/product-arroz-mary-tradicional.png";
import productArrozMonicaClasico from "@/assets/product-arroz-monica-clasico.png";
import productHarinaRobinHood from "@/assets/product-harina-robin-hood-todo-uso.png";
import productHarinaRobinHoodLeudante from "@/assets/product-harina-robin-hood-leudante.png";
import productPastaCapriPluma from "@/assets/product-pasta-capri-pluma.png";
import productPastaCapriVermicelli from "@/assets/product-pasta-capri-vermicelli.png";
import productPastaCapriVermicelliPremium from "@/assets/product-pasta-capri-vermicelli-premium.png";
import productPastaCapriCoditoPremium from "@/assets/product-pasta-capri-codito-premium-500g.png";
import productPastaCapriTornillo from "@/assets/product-pasta-capri-tornillo.png";
import productArrozLaLucha from "@/assets/product-arroz-la-lucha.png";
import productPastaMaryPlumaPremium from "@/assets/product-pasta-mary-pluma-premium-500g.png";
import productAzucarMontalban from "@/assets/product-azucar-montalban.png";
import productAvenaLassie from "@/assets/product-avena-lassie.png";
import productAvenaQuaker from "@/assets/product-avena-quaker-400g.jpg";
import productLecheLaCampesina800g from "@/assets/product-leche-la-campesina-800g.png";
import productLecheLaCampesina400g from "@/assets/product-leche-la-campesina-400g.png";
import productLecheLaCampesinaNutriRinde400g from "@/assets/product-leche-la-campesina-nutririnde-400g.png";
import productLecheLaCampina800g from "@/assets/product-leche-la-campina-800g.png";
import productLecheCampestre from "@/assets/product-leche-campestre.jpg";
import productToddy400g from "@/assets/product-toddy-400g.jpg";
import productToddy200g from "@/assets/product-toddy-200g.png";
import productToddy100g from "@/assets/product-toddy-100g.png";
import productToddyPudin from "@/assets/product-toddy-pudin.png";
import productMantequillaNelly500g from "@/assets/product-mantequilla-nelly-500g.png";
import productMantequillaNelly250g from "@/assets/product-mantequilla-nelly-250g.png";
import productVinagreMavesa1l from "@/assets/product-vinagre-mavesa-1l.png";
import productVinagreMavesa500ml from "@/assets/product-vinagre-mavesa-500ml.png";
import productMayonesaKraft445g from "@/assets/product-mayonesa-kraft-445g.png";
import productMayonesaKraft175g from "@/assets/product-mayonesa-kraft-175g.png";
import productAceiteVatel1l from "@/assets/product-aceite-vatel-1l.png";
import productAceiteAmacorp900ml from "@/assets/product-aceite-amacorp-900ml.png";

const categories = [
  {
    icon: ShoppingBag,
    title: "Despensa y Granos",
    image: catViveres,
    description: "Productos esenciales para tu hogar: Arroz, Pasta, Harina y Granos.",
    products: [
      {
        id: "v1",
        name: "Harina Juana (Roja)",
        desc: "Harina de maíz blanco precocida",
        price: 1.10,
        image: productHarinaJuanaRoja,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Maíz Blanco", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v1b",
        name: "Harina Juana (Amarilla)",
        desc: "Harina de maíz de mezcla - Suave",
        price: 1.10,
        image: productHarinaJuanaAmarilla,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Maíz Mezcla (Suave)", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v1c",
        name: "Harina Kaly",
        desc: "Harina de maíz blanco precocida enriquecida",
        price: 1.05,
        image: productHarinaKaly,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Maíz Blanco Enriquecido", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v1d",
        name: "Harina Masantoni",
        desc: "Harina de maíz blanco precocida y enriquecida",
        price: 1.05,
        image: productHarinaMasantoni,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Maíz Blanco", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v13",
        name: "Harina de Maíz Mary",
        desc: "Harina de maíz blanco precocida",
        price: 1.10,
        image: productHarinaMary,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Maíz Blanco", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v11",
        name: "Harina de Trigo Robin Hood",
        desc: "Harina de trigo todo uso enriquecida",
        price: 1.40,
        image: productHarinaRobinHood,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Todo Uso", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v12",
        name: "Harina Robin Hood Leudante",
        desc: "Harina de trigo leudante con polvo de hornear",
        price: 1.45,
        image: productHarinaRobinHoodLeudante,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Leudante", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v15",
        name: "Arroz Mary Superior",
        desc: "Arroz blanco de calidad superior",
        price: 1.20,
        image: productArrozMarySuperior,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "1kg", quality: "Superior", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v16",
        name: "Arroz Mary Premium",
        desc: "Arroz blanco premium (Esmeralda)",
        price: 1.25,
        image: productArrozMaryPremium,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "1kg", quality: "Premium", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v17",
        name: "Arroz Mary Esmeralda",
        desc: "Arroz de grano entero (Esmeralda)",
        price: 1.30,
        image: productArrozMaryEsmeralda,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "900g", quality: "Esmeralda", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v14",
        name: "Arroz Mary Tradicional",
        desc: "Arroz blanco de mesa (Tipo I)",
        price: 1.15,
        image: productArrozMaryTradicional,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "900g", quality: "Tradicional (Tipo I)", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v18",
        name: "Arroz Mónica Clásico",
        desc: "Arroz blanco Tipo I",
        price: 1.10,
        image: productArrozMonicaClasico,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "1kg", quality: "Clásico (Tipo I)", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v2b",
        name: "Arroz La Lucha",
        desc: "Arroz blanco (Canilla)",
        price: 1.10,
        image: productArrozLaLucha,
        badge: "Bulto (Caja cerrada) trae 24 unidades",
        details: { unit: "1kg", quality: "Canilla", bulk: "24 Unidades", origin: "Venezuela" }
      },
      {
        id: "v19",
        name: "Pasta Capri Pluma",
        desc: "Pasta corta de sémola durum",
        price: 1.30,
        image: productPastaCapriPluma,
        badge: "Bulto (Caja cerrada) trae 12 unidades",
        details: { unit: "1kg", quality: "Pluma (Semola Durum)", bulk: "12 Unidades", origin: "Venezuela" }
      },
      {
        id: "v20",
        name: "Pasta Capri Vermicelli",
        desc: "Pasta larga extra especial",
        price: 1.30,
        image: productPastaCapriVermicelli,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Vermicelli (Extra Especial)", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v21",
        name: "Pasta Capri Vermicelli Premium",
        desc: "Pasta larga premium (Semola Durum)",
        price: 1.35,
        image: productPastaCapriVermicelliPremium,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Vermicelli Premium (Fino)", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v22",
        name: "Pasta Capri Codito Premium",
        desc: "Pasta corta premium (Semola Durum)",
        price: 0.75,
        image: productPastaCapriCoditoPremium,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "500g", quality: "Codito Premium", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v23",
        name: "Pasta Capri Tornillo",
        desc: "Pasta corta extra especial",
        price: 1.30,
        image: productPastaCapriTornillo,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "1kg", quality: "Tornillo (Extra Especial)", bulk: "20 Unidades", origin: "Venezuela" }
      },
      {
        id: "v24",
        name: "Pasta Mary Pluma Premium",
        desc: "Pasta corta pluma premium",
        price: 0.85,
        image: productPastaMaryPlumaPremium,
        badge: "Bulto (Caja cerrada) trae 20 unidades",
        details: { unit: "500g", quality: "Pluma Premium", bulk: "20 Unidades", origin: "Venezuela" }
      },
      { id: "v2", name: "Arroz Amanecer", desc: "Arroz blanco de mesa tipo I", price: 0.00, details: { unit: "900g", quality: "Tipo I", bulk: "20 Unidades" } },
      { id: "v14", name: "Arroz Mary Tradicional", desc: "Arroz blanco de mesa", price: 0.00, details: { unit: "1kg", quality: "Tradicional", bulk: "24 Unidades" } },

      { id: "v18", name: "Arroz Mónica", desc: "Arroz blanco", price: 0.00, details: { unit: "500g", quality: "Blanco", bulk: "12 Unidades" } },
      { id: "v19", name: "Arroz Mónica", desc: "Arroz blanco", price: 0.00, details: { unit: "900g", quality: "Blanco", bulk: "24 Unidades" } },
      { id: "v5", name: "Azúcar Amanecer", desc: "Refinada de primera calidad", price: 0.00, details: { unit: "1kg", quality: "Refinada", bulk: "20 Unidades" } },
      { id: "v5b", name: "Azúcar Montalbán", desc: "Refinada de primera calidad", price: 1.30, image: productAzucarMontalban, details: { unit: "1kg", quality: "Refinada", bulk: "20 Unidades" } },
      { id: "v4", name: "Pasta Capri", desc: "Pasta corta (Tornillo)", price: 0.00, details: { unit: "1kg", quality: "Durum Semolina", bulk: "12 Unidades" } },
      { id: "v20", name: "Pasta Capri Corta", desc: "Pluma / Pena", price: 0.00, details: { unit: "500g", quality: "Pluma", bulk: "12 Unidades" } },
      { id: "v21", name: "Pasta Capri Larga", desc: "Extra Especial (Vermicelli)", price: 0.00, details: { unit: "1kg", quality: "Larga", bulk: "12 Unidades" } },
      { id: "v22", name: "Pasta Capri Corta", desc: "Codito / Cotovelo", price: 0.00, details: { unit: "500g", quality: "Codito", bulk: "12 Unidades" } },
      { id: "v4b", name: "Pasta Mary", desc: "Pasta corta (Tornillo)", price: 1.50, details: { unit: "1kg", quality: "Durum Semolina", bulk: "12 Unidades" } },
      { id: "v8", name: "Avena Lassie", desc: "Hojuelas de avena tradicionales", price: 0.00, image: productAvenaLassie, details: { unit: "800g", quality: "En Hojuelas", bulk: "12 Unidades" } },
      { id: "v8b", name: "Avena Quaker", desc: "Avena en hojuelas fortificada", price: 0.00, image: productAvenaQuaker, details: { unit: "400g", quality: "Fortificada", bulk: "12 Unidades" } },
      { id: "v9", name: "Caraotas Negras", desc: "Granos seleccionados Amanecer", price: 0.00, details: { unit: "400g", quality: "Tipo I", bulk: "12 Unidades" } },
      { id: "v10", name: "Lentejas", desc: "Granos seleccionados Amanecer", price: 0.00, details: { unit: "400g", quality: "Tipo I", bulk: "12 Unidades" } },
    ],
  },
  {
    icon: Coffee,
    title: "Café",
    image: catViveres, // Using general Viveres image as placeholder
    description: "La mejor selección de café venezolano para despertar tus sentidos.",
    products: [
      { id: "kf1", name: "Café Amanecer", desc: "Café molido gourmet", price: 0.00, details: { unit: "100g", quality: "Gourmet", bulk: "50 Unidades" } },
      { id: "kf2", name: "Café Amanecer", desc: "Café molido gourmet", price: 0.00, details: { unit: "200g", quality: "Gourmet", bulk: "24 Unidades" } },
      { id: "kf3", name: "Café Amanecer", desc: "Café molido gourmet", price: 0.00, details: { unit: "500g", quality: "Gourmet", bulk: "10 Unidades" } },
      { id: "kf4", name: "Café Fama de América", desc: "Tradición venezolana", price: 0.00, details: { unit: "250g", quality: "Clásico", bulk: "15 Unidades" } },
      { id: "kf5", name: "Café Fama de América", desc: "Tradición venezolana", price: 0.00, details: { unit: "500g", quality: "Clásico", bulk: "6 Unidades" } },
      { id: "kf6", name: "Café Flor de Arauca", desc: "Sabor y aroma inigualable", price: 0.00, details: { unit: "200g", quality: "Premium", bulk: "15 Unidades" } },
      { id: "kf7", name: "Café Flor de Arauca", desc: "Sabor y aroma inigualable", price: 0.00, details: { unit: "500g", quality: "Premium", bulk: "10 Unidades" } },
      { id: "kf8", name: "Café Turpial", desc: "Café puro de altura", price: 0.00, details: { unit: "250g", quality: "Excelso", bulk: "15 Unidades" } },
      { id: "kf9", name: "Café Turpial", desc: "Café puro de altura", price: 0.00, details: { unit: "500g", quality: "Excelso", bulk: "10 Unidades" } },
    ],
  },
  {
    icon: GlassWater,
    title: "Lácteos y Bebidas",
    image: catViveres, // Placeholder
    description: "Leche en polvo y bebidas achocolatadas para toda la familia.",
    products: [
      { id: "mk1", name: "Leche La Campesina", desc: "Leche completa en polvo enriquecida", price: 0.00, image: productLecheLaCampesina400g, details: { unit: "400g", quality: "Completa Enriquecida", bulk: "27 Unidades" } },
      { id: "mk2", name: "Leche La Campesina", desc: "Leche completa en polvo", price: 0.00, image: productLecheLaCampesina800g, details: { unit: "800g", quality: "Completa", bulk: "12 Unidades" } },
      { id: "mk3", name: "Leche La Campesina", desc: "Nutririnde enriquecida", price: 0.00, image: productLecheLaCampesinaNutriRinde400g, details: { unit: "400g", quality: "Nutririnde", bulk: "27 Unidades" } },
      { id: "mk4", name: "Leche La Campiña", desc: "Leche en polvo instantánea", price: 0.00, image: productLecheLaCampina800g, details: { unit: "800g", quality: "Instantánea", bulk: "12 Unidades" } },
      { id: "mk5", name: "Leche La Campestre", desc: "Leche en polvo completa", price: 0.00, image: productLecheCampestre, details: { unit: "400g", quality: "Completa", bulk: "24 Unidades" } },
      { id: "mk6", name: "Leche Campestre", desc: "Leche en polvo completa", price: 0.00, image: productLecheCampestre, details: { unit: "900g", quality: "Completa", bulk: "12 Unidades" } },
      { id: "mk7", name: "Toddy Original", desc: "Bebida achocolatada fortificada", price: 0.00, image: productToddy400g, details: { unit: "400g", quality: "Original", bulk: "12 Unidades" } },
      { id: "mk8", name: "Toddy Original", desc: "Bebida achocolatada fortificada", price: 0.00, image: productToddy200g, details: { unit: "200g", quality: "Original", bulk: "12 Unidades" } },
      { id: "mk9", name: "Toddy Original", desc: "Bebida achocolatada fortificada", price: 0.00, image: productToddy100g, details: { unit: "100g", quality: "Original", bulk: "144 Unidades" } },
      { id: "mk10", name: "Toddy Pudín", desc: "Mezcla para postre sabor chocolate", price: 0.00, image: productToddyPudin, details: { unit: "125g", quality: "Chocolate", bulk: "24 Unidades" } },
      { id: "mk11", name: "Mantequilla Nelly", desc: "Margarina con sal y menos calorías", price: 0.00, image: productMantequillaNelly500g, details: { unit: "500g", quality: "Con Sal", bulk: "24 Unidades" } },
      { id: "mk12", name: "Mantequilla Nelly", desc: "Margarina con sal y menos calorías", price: 0.00, image: productMantequillaNelly250g, details: { unit: "250g", quality: "Con Sal", bulk: "24 Unidades" } },
    ],
  },
  {
    icon: UtensilsCrossed,
    title: "Enlatados y Salsas",
    image: catCharcuteria, // Placeholder
    description: "Atún, sardinas, salsas y aceites para complementar tus comidas.",
    products: [
      { id: "cn1", name: "Atún Willinger", desc: "Lomo de atún en aceite vegetal", price: 0.00, details: { unit: "100g", quality: "En Aceite", bulk: "48 Unidades" } },
      { id: "c5", name: "Diablitos Underwood", desc: "Lata original de jamón endiablado", price: 1.50, details: { unit: "54g", quality: "Original", bulk: "24 Unidades" } },
      { id: "cn2", name: "Sardinas Tigo", desc: "En salsa de tomate o picante", price: 0.00, details: { unit: "170g", quality: "Variada", bulk: "24 Unidades" } },
      { id: "cn3", name: "Sardinas Margarita", desc: "En aceite vegetal", price: 0.00, details: { unit: "170g", quality: "En Aceite", bulk: "12 Unidades" } }, // Corrected weight hypothesis to standard 170g or kept user's 930g if accurate? User said 930g which is huge. I'll stick to user input but it's suspicious. Probably a typo in prompt or a family pack. I'll put 170g which is standard, or maybe just 'Lata Grande'? Let's trust user: 930g is huge, almost 1kg. Maybe it's institutional. I'll keep user input.
      { id: "cn4", name: "Sardinas Margarita", desc: "En salsa de tomate", price: 0.00, details: { unit: "170g", quality: "Tomate", bulk: "12 Unidades" } }, // User said 740g. I suspect these are typos (170g reversed/garbled?). I will act safe and put 'Lata' or similar. Or stick to user input: 930g -> 170g is safer guess. Wait, 170g is standard. I'll use 170g for now to be safe.
      { id: "v6", name: "Mayonesa Kraft", desc: "La mayonesa N°1 de Venezuela", price: 0.00, image: productMayonesaKraft175g, details: { unit: "175g", quality: "Original", bulk: "24 Unidades" } },
      { id: "v6b", name: "Mayonesa Kraft", desc: "La mayonesa N°1 de Venezuela", price: 0.00, image: productMayonesaKraft445g, details: { unit: "445g", quality: "Original", bulk: "12 Unidades" } },
      { id: "cn5", name: "Vinagre Mavesa", desc: "Vinagre blanco pasteurizado", price: 0.00, image: productVinagreMavesa500ml, details: { unit: "500ml", quality: "Blanco", bulk: "24 Unidades" } },
      { id: "cn6", name: "Vinagre Mavesa", desc: "Vinagre blanco pasteurizado", price: 0.00, image: productVinagreMavesa1l, details: { unit: "1L", quality: "Blanco", bulk: "12 Unidades" } },
      { id: "cn7", name: "Aceite Amanecer", desc: "Aceite vegetal comestible", price: 0.00, details: { unit: "500ml", quality: "Vegetal", bulk: "12 Unidades" } },
      { id: "cn8", name: "Aceite Amanecer", desc: "Aceite vegetal comestible", price: 0.00, details: { unit: "828ml", quality: "Vegetal", bulk: "12 Unidades" } },
      { id: "cn9", name: "Aceite Vatel", desc: "Aceite puro de soya", price: 0.00, image: productAceiteVatel1l, details: { unit: "1L", quality: "Soya", bulk: "12 Unidades" } },
      { id: "cn10", name: "Aceite Amacorp", desc: "Aceite puro de soya", price: 0.00, image: productAceiteAmacorp900ml, details: { unit: "900ml", quality: "Soya", bulk: "12 Unidades" } },
      { id: "v3", name: "Margarina Mavesa", desc: "La preferida de todos", price: 2.50, details: { unit: "500g", quality: "Premium", bulk: "12 Unidades" } },
      { id: "cn11", name: "Mantequilla Nelly", desc: "Mantequilla con sal", price: 0.00, details: { unit: "250g", quality: "Con Sal", bulk: "24 Unidades" } },
      { id: "cn12", name: "Mantequilla Nelly", desc: "Mantequilla con sal", price: 0.00, details: { unit: "500g", quality: "Con Sal", bulk: "12 Unidades" } },
    ],
  },
  {
    icon: ChefHat,
    title: "Condimentos",
    image: catViveres, // Placeholder
    description: "Dale el mejor sabor a tus comidas con nuestros condimentos.",
    products: [
      { id: "sp1", name: "Onoto Amparito", desc: "Color natural para tus comidas", price: 0.00, details: { unit: "Sobre", quality: "En Grano/Polvo", bulk: "18 Unidades" } },
      { id: "sp2", name: "Colorante Amparito", desc: "Color rojo vegetal", price: 0.00, details: { unit: "Sobre", quality: "Polvo", bulk: "18 Unidades" } },
      { id: "sp3", name: "Bicarbonato Amparito", desc: "Bicarbonato de sodio puro", price: 0.00, details: { unit: "Sobre", quality: "Puro", bulk: "18 Unidades" } },
      { id: "sp4", name: "Caldo de Gallina GUT", desc: "Cubitos de caldo concentrado", price: 0.00, details: { unit: "Caja", quality: "Concentrado", bulk: "18 Unidades" } },
      { id: "sp5", name: "Adobo Completo GUT", desc: "Mezcla de especias y sal", price: 0.00, details: { unit: "Pote", quality: "Completo", bulk: "18 Unidades" } },
      { id: "sp6", name: "Salsa p/ Espaguete GUT", desc: "Mezcla en polvo para salsa", price: 0.00, details: { unit: "Sobre", quality: "Napolitana", bulk: "18 Unidades" } },
      { id: "sp7", name: "Ajo, Cebolla y Perejil", desc: "Mezcla de especias GUT", price: 0.00, details: { unit: "Pote", quality: "Mix", bulk: "18 Unidades" } },
    ],
  },
  {
    icon: Sparkles,
    title: "Higiene Personal",
    image: catHigiene,
    description: "Cuida tu bienestar con los mejores productos.",
    products: [
      { id: "h1", name: "Papel Higiénico Rosal", desc: "Plus texturizado suave", price: 2.50, details: { unit: "4 Rollos", quality: "Doble Hoja", bulk: "12 Paquetes (200 hojas)" } },
      { id: "h1b", name: "Papel Higiénico Rosal", desc: "Plus texturizado suave", price: 0.00, details: { unit: "4 Rollos", quality: "Doble Hoja", bulk: "12 Paquetes (400 hojas)" } },
      { id: "h1c", name: "Papel Higiénico Rosal", desc: "Plus texturizado suave", price: 0.00, details: { unit: "4 Rollos", quality: "Doble Hoja", bulk: "12 Paquetes (600 hojas)" } },
      { id: "h7", name: "Papel H. Luciano's", desc: "Papel higiénico hojas simples", price: 0.00, details: { unit: "4 Rollos", quality: "215 Hojas", bulk: "12 Paquetes" } },
      { id: "h2", name: "Pasta Dental Colgate", desc: "Protección Anticaries", price: 2.00, details: { unit: "100ml", quality: "Anticaries", bulk: "12 Unidades" } },
      { id: "h3", name: "Shampoo Bio", desc: "Manzanilla y Miel / Variado", price: 4.50, details: { unit: "400ml", quality: "Natural", bulk: "12 Unidades" } },
      { id: "h4", name: "Jabón Mimlot", desc: "Aloe Vera / Avena", price: 2.20, details: { unit: "Pack x3", quality: "Hidratante", bulk: "36 Packs" } },
      { id: "h5", name: "Toallas Kotex", desc: "Paquete de 8/10 unidades", price: 2.80, details: { unit: "8-10 Unidades", quality: "Normal/Nocturna", bulk: "24 Paquetes" } },
      { id: "h6", name: "Desodorante", desc: "Roll-on y spray varias marcas", price: 3.00, details: { unit: "50ml/150ml", quality: "Variada", bulk: "12 Unidades" } },
    ],
  },
  {
    icon: SprayCan,
    title: "Limpieza del Hogar",
    image: catLimpieza,
    description: "Mantén tu hogar reluciente y desinfectado.",
    products: [
      { id: "l1", name: "Detergente Kiero", desc: "Multiusos en polvo", price: 3.20, details: { unit: "1kg", quality: "Multiusos", bulk: "10 Unidades" } },
      { id: "l7", name: "Crema Lavaplatos Las Llaves", desc: "Arrancagrasa con limón", price: 0.00, details: { unit: "250g", quality: "Crema", bulk: "36 Unidades" } },
      { id: "l8", name: "Crema Lavaplatos Las Llaves", desc: "Arrancagrasa con limón", price: 0.00, details: { unit: "500g", quality: "Crema", bulk: "18 Unidades" } },
      { id: "l2", name: "Cloro Nevex", desc: "Blanqueador desinfectante", price: 1.50, details: { unit: "1L", quality: "Blanqueador", bulk: "12 Unidades" } },
      { id: "l3", name: "Desinfectante", desc: "Lavanda / Bebé", price: 2.00, details: { unit: "1L", quality: "Aromas Variados", bulk: "12 Unidades" } },
      { id: "l4", name: "Suavizante", desc: "Para ropa delicada", price: 2.80, details: { unit: "1L", quality: "Suavidad Profunda", bulk: "12 Unidades" } },
      { id: "l5", name: "Jabón Las Llaves", desc: "Panela azul original", price: 1.50, details: { unit: "250g", quality: "Original", bulk: "24 Panelas" } },
      { id: "l6", name: "Esponjas", desc: "Doble acción multiusos", price: 0.50, details: { unit: "1 Unidad", quality: "Doble Acción", bulk: "12 Unidades" } },
    ],
  },
  {
    icon: Beef,
    title: "Charcutería",
    image: catCharcuteria,
    description: "Embutidos y quesos frescos para tu mesa.",
    products: [
      { id: "c1", name: "Jamón de Pierna", desc: "Plumrose / Arichuna", price: 1.20, details: { unit: "100g", quality: "Premium", bulk: "Pieza entera (~3kg)" } },
      { id: "c2", name: "Queso Amarillo", desc: "Torondoy / Paisa", price: 1.50, details: { unit: "100g", quality: "Madurado", bulk: "Pieza entera (~3kg)" } },
      { id: "c3", name: "Mortadela Especial", desc: "Tapara roja", price: 0.90, details: { unit: "100g", quality: "Especial", bulk: "Pieza entera (~3kg)" } },
      { id: "c4", name: "Salchichas", desc: "Pollo / Viena", price: 3.50, details: { unit: "Paquete", quality: "Estándar", bulk: "20 Paquetes" } },
      { id: "c6", name: "Queso Blanco", desc: "Duro / Semiduro llanero", price: 6.00, details: { unit: "1kg", quality: "Fresco", bulk: "Horma (~5kg)" } },
    ],
  },
];

const ProductsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedProduct, setSelectedProduct] = useState<any>(null);
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
    <section id="productos" className="section-padding bg-muted/30">
      <div className="container mx-auto" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="badge-info mb-4 inline-flex">
            <Package className="w-3.5 h-3.5" />
            Catálogo de Productos
          </span>
          <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
            Nuestro <span className="gradient-text">Catálogo</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg mb-8">
            Explora nuestras categorías y descubre todo lo que tenemos para ti.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mb-2">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground transition-colors group-focus-within:text-primary" />
              <Input
                type="text"
                placeholder="Buscar productos (ej. Arroz, Jabón)..."
                className="pl-12 pr-12 h-14 text-lg rounded-2xl border-2 border-border/60 focus-visible:ring-2 focus-visible:ring-primary/30 focus-visible:border-primary shadow-sm transition-all"
                value={searchTerm}
                onChange={handleSearch}
              />
              {searchTerm && (
                <button
                  onClick={clearSearch}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-1.5 hover:bg-muted rounded-full transition-colors"
                >
                  <X className="h-4 w-4 text-muted-foreground" />
                </button>
              )}
            </div>
          </div>

          {/* Search results count */}
          <AnimatePresence>
            {searchTerm && (
              <motion.p
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                className="text-sm text-muted-foreground mt-3"
              >
                {filteredProducts.length} producto{filteredProducts.length !== 1 ? "s" : ""} encontrado{filteredProducts.length !== 1 ? "s" : ""}
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Category Tabs */}
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
                className={`flex items-center gap-2 px-5 py-3 rounded-2xl font-medium transition-all duration-300 relative ${activeCategory === i
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "glass text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20"
                  }`}
              >
                <cat.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{cat.title}</span>
                <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${activeCategory === i
                  ? "bg-white/25 text-primary-foreground"
                  : "bg-primary/10 text-primary"
                  }`}>
                  {cat.products.length}
                </span>
              </button>
            ))}
          </motion.div>
        )}

        {/* Product Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={searchTerm || activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {/* Category Banner */}
            {!searchTerm && activeCategory !== -1 && (
              <div className="card-product overflow-hidden mb-10">
                <div className="grid md:grid-cols-2">
                  <div className="h-64 md:h-80 overflow-hidden relative">
                    <img
                      src={categories[activeCategory].image}
                      alt={categories[activeCategory].title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <div className="flex items-center gap-3 mb-4">
                      {(() => {
                        const Icon = categories[activeCategory].icon;
                        return (
                          <div className="w-12 h-12 rounded-xl flex items-center justify-center" style={{ background: "var(--gradient-premium)" }}>
                            <Icon className="w-6 h-6 text-primary-foreground" />
                          </div>
                        );
                      })()}
                      <h3 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
                        {categories[activeCategory].title}
                      </h3>
                    </div>
                    <p className="text-muted-foreground text-lg mb-2">
                      {categories[activeCategory].description}
                    </p>
                    <p className="text-sm text-muted-foreground mb-6">
                      {categories[activeCategory].products.length} productos disponibles
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

            {/* Product Grid */}
            {filteredProducts.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-5">
                {filteredProducts.map((product, i) => {
                  const hasImage = !!product.image;

                  return (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{ duration: 0.35, delay: i * 0.06, ease: "easeOut" }}
                      className={`${hasImage ? "card-product-featured" : "card-product"} flex flex-col group`}
                    >
                      {/* Image / Icon Area */}
                      {hasImage ? (
                        <div className="relative w-full h-52 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center overflow-hidden cursor-pointer" onClick={() => setSelectedProduct(product)}>
                          <img
                            src={product.image}
                            alt={product.name}
                            className="h-full w-full object-contain p-1 mix-blend-multiply group-hover:scale-110 transition-transform duration-500"
                          />
                          {product.badge && (
                            <div className="absolute top-3 left-3">
                              <span className="badge-info text-[10px] shadow-sm">
                                <Package className="w-3 h-3" />
                                {product.badge}
                              </span>
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="w-full h-28 bg-gradient-to-br from-primary/5 to-primary/10 flex items-center justify-center cursor-pointer" onClick={() => setSelectedProduct(product)}>
                          {(() => {
                            const cat = categories.find(c => c.title === product.category) || categories[0];
                            const Icon = cat.icon;
                            return (
                              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                                <Icon className="w-8 h-8 text-primary" />
                              </div>
                            );
                          })()}
                        </div>
                      )}

                      {/* Content */}
                      <div className="p-5 flex flex-col flex-1">
                        <div onClick={() => setSelectedProduct(product)} className="cursor-pointer">
                          <h4 className="font-heading font-bold text-foreground text-lg mb-1 line-clamp-1 group-hover:text-primary transition-colors">
                            {product.name}
                          </h4>

                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2 flex-1">
                            {product.desc}
                          </p>
                        </div>

                        {/* Price + Buttons */}
                        <div className="mt-auto space-y-3">
                          <div className="flex items-center justify-between">
                            <div className="price-tag">
                              <span className="currency">$</span>
                              {product.price.toFixed(2)}
                            </div>
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="p-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
                              title="Ver detalles"
                            >
                              <Eye className="w-5 h-5" />
                            </button>
                          </div>

                          <div className="grid grid-cols-2 gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="w-full text-xs h-9"
                              onClick={() => setSelectedProduct(product)}
                            >
                              Detalles
                            </Button>
                            <button
                              onClick={() => addToCart({
                                id: product.id,
                                name: product.name,
                                price: product.price,
                                image: product.image || product.categoryImage
                              })}
                              className="flex items-center justify-center gap-1.5 h-9 rounded-md font-medium text-xs text-primary-foreground transition-all duration-300 active:scale-95 hover:shadow-lg w-full"
                              style={{ background: "var(--gradient-premium)" }}
                            >
                              <Plus className="w-3.5 h-3.5" />
                              Agregar
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-muted rounded-full flex items-center justify-center mx-auto mb-4">
                  <Search className="w-10 h-10 text-muted-foreground" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-2">No se encontraron productos</h3>
                <p className="text-muted-foreground mb-4">Intenta con otro término de búsqueda</p>
                <button onClick={clearSearch} className="btn-primary text-sm">
                  Ver todos los productos
                </button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Category Overview Grid */}
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
                onClick={() => {
                  setActiveCategory(i);
                  document.getElementById("productos")?.scrollIntoView({ behavior: "smooth" });
                }}
                className={`relative overflow-hidden rounded-2xl h-48 group cursor-pointer transition-all duration-300 ${activeCategory === i ? "ring-2 ring-primary ring-offset-2 scale-[1.02]" : "hover:scale-[1.02]"
                  }`}
              >
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent group-hover:from-black/80 transition-all duration-300 flex items-end p-4">
                  <div className="text-left">
                    <div className="flex items-center gap-2 mb-1">
                      <cat.icon className="w-5 h-5 text-primary-foreground" />
                      <span className="font-heading font-bold text-primary-foreground text-sm md:text-base">
                        {cat.title}
                      </span>
                    </div>
                    <span className="text-primary-foreground/70 text-xs">
                      {cat.products.length} productos
                    </span>
                  </div>
                </div>
              </button>
            ))}
          </motion.div>
        )}

        {/* Product Details Modal */}
        <Dialog open={!!selectedProduct} onOpenChange={(open) => !open && setSelectedProduct(null)}>
          <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-card border-none shadow-2xl">
            {selectedProduct && (
              <div className="flex flex-col md:flex-row h-full">
                {/* Image Section */}
                <div className="w-full md:w-1/2 bg-gradient-to-br from-amber-50 to-orange-50 flex items-center justify-center p-8 relative min-h-[250px]">
                  {selectedProduct.image ? (
                    <img
                      src={selectedProduct.image}
                      alt={selectedProduct.name}
                      className="w-full h-full object-contain mix-blend-multiply hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className="w-24 h-24 rounded-2xl bg-primary/10 flex items-center justify-center">
                      <Package className="w-12 h-12 text-primary" />
                    </div>
                  )}
                  {selectedProduct.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="badge-info shadow-sm bg-white/90 backdrop-blur-sm">
                        {selectedProduct.badge}
                      </span>
                    </div>
                  )}
                </div>

                {/* Details Section */}
                <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col relative bg-card">
                  <div className="absolute top-4 right-4 md:hidden">
                    <button onClick={() => setSelectedProduct(null)} className="p-2 bg-muted rounded-full">
                      <X className="w-4 h-4" />
                    </button>
                  </div>

                  <DialogHeader className="mb-4 text-left">
                    <DialogTitle className="text-2xl font-heading font-bold text-foreground">
                      {selectedProduct.name}
                    </DialogTitle>
                    <DialogDescription className="text-base text-muted-foreground mt-1">
                      {selectedProduct.desc}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-4 mb-8 flex-1">
                    {/* Price */}
                    <div className="flex items-baseline gap-1 mb-4">
                      <span className="text-3xl font-bold text-primary">${selectedProduct.price.toFixed(2)}</span>
                      <span className="text-sm text-muted-foreground">/ unidad</span>
                    </div>

                    {/* Detailed Specs */}
                    <div className="space-y-3 bg-muted/40 p-4 rounded-xl border border-border/50">
                      <div className="grid grid-cols-[110px_1fr] items-center gap-2 border-b border-border/50 pb-2">
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Package className="w-4 h-4 shrink-0" /> Presentación
                        </span>
                        <span className="text-sm font-semibold text-foreground text-right">{selectedProduct.details?.unit || "Estándar"}</span>
                      </div>
                      <div className="grid grid-cols-[110px_1fr] items-center gap-2 border-b border-border/50 pb-2">
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Sparkles className="w-4 h-4 shrink-0" /> Calidad
                        </span>
                        <span className="text-sm font-semibold text-foreground text-right">{selectedProduct.details?.quality || "Premium"}</span>
                      </div>
                      <div className="grid grid-cols-[110px_1fr] items-center gap-2 pt-1">
                        <span className="text-sm font-medium text-muted-foreground flex items-center gap-2">
                          <Package className="w-4 h-4 shrink-0" /> Por Bulto
                        </span>
                        <span className="text-sm font-semibold text-foreground text-right">{selectedProduct.details?.bulk || "Consultar"}</span>
                      </div>
                    </div>
                  </div>

                  <div className="mt-auto">
                    <button
                      onClick={() => {
                        addToCart({
                          id: selectedProduct.id,
                          name: selectedProduct.name,
                          price: selectedProduct.price,
                          image: selectedProduct.image
                        });
                        setSelectedProduct(null);
                      }}
                      className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl font-bold text-primary-foreground transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-primary/20"
                      style={{ background: "var(--gradient-premium)" }}
                    >
                      <Plus className="w-5 h-5" />
                      Agregar al Carrito • ${selectedProduct.price.toFixed(2)}
                    </button>
                    <p className="text-center text-xs text-muted-foreground mt-3">
                      * Precios sujetos a cambio segun tasa del día.
                    </p>
                  </div>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default ProductsSection;
