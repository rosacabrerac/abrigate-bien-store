import { persistentAtom } from "@nanostores/persistent";
import { atom } from "nanostores";
import { STORE_PHONE } from "../constants";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

export const cartItems = persistentAtom<Record<string, CartItem>>(
  "cart",
  {},
  {
    encode: JSON.stringify,
    decode: JSON.parse,
  },
);

export function addItemsToCart(item: CartItem) {
  const cartItemId = `${item.id}-${item.size}-${item.color}`;

  const existingItem = cartItems.get()[cartItemId];

  if (existingItem) {
    cartItems.set({
      ...cartItems.get(),
      [cartItemId]: { ...existingItem, quantity: existingItem.quantity + 1 },
    });
  } else {
    cartItems.set({
      ...cartItems.get(),
      [cartItemId]: { ...item, quantity: 1 },
    });
  }
}

export function getWhatsAppUrl() {
  const items = Object.values(cartItems.get());

  const wppText = items
    .map(
      (item) =>
        `- ${item.quantity} ${item.name} ${item.color} (Talle: ${item.size}) $${item.price}`,
    )
    .join("\n");

  const totalPrice = items.reduce((accumulator, item) => {
    return accumulator + item.price * item.quantity;
  }, 0);

  const finalMessage = `Hola! Quiero pedir:\n${wppText}\nTotal: $${totalPrice}`;
  const encodedMessage = encodeURIComponent(finalMessage);
  const buyerWppUrl = `https://wa.me/${STORE_PHONE}?text=${encodedMessage}`;

  return buyerWppUrl;
}

export const isCartOpen = atom(false);

export function toggleCart() {
  isCartOpen.set(!isCartOpen.get());
}

export function clearCart() {
  cartItems.set({});
}

export function removeItemFromCart(cartItemId: string) {
  const newCart = { ...cartItems.get() };

  if (newCart[cartItemId].quantity > 1) {
    newCart[cartItemId] = {
      ...newCart[cartItemId],
      quantity: newCart[cartItemId].quantity - 1,
    };
  } else {
    delete newCart[cartItemId];
  }

  cartItems.set(newCart);
}