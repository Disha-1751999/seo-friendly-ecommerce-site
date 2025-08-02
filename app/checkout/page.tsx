"use client";

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "@/store/store";
import { clearCart } from "@/features/cart/cartSlice";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { placeOrder } from "@/features/order/ordersSlice";
import Image from "next/image";
import ThankYouIcon from "@/assets/icons8-correct.gif";

export default function CheckoutPage() {
  const [showThankYouModal, setShowThankYouModal] = useState(false);

  const dispatch = useDispatch();
  const router = useRouter();

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const [formData, setFormData] = useState({
    fullName: "",
    address: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    fullName: "",
    address: "",
    phone: "",
  });

  const validate = () => {
    const newErrors = { fullName: "", address: "", phone: "" };
    let isValid = true;

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full Name is required";
      isValid = false;
    }

    if (!formData.address.trim()) {
      newErrors.address = "Shipping Address is required";
      isValid = false;
    }

    if (
      !formData.phone.trim() ||
      !/^(?:\+88|88)?01[3-9]\d{8}$/.test(formData.phone) ||
      /^0+$/.test(formData.phone.replace(/^\+?88/, ""))
    ) {
      newErrors.phone = "Enter a valid Bangladeshi phone number";
      isValid = false;
    }
    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    const order = {
      id: uuidv4(),
      fullName: formData?.fullName,
      address: formData?.address,
      phone: formData?.phone,
      items: cartItems,
      totalAmount,
      orderDate: new Date().toISOString(),
    };

    dispatch(placeOrder(order));
    dispatch(clearCart());
    setShowThankYouModal(true);
    setTimeout(() => {      
      router.push("/orders");
      setShowThankYouModal(false);
    }, 3000);
  };

  return (
    <div className="max-w-xl mx-auto mt-8 sm:mt-0 p-6">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      <div className="space-y-4">
        <div>
          <label className="block mb-1 font-medium">Full Name</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData?.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
          />
          {errors.fullName && (
            <p className="text-red-600 text-sm">{errors?.fullName}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Shipping Address</label>
          <input
            type="text"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData?.address}
            onChange={(e) =>
              setFormData({ ...formData, address: e.target.value })
            }
          />
          {errors.address && (
            <p className="text-red-600 text-sm">{errors?.address}</p>
          )}
        </div>

        <div>
          <label className="block mb-1 font-medium">Phone Number</label>
          <input
            type="tel"
            className="w-full border border-gray-300 p-2 rounded"
            value={formData?.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
          />
          {errors.phone && (
            <p className="text-red-600 text-sm">{errors.phone}</p>
          )}
        </div>

        <button
          onClick={handleSubmit}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-500 transition"
        >
          Place Order
        </button>
      </div>

      {showThankYouModal && (
        <div className="fixed inset-0 z-50 bg-black/60 bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded shadow-lg max-w-sm w-full text-center">
            <Image
              src={ThankYouIcon}
              alt="Thank You"
              width={100}
              height={100}
              className="mx-auto mb-4"
            />
            <h2 className="text-2xl font-semibold mb-4">Thank You!</h2>
            <p className="mb-6">Your order has been placed successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
}
