import { useStore } from "@nanostores/react";
import { useEffect, useMemo, useState } from "react";
import {
  cartItems,
  clearCart,
  getWhatsAppUrl,
  isCartOpen,
  removeItemFromCart,
} from "../store/cartStore";
import CartDrawerView from "./CartDrawerView";

export default function CartDrawer() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
  const [mounted, setMounted] = useState(false);
  const wppUrl = useMemo(() => getWhatsAppUrl($cartItems), [$cartItems]);

  useEffect(() => {
    setMounted(true);
  }, []);

  function handleRemoveItem(itemId: string) {
    removeItemFromCart(itemId);
  }

  function handleClearCart() {
    const confirmation = window.confirm(
      "¿Seguro que quieres vaciar el carrito?",
    );
    if (confirmation) {
      clearCart();
    }
  }

  return (
    <CartDrawerView
      isOpen={$isCartOpen}
      onClose={() => isCartOpen.set(false)}
      cartItems={$cartItems}
      mounted={mounted}
      wppUrl={wppUrl}
      onRemoveItem={handleRemoveItem}
      onClearCart={handleClearCart}
    />
  );
}
