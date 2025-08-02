"use client";

import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { Order } from "@/types";

export default function OrdersPage() {
  const orders = useSelector(
    (state: RootState) => state.orders.orders as unknown as Order[]
  );
  const [selectedOrderId, setSelectedOrderId] = useState<
    string | number | null
  >(null);

  const selectedOrder = orders.find((order) => order.id === selectedOrderId);

  return (
    <div className="max-w-6xl mx-auto p-6 text-gray-700 mt-8 sm:mt-0[-o">
      <h1 className="text-xl text-gray-700 uppercase mb-8">Your Orders</h1>
      {orders?.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">
          You have no orders yet.
        </p>
      ) : (
        <div className="overflow-x-auto">
        <table className="min-w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-100 border-b border-gray-300">
              <th className="p-4 font-normal">Order ID</th>
              <th className="p-4 font-normal">Customer</th>
              <th className="p-4 text-center font-normal">Items</th>
              <th className="p-4 text-center font-normal">Total</th>
              <th className="p-4 text-center font-normal">Date</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr
                key={order?.id}
                className="border-b border-gray-200 hover:bg-gray-50 transition cursor-pointer"
                onClick={() => setSelectedOrderId(order?.id)}
              >
                <td className="p-4 font-medium text-gray-900">{order?.id}</td>
                <td className="p-4 text-gray-700">{order?.fullName}</td>
                <td className="p-4 text-center text-gray-600">
                  {order?.items?.length}
                </td>
                <td className="p-4 text-center font-semibold text-gray-800">
                  ${order.totalAmount.toFixed(2)}
                </td>
                <td className="p-4 text-center text-gray-600">
                  {new Date(order?.orderDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </div>
      )}

      {selectedOrder && (
        <div className="fixed inset-0 bg-black/60 bg-opacity-40 flex justify-center items-center z-50">
          <div className="bg-white rounded-xl shadow-xl p-6 max-w-lg w-full relative max-h-[90vh] overflow-y-auto">
            <button
              className="absolute top-2 right-4 text-2xl text-gray-500 hover:text-gray-800"
              onClick={() => setSelectedOrderId(null)}
              aria-label="Close order details"
            >
              &times;
            </button>

            <h2 className="text-2xl font-bold mb-4">Order Details</h2>

            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <span className="font-semibold">Customer:</span>{" "}
                {selectedOrder?.fullName}
              </div>
              <div>
                <span className="font-semibold">Shipping Address:</span>{" "}
                {selectedOrder?.address}
              </div>
              <div>
                <span className="font-semibold">Phone Number:</span>{" "}
                {selectedOrder?.phone}
              </div>
              <div>
                <span className="font-semibold">Order Date:</span>{" "}
                {new Date(selectedOrder?.orderDate).toLocaleString()}
              </div>

              <div className="border-t pt-4 mt-4">
                <h3 className="font-bold text-gray-900 mb-2">Items</h3>
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr className="text-gray-500 border-b">
                      <th className="pb-2">Title</th>
                      <th className="text-center pb-2">Qty</th>
                      <th className="text-right pb-2">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {selectedOrder?.items.map((item) => (
                      <tr key={item?.id} className="border-b last:border-0">
                        <td className="py-1">{item?.title}</td>
                        <td className="py-1 text-center">{item?.quantity}</td>
                        <td className="py-1 text-right">
                          ${item?.price?.toFixed(2)}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="text-right mt-4 font-semibold text-gray-900">
                  Total: ${selectedOrder?.totalAmount.toFixed(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
