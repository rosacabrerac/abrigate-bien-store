import type { Product } from "../data/products";
import SizeChartModal from "./SizeChartModal";

interface CartInteractionViewProps {
  product: Product;
  selectedSize: string;
  selectedColor: string;
  isAdded: boolean;
  isModalOpen: boolean;
  onSizeChange: (size: string) => void;
  onColorChange: (color: string) => void;
  onAddToCart: () => void;
  onOpenModal: () => void;
  onCloseModal: () => void;
}

export default function CartInteractionView({
  product,
  selectedSize,
  selectedColor,
  isAdded,
  isModalOpen,
  onSizeChange,
  onColorChange,
  onAddToCart,
  onOpenModal,
  onCloseModal,
}: CartInteractionViewProps) {
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
                onChange={() => onColorChange(color.name)}
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
        <div className="flex justify-between items-baseline w-full mb-3">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
            Seleccioná tu Talle:
          </span>
          <button
            type="button"
            className="text-xs text-slate-300 hover:text-brand transition-colors font-medium flex items-center gap-1.5 cursor-pointer"
            onClick={onOpenModal}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="13"
              height="13"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <title>Regla</title>
              <path d="M5 5h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Z" />
              <path d="M19 17v-4" />
              <path d="M15 17v-2" />
              <path d="M11 17v-4" />
              <path d="M7 17v-2" />
            </svg>
            Abrir Guía de Talles
          </button>
        </div>

        <div className="flex gap-2 py-2">
          {product.sizes.map((size) => (
            <label key={size.name} className="cursor-pointer">
              <input
                type="radio"
                name={`size-${product.id}`}
                value={size.name}
                className="sr-only peer"
                checked={selectedSize === size.name}
                onChange={() => onSizeChange(size.name)}
              />
              <span className="size-selector">{size.name}</span>
            </label>
          ))}
        </div>
      </div>

      <button
        type="button"
        className={`text-white font-bold w-full py-4 rounded-xl transition-opacity mt-4 cursor-pointer ${isAdded ? "bg-emerald-500" : "bg-brand hover:opacity-90"}`}
        onClick={onAddToCart}
        disabled={isAdded}
      >
        {isAdded ? "¡Añadido!" : "Añadir al Carrito"}
      </button>

      <SizeChartModal isOpen={isModalOpen} onClose={onCloseModal} />
    </div>
  );
}
