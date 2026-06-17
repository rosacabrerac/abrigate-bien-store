import { slugify } from "../utils/slugify";

export const rawProducts = [
  {
    id: "0",
    name: "Buzo Térmico de Primera Piel",
    price: 1850,
    description: "Buzo térmico con detalles en cuero.",
    image:
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "1",
    name: "Chaleco Aislante Performance",
    price: 1450,
    description: "Chaleco térmico con detalles en negro.",
    image:
      "https://images.unsplash.com/photo-1761426230485-ce314616691b?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "2",
    name: "Campera de Expedición Ártica",
    price: 4900,
    description: "Campera térmica con detalles en azul y blanco.",
    image:
      "https://images.unsplash.com/photo-1773240306707-2a07fc569fde?auto=format&fit=crop&q=80&w=800",
  },
  {
    id: "3",
    name: "Calza Térmica de Compresión",
    price: 1200,
    description: "Calza térmica con bolsillos.",
    image:
      "https://images.unsplash.com/photo-1540054015980-0a70a82d5fb6?auto=format&fit=crop&q=80&w=800",
  },
];

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  slug: string;
}

export const products = rawProducts.map((product) => ({
  ...product,
  slug: slugify(product.name),
}));
