import { persistentAtom } from "@nanostores/persistent";

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
}
