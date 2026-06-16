import { useStore } from "@nanostores/react";
import {
  cartItems,
  clearCart,
  getWhatsAppUrl,
  isCartOpen,
  removeItemFromCart,
} from "../store/cartStore";
import Drawer from "./Drawer";

export default function CartDrawer() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);

  const isNotEmpty = Object.keys($cartItems).length > 0;

  return (
    <Drawer
      isOpen={$isCartOpen}
      onClose={() => isCartOpen.set(false)}
      className="w-full sm:max-w-md bg-[var(--color-bg)]"
      ariaLabel="Carrito de compras"
    >
      <div className="p-4 flex flex-col h-full text-white/80">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={() => isCartOpen.set(false)}
            className="p-2 hover:bg-white/10 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-500 cursor-pointer"
            aria-label="Cerrar carrito"
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
              <title>Borrar producto del carrito</title>
              <path fill="none" stroke="none" d="M0 0h24v24H0z" />
              <path d="M18 6 6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <ul className="flex-grow overflow-y-auto my-4 pr-1">
          {Object.values($cartItems).map((item) => (
            <li
              key={`${item.id}-${item.size}`}
              className="flex items-center justify-between py-4 border-b border-[var(--color-border)]"
            >
              <div className="flex flex-col gap-1">
                <span>
                  {item.quantity} x {item.name} -{" "}
                  <span className="font-semibold">${item.price}</span>
                </span>
                <span className="text-xs text-slate-400">
                  Talle: {item.size} | Color: {item.color}
                </span>
              </div>

              <button
                type="button"
                title="Close"
                onClick={() =>
                  removeItemFromCart(`${item.id}-${item.size}-${item.color}`)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                >
                  <title>Borrar producto del carrito</title>
                  <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                  <path d="M4 7l16 0" />
                  <path d="M10 11l0 6" />
                  <path d="M14 11l0 6" />
                  <path d="M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12" />
                  <path d="M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3" />
                </svg>
              </button>
            </li>
          ))}
        </ul>
        {isNotEmpty ? (
          <div className="mt-auto flex flex-col gap-3">
            <button
              type="button"
              onClick={() => {
                const confirmacion = window.confirm(
                  "¿Seguro que quieres vaciar el carrito?",
                );
                if (confirmacion) {
                  clearCart();
                }
              }}
              className="flex items-center justify-center gap-2 text-center cursor-pointer bg-red-400 p-2 rounded-lg w-full text-slate-800 font-bold"
            >
              Vaciar Carrito
            </button>
            <a
              href={getWhatsAppUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-center cursor-pointer bg-orange-400 p-2 rounded-lg w-full text-slate-800 font-bold"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>WhatsApp</title>
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52s.198-.298.298-.497c.099-.198.05-.371-.025-.52s-.669-1.612-.916-2.207c-.242-.579-.487-.5-.669-.51a13 13 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074s2.096 3.2 5.077 4.487c.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413s.248-1.289.173-1.413c-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.82 9.82 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.82 11.82 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.9 11.9 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 0 0-3.48-8.413" />
              </svg>
              Terminar la compra por WhatsApp
            </a>
          </div>
        ) : (
          <p className="text-center text-slate-400 my-auto">
            Tu carrito está vacío
          </p>
        )}
      </div>
    </Drawer>
  );
}
