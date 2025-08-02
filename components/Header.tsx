'use client';

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { ShoppingCart, Truck, Menu, X } from "lucide-react";
import { RootState } from "@/store/store";
import { useSelector } from "react-redux";
import { useState } from "react";

const Header = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const cartItems = useSelector((state: RootState) => state.cart.items);
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header className="w-full bg-white shadow-sm fixed top-0 z-40 px-4 sm:px-18">
      <div className="container mx-auto flex justify-between items-center py-4 px-4">
        <Link href="/" className="text-lg text-gray-800">
          MY SITE
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          <Link
            href="/"
            className={`text-sm font-medium ${
              pathname === "/"
                ? "text-green-500 border-b-2 border-green-500 pb-1"
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            HOME
          </Link>
          <Link
            href="/products"
            className={`text-sm font-medium ${
              pathname === "/products"
                ? "text-green-500 border-b-2 border-green-500 pb-1"
                : "text-gray-800 hover:text-green-500"
            }`}
          >
            PRODUCTS
          </Link>
          <button
            disabled
            className="text-sm font-medium text-gray-800 hover:text-green-500 cursor-not-allowed"
          >
            CONTACT
          </button>
        </nav>

        <div className="flex items-center gap-6 text-gray-700">
          <div
            className="relative cursor-pointer"
            onClick={() => router.push("/cart")}
          >
            <ShoppingCart className="w-5 h-5 hover:text-green-500" />
            {totalQuantity > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
                {totalQuantity}
              </span>
            )}
          </div>
          <Truck
            className="w-5 h-5 cursor-pointer hover:text-green-500"
            onClick={() => router.push("/orders")}
          />

          <button
            className="md:hidden transition-all duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileMenuOpen && (
        <div className="md:hidden px-4 pb-4 bg-white border-t border-gray-200">
          <nav className="flex flex-col gap-4 mt-2">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === "/"
                  ? "text-green-500"
                  : "text-gray-800 hover:text-green-500"
              }`}
            >
              HOME
            </Link>
            <Link
              href="/products"
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm font-medium ${
                pathname === "/products"
                  ? "text-green-500"
                  : "text-gray-800 hover:text-green-500"
              }`}
            >
              PRODUCTS
            </Link>
            <span className="text-sm text-gray-400 cursor-not-allowed">
              CONTACT
            </span>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
