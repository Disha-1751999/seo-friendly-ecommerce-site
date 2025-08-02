import { ProductListProps, ProductType } from "@/types";
import Link from "next/link";
import React from "react";
import ProductCard from "./ProductCard";

const ProductList = ({
  products,
  title,
  currentPage = 1,
  totalPages = 1,
  showPagination = false,
}: ProductListProps) => {
  return (
    <>
      <div className="bg-white px-12">
        <div className="mx-auto max-w-2xl px-4  sm:px-6 py-12 lg:max-w-7xl lg:px-8">
          <div className="flex items-center justify-between flex-col">
            <h2>
              <span className="text-lg text-gray-700 font-semibold uppercase p-4 border-b border-gray-300">
                {title}
              </span>
            </h2>
            <p className="mt-10 text-sm text-gray-500 mb-4">
              Bring called seed first of third give itself now ment
            </p>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <ProductCard key={product?.id} product={product} />
            ))}
          </div>
          {showPagination && totalPages > 1 && (
            <div className="mt-10 flex justify-center gap-2">
              {Array.from({ length: totalPages }, (_, i) => (
                <Link
                  key={i}
                  href={`/products?page=${i + 1}`}
                  className={`px-3 py-1 border rounded ${
                    currentPage === i + 1
                      ? "bg-green-500 text-white border-green-500"
                      : "bg-white text-green-500 border-green-500"
                  }`}
                >
                  {i + 1}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default ProductList;
