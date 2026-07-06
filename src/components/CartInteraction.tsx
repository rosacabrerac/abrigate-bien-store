import { useState } from "react";
import type { Product } from "../data/products";
import { addItemToCart } from "../store/cartStore";
import Modal from "./Modal";

const SIZE_CHART = [
  {
    name: "S",
    chest: "88 - 94",
    waist: "76 - 82",
    hip: "88 - 94",
  },
  {
    name: "M",
    chest: "95 - 101",
    waist: "83 - 89",
    hip: "95 - 101",
  },
  {
    name: "L",
    chest: "102 - 108",
    waist: "90 - 96",
    hip: "102 - 108",
  },
  {
    name: "XL",
    chest: "109 - 115",
    waist: "97 - 103",
    hip: "109 - 115",
  },
];

export default function CartInteraction({ product }: { product: Product }) {
  const [selectedSize, setSelectedSize] = useState(product.sizes[0].name);
  const [selectedColor, setSelectedColor] = useState(product.colors[0].name);
  const [isAdded, setIsAdded] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const currentSize = product.sizes.find((size) => size.name === selectedSize);
  const finalPrice = currentSize?.price ?? product.price;

  const handleAddToCart = () => {
    const itemToBeAdded = {
      id: product.id,
      name: product.name,
      price: finalPrice,
      description: product.description,
      image: product.image.src,
      size: selectedSize,
      color: selectedColor,
      quantity: 1,
    };

    addItemToCart(itemToBeAdded);

    setIsAdded(true);

    setTimeout(() => {
      setIsAdded(false);
    }, 2000);
  };

  return (
    <div className="flex flex-col gap-4 py-2 w-full">
      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3 block">
          Color:{" "}
          <span className="text-white normal-case font-medium ml-1">
            {selectedColor}
          </span>
        </span>
        <div className="flex gap-3 py-2">
          {product.colors.map((color) => (
            <label key={color.name} className="cursor-pointer">
              <input
                type="radio"
                name={`color-${product.id}`}
                value={color.name}
                className="sr-only peer"
                checked={selectedColor === color.name}
                onChange={() => setSelectedColor(color.name)}
                aria-label={`Color ${color.name}`}
              />
              <span
                className={`w-8 h-8 inline-block rounded-full border border-white/20 peer-checked:ring-2 peer-checked:ring-offset-2 peer-checked:ring-gray-400 peer-checked:ring-offset-[#07101d]`}
                style={{ backgroundColor: color.hex }}
              ></span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400 mb-3 block">
          Seleccioná tu Talle:
        </span>
        <div className="flex gap-2 py-2">
          {product.sizes.map((size) => (
            <label key={size.name} className="cursor-pointer">
              <input
                type="radio"
                name={`size-${product.id}`}
                value={size.name}
                className="sr-only peer"
                checked={selectedSize === size.name}
                onChange={() => setSelectedSize(size.name)}
              />
              <span className="size-selector">{size.name}</span>
            </label>
          ))}
        </div>

        <button
          type="button"
          className="text-brand underline cursor-pointer mt-3 inline-block hover:text-orange-400 transition-colors"
          onClick={() => setIsModalOpen(true)}
        >
          Abrir Guía de Talles
        </button>
      </div>

      <button
        type="button"
        className={`text-white font-bold w-full py-4 rounded-xl transition-opacity mt-4 cursor-pointer ${isAdded ? "bg-emerald-500" : "bg-brand hover:opacity-90"}`}
        onClick={handleAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "¡Añadido!" : "Añadir al Carrito"}
      </button>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        ariaLabel="Guía de Talles"
      >
        <div>
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-semibold uppercase tracking-wider text-brand">
              Guía de Talles
            </h2>

            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
              aria-label="Cerrar guía de talles"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.75"
                aria-labelledby="title"
                className="icon icon-tabler icons-tabler-outline icon-tabler-x cursor-pointer"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Cerrar Guía de Talles</title>
                <path fill="none" stroke="none" d="M0 0h24v24H0z" />
                <path d="M18 6 6 18M6 6l12 12" />
              </svg>
            </button>
          </div>

          <table className="w-full border-collapse mt-6 text-left text-sm">
            <thead>
              <tr>
                <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                  Talle
                </th>
                <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                  Pecho (cm)
                </th>
                <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                  Cintura (cm)
                </th>
                <th className="border-b border-white/10 pb-3 text-slate-300 font-semibold">
                  Cadera (cm)
                </th>
              </tr>
            </thead>

            <tbody>
              {SIZE_CHART.map((row) => (
                <tr
                  key={row.name}
                  className="hover:bg-white/5 transition-colors"
                >
                  <td className="py-3 border-b border-white/5 text-slate-400">
                    {row.name}
                  </td>
                  <td className="py-3 border-b border-white/5 text-slate-400">
                    {row.chest}
                  </td>
                  <td className="py-3 border-b border-white/5 text-slate-400">
                    {row.waist}
                  </td>
                  <td className="py-3 border-b border-white/5 text-slate-400">
                    {row.hip}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="mt-6 pt-6 border-t border-white/10">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-brand mb-3">
              Cómo tomar mis medidas para saber mi talle
            </h3>
            <ul className="text-sm text-slate-400 leading-relaxed">
              <li>
                <span className="font-semibold text-slate-300">Pecho:</span>{" "}
                Medí la parte más ancha del pecho, manteniendo la cinta métrica
                horizontal y floja.
              </li>
              <li>
                <span className="font-semibold text-slate-300">Cintura:</span>{" "}
                Medí alrededor de la parte más angosta de la cintura (justo
                encima del ombligo.
              </li>
              <li>
                <span className="font-semibold text-slate-300">Cadera:</span>{" "}
                Con los pies juntos, medí la parte más ancha de la cadera.
              </li>
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  );
}
