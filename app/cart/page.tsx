"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { removeItem, clearCart } from "@/features/cart/cartSlice";
import Image from "next/image";
import { Trash } from "lucide-react";
import { useRouter } from "next/navigation";

export default function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const router = useRouter();

  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-700 mt-8 sm:mt-0">
      <h1 className="text-xl text-gray-700 uppercase mb-8 ">Shopping Cart</h1>
      {cartItems?.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 border-b border-gray-300">
                <th className="p-4 font-normal">Product</th>
                <th className="p-4 text-center  font-normal">Price</th>
                <th className="p-4 text-center  font-normal">Quantity</th>
                <th className="p-4 text-center font-normal">Total</th>
                <th className="p-4 text-center font-normal">Action</th>
              </tr>
            </thead>
            <tbody>
              {cartItems?.map((item) => (
                <tr
                  key={item?.id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition"
                >
                  <td className="flex items-center gap-4 p-4">
                    <div className="w-20 h-20 relative rounded overflow-hidden border border-gray-300 flex items-center justify-center">
                      <Image
                        src={item?.image}
                        alt={item?.title}
                        className="object-contain"
                        priority
                        height={40}
                        width={40}
                      />
                    </div>
                    <span className="font-medium text-gray-900">
                      {item?.title}
                    </span>
                  </td>

                  <td className="p-4 text-center font-semibold text-gray-700">
                    ${item?.price.toFixed(2)}
                  </td>

                  <td className="p-4 text-center text-gray-600">
                    {item?.quantity}
                  </td>

                  <td className="p-4 text-center font-semibold text-gray-900">
                    ${(item?.price * item?.quantity).toFixed(2)}
                  </td>

                  <td className="p-4 text-center">
                    <button
                      onClick={() => dispatch(removeItem(item?.id))}
                      className="text-red-600 hover:text-red-800 font-semibold transition"
                      aria-label={`Remove ${item?.title} from cart`}
                    >
                      <Trash size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          </div>

          <div className="flex justify-between items-center mt-8 px-4">
            <h2 className="text-2xl font-bold">
              Total: ${totalAmount.toFixed(2)}
            </h2>
            <div className="flex items-center gap-2">
              <button
                onClick={() => dispatch(clearCart())}
                className=" text-sm px-4 py-2 rounded bg-red-600 text-white  hover:bg-red-700 transition"
              >
                Clear Cart
              </button>
              <button
                onClick={() => {
                  router.push("/checkout");
                }}
                className="ml-4 text-sm px-4 py-2 rounded bg-green-600 text-white hover:bg-green-700 transition"
              >
                Place Order
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
