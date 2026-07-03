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
    description:
      "Chaleco de polar técnico aislante, diseño anatómico y térmico para mujer.",
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
    description:
      "Chaleco de polar técnico aislante con detalles reforzados para hombre.",
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
    description:
      "Campera térmica de polar de alta densidad para mujer, con cierre completo y protección contra viento.",
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
    description:
      "Campera térmica de polar de alta densidad para hombre, con bolsillos reforzados y cierre completo.",
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
