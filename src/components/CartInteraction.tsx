import { useState } from "react";
import type { Product } from "../data/products";
import { addItemsToCart } from "../store/cartStore";

export default function CartInteraction({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState("S");
  const [selectedColor, setSelectedColor] = useState("Slate");
  const [isAdded, setIsAdded] = useState(false);

  const handleAddToCart = () => {
    const itemToBeAdded = {
      id: product.id,
      name: product.name,
      price: product.price,
      description: product.description,
      image: product.image,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    addItemsToCart(itemToBeAdded);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4 py-2 w-full">
      <div>
        <h2>Color:</h2>
        <p>{selectedColor}</p>
        <div className="flex gap-3 py-2">
          <label className="cursor-pointer">
            <input
              type="radio"
              name={`color-${product.id}`}
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
              name={`color-${product.id}`}
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
              name={`color-${product.id}`}
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
        <div className="flex gap-2 py-2">
          <label className="cursor-pointer">
            <input
              type="radio"
              name={`size-${product.id}`}
              id={`size-s-${product.id}`}
              value="s"
              className="sr-only peer"
              checked={selectedSize === "S"}
              onChange={() => setSelectedSize("S")}
            />
            <span className="size-selector">S</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name={`size-${product.id}`}
              id={`size-m-${product.id}`}
              value="m"
              className="sr-only peer"
              checked={selectedSize === "M"}
              onChange={() => setSelectedSize("M")}
            />
            <span className="size-selector">M</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name={`size-${product.id}`}
              id={`size-l-${product.id}`}
              value="l"
              className="sr-only peer"
              checked={selectedSize === "L"}
              onChange={() => setSelectedSize("L")}
            />
            <span className="size-selector">L</span>
          </label>
          <label className="cursor-pointer">
            <input
              type="radio"
              name={`size-${product.id}`}
              id={`size-xl-${product.id}`}
              value="xl"
              className="sr-only peer"
              checked={selectedSize === "XL"}
              onChange={() => setSelectedSize("XL")}
            />
            <span className="size-selector">XL</span>
          </label>
        </div>
      </div>
      <button
        type="button"
        className={`flex items-center justify-center gap-2 text-center cursor-pointer p-2 my-2 rounded-lg w-full max-w-sm text-slate-800 font-bold transition-colors duration-300 ${isAdded ? "bg-emerald-500" : "bg-orange-400"}`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "¡Añadido!" : "Añadir al Carrito"}
      </button>
    </div>
  );
}
