import { useState } from "react";
import type { Product } from "../data/products";
import { addItemToCart } from "../store/cartStore";
import CartInteractionView from "./CartInteractionView";

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
    <CartInteractionView
      product={product}
      selectedSize={selectedSize}
      selectedColor={selectedColor}
      isAdded={isAdded}
      isModalOpen={isModalOpen}
      onSizeChange={setSelectedSize}
      onColorChange={setSelectedColor}
      onAddToCart={handleAddToCart}
      onOpenModal={() => setIsModalOpen(true)}
      onCloseModal={() => setIsModalOpen(false)}
    />
  );
}
