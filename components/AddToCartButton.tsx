"use client";

import { useDispatch, useSelector } from "react-redux";
import { addItem } from "@/features/cart/cartSlice";
import { ProductType } from "@/types";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { RootState } from "@/store/store";

export default function AddToCartButton({ product }: { product: ProductType }) {
  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleAddToCart = () => {
    const isInCart = cartItems.some((item) => item.id === product.id);

    if (isInCart) {
      toast.error("Product is already in the cart.");
      return;
    }

    try {
      dispatch(
        addItem({
          id: product?.id,
          title: product?.title,
          price: product?.price,
          quantity: 1,
          image: product?.image,
        })
      );

      toast.success(`Product added to cart successfully!`);
      router.push("/cart");
    } catch (error) {
      toast.error("Failed to add product to cart.");
      console.error(error);
    }
  };

  return (
    <button
      className="mt-6 px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      onClick={handleAddToCart}
    >
      Add to Cart
    </button>
  );
}
