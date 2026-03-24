import { useState } from "react";
import type { Product } from "../data/products";
import { addItemsToCart } from "../store/cartStore";

export default function CartInteraction({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Slate");

  const handleAddToCart = () => {
    const itemToBeAdded = {
      id: String(product.id),
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    addItemsToCart(itemToBeAdded);
  };

  return (
    <div className="flex gap-2 py-2">
      <div>
        <h2>Color:</h2>
        <p>{selectedColor}</p>
        <div className="flex gap-3 py-2">
          <label className="cursor-pointer">
            <input
              type="radio"
              name="color"
              value="slate"
              className="sr-only peer"
              checked={selectedColor === "Slate"}
              onChange={() => setSelectedColor("Slate")}
              aria-label="Color Gris"
            />
            <span className="w-6 h-6 inline-block rounded-full bg-slate-400 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-400"></span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="color"
              value="blue"
              className="sr-only peer"
              checked={selectedColor === "Blue"}
              onChange={() => setSelectedColor("Blue")}
              aria-label="Color Azul"
            />
            <span className="w-6 h-6 inline-block rounded-full bg-blue-400 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-400"></span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name="color"
              value="black"
              className="sr-only peer"
              checked={selectedColor === "Black"}
              onChange={() => setSelectedColor("Black")}
              aria-label="Color Negro"
            />
            <span className="w-6 h-6 inline-block rounded-full bg-black peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-400"></span>
          </label>
        </div>
      </div>
      <div>
        <h2>Seleccioná tu Talle:</h2>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="size"
            id="size-s"
            value="s"
            className="sr-only peer"
            checked={selectedSize === "S"}
            onChange={() => setSelectedSize("S")}
          />
          <span className="px-4 py-2 border rounded-md peer-checked:bg-blue-500 peer-checked:text-white transition-colors">
            S
          </span>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="size"
            id="size-m"
            value="m"
            className="sr-only peer"
            checked={selectedSize === "M"}
            onChange={() => setSelectedSize("M")}
          />
          <span className="px-4 py-2 border rounded-md peer-checked:bg-blue-500 peer-checked:text-white transition-colors">
            M
          </span>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="size"
            id="size-l"
            value="l"
            className="sr-only peer"
            checked={selectedSize === "L"}
            onChange={() => setSelectedSize("L")}
          />
          <span className="px-4 py-2 border rounded-md peer-checked:bg-blue-500 peer-checked:text-white transition-colors">
            L
          </span>
        </label>
        <label className="cursor-pointer">
          <input
            type="radio"
            name="size"
            id="size-xl"
            value="xl"
            className="sr-only peer"
            checked={selectedSize === "XL"}
            onChange={() => setSelectedSize("XL")}
          />
          <span className="px-4 py-2 border rounded-md peer-checked:bg-blue-500 peer-checked:text-white transition-colors">
            XL
          </span>
        </label>
      </div>
      <button
        type="button"
        className="flex items-center justify-center gap-2 text-center cursor-pointer bg-orange-400 p-2 my-2 rounded-lg w-90 text-slate-800 font-bold"
        onClick={handleAddToCart}
      >
        Añadir al Carrito
      </button>
    </div>
  );
}
