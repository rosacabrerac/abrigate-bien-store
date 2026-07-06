import type { ImageMetadata } from "astro";
import camperaCaballero from "../assets/products/campera-caballero.png";
import camperaDama from "../assets/products/campera-dama.png";
import chalecoCaballero from "../assets/products/chaleco-caballero.png";
import chalecoDama from "../assets/products/chaleco-dama.png";
import { slugify } from "../utils/slugify";

export const rawProducts = [
  {
    id: "0",
    name: "Chaleco Polar Técnico — Dama",
    price: 2500,
    description: `Chaleco de polar técnico de alto rendimiento con diseño anatómico entallado que se adapta a la silueta femenina. Ideal como capa intermedia o exterior en climas fríos moderados, proporcionando calidez sin restringir el movimiento.

Construido con tejido polar de densidad media (200 g/m²), ofrece un excelente aislamiento térmico reteniendo el calor corporal y facilitando la evaporación del sudor. Cuenta con costuras planas anti-roce y paneles laterales elásticos para mayor comodidad.

Fabricado en 100% poliéster reciclado de secado rápido, cuenta con bolsillos con cierre YKK y cuello alto reforzado con protector de mentón para evitar el paso del viento.`,

    image: chalecoDama,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    colors: [
      { name: "Gris", hex: "#64748b" },
      { name: "Azul", hex: "#05198a" },
      { name: "Bordó", hex: "#380324" },
    ],
  },
  {
    id: "1",
    name: "Chaleco Polar Técnico — Caballero",
    price: 2500,
    description: `Chaleco polar técnico diseñado para el hombre activo, perfecto para capas térmicas en climas variables. Su corte ergonómico y hombros reforzados ofrecen durabilidad adicional y previenen el desgaste al usar mochila.

Desarrollado con polar de densidad media (200 g/m²) y alta retención de calor, proporciona una barrera efectiva contra el frío manteniendo una excelente transpirabilidad durante actividades de alta intensidad.

Confeccionado con fibras sintéticas de poliéster de alta resistencia, incorpora tres bolsillos externos con cierre térmico, cordón de ajuste elástico en el dobladillo para sellar el calor y cuello alto con protección contra el viento.
`,
    image: chalecoCaballero,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    colors: [
      { name: "Gris", hex: "#64748b" },
      { name: "Azul", hex: "#05198a" },
      { name: "Negro", hex: "#000" },
    ],
  },
  {
    id: "2",
    name: "Campera de Expedición Polar — Dama",
    price: 4900,
    description: `Campera térmica de expedición diseñada para brindar protección extrema a mujeres en condiciones de frío intenso. Su silueta estilizada y ergonómica permite un ajuste cómodo tanto sola como debajo de una campera impermeable.

Fabricada con polar de alta densidad (300 g/m²), esta prenda destaca por su capacidad de aislamiento térmico superior. Incorpora una membrana cortaviento interna en el pecho y espalda que bloquea las ráfagas heladas sin comprometer la respirabilidad.

El material es poliéster premium con tratamiento antipilling (antipelusa) de larga duración. Cuenta con puños elásticos ajustados, bolsillos laterales con cierre para calentar las manos y un cuello alto protector con forro de microfibra ultrasuave.
`,
    image: camperaDama,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    colors: [
      { name: "Gris", hex: "#64748b" },
      { name: "Azul", hex: "#05198a" },
      { name: "Negro", hex: "#000" },
    ],
  },
  {
    id: "3",
    name: "Campera de Expedición Polar — Caballero",
    price: 4900,
    description: `Campera térmica de alta gama concebida para expediciones y actividades de montaña bajo climas severos. Diseñada con un corte atlético y refuerzos ripstop (antidesgarro) en hombros y codos para resistir la abrasión en terrenos difíciles.

Su confección en tejido polar ultra-denso (300 g/m²) retiene de manera excepcional la temperatura corporal en reposo y movimiento. La estructura del tejido proporciona un escudo cortaviento eficiente y una excelente resistencia a lloviznas ligeras.

Elaborada con materiales sintéticos de alto desempeño técnico, incluye cierre frontal completo con solapa interior, puños ajustables con velcro, múltiples bolsillos de seguridad con cierre y un dobladillo ajustable mediante cordón elástico.
`,
    image: camperaCaballero,
    sizes: [{ name: "S" }, { name: "M" }, { name: "L" }, { name: "XL" }],
    colors: [
      { name: "Gris", hex: "#64748b" },
      { name: "Azul", hex: "#05198a" },
      { name: "Negro", hex: "#000" },
    ],
  },
];

interface ProductSize {
  name: string;
  price?: number;
}

interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: ImageMetadata;
  slug: string;
  sizes: ProductSize[];
  colors: ProductColor[];
}

export const products: Product[] = rawProducts.map((product) => ({
  ...product,
  slug: slugify(product.name),
}));
