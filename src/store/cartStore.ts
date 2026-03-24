import { map } from "nanostores";

export type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  size: string;
  color: string;
  quantity: number;
};

export const cartItems = map<Record<string, CartItem>>({});

export function addItemsToCart(item: CartItem) {
  const cartItemId = `${item.id}-${item.size}-${item.color}`;

  const existingItem = cartItems.get()[cartItemId];

  if (existingItem) {
    cartItems.setKey(cartItemId, {
      ...existingItem,
      quantity: existingItem.quantity + 1,
    });
  } else {
    cartItems.setKey(cartItemId, {
      ...item,
      quantity: 1,
    });
  }
}
