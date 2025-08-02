import { ProductType } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product }: { product: ProductType }) => {
  return (
    <div
      key={product?.id}
      className="group relative border-2 border-gray-100 p-4 rounded-lg  hover:shadow-sm transition-shadow duration-300"
    >
      <Image
        alt={product?.title}
        src={product?.image}
        height={100}
        width={100}
        className="aspect-square w-full rounded-md object-contain group-hover:opacity-75 lg:aspect-auto lg:h-80"
      />
      <div className="mt-4 flex justify-between flex-col">
        <div>
          <h3 className="text-sm text-gray-700">
            <Link href={`/products/${product?.id}`}>
              <span
                aria-hidden="true"
                className="absolute inset-0 text-gray-700"
              />
              {product?.title}
            </Link>
          </h3>
        </div>
        <div className="flex items-center justify-between mt-4">
          <p className="text-sm font-medium text-green-500 ">
            ${product?.price}
          </p>
          <Link
            href={`/products/${product?.id}`}
            className="inline-block bg-green-500 hover:text-green-500 cursor-pointer hover:bg-white border hover:border-green-500 transition-all duration-200 text-white text-xs px-3 py-2 rounded"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
