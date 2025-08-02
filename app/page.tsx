import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import ProductList from "@/components/ProductList";
import { getProducts } from "@/utils/getProducts";

export default async function HomePage() {
  const products = await getProducts();
  const featuredProducts = products.slice(0, 8);

  return (
    <>
      <HeroSection />
      <ProductList products={featuredProducts} title="Featured product" />
      <div className="mb-20 text-center">
        <Link href="/products">
          <button className="inline-block bg-green-500 hover:text-green-500 cursor-pointer hover:bg-white border hover:border-green-500 transition-all duration-200 text-white font-semibold text-sm px-6 py-3 rounded">
            View All Products
          </button>
        </Link>
      </div>
      <Footer />
    </>
  );
}
