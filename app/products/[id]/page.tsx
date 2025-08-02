import { notFound } from "next/navigation";
import Image from "next/image";
import { ProductType } from "@/types";
import { GetStaticPaths, Metadata } from "next";
import { getProductById } from "@/utils/getProductById";
import AddToCartButton from "@/components/AddToCartButton";
import { getProducts } from "@/utils/getProducts";
import { PageProps } from "@/.next/types/app/page";

export async function generateMetadata({ params}: PageProps): Promise<Metadata> {
  const resolvedParams =  await params; 
  const product = await getProductById(Number(resolvedParams?.id));

  if (!product) {
    return {
      title: "Product Not Found | MyStore",
      description: "The product you are looking for does not exist.",
      robots: {
        index: false,
        follow: false,
      },
    };
  }

  return {
    title: `${product.title} | MyStore`,
    description: product.description.slice(0, 150),
  };
}

export default async function ProductDetailsPage({params}: PageProps) {
  const {id}= await params
  const product = await getProductById(Number(id));

  if (!product) return notFound();

  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="bg-white p-6 rounded-lg shadow">
          <Image
            src={product?.image}
            alt={product?.title}
            className="w-full object-contain max-h-[400px] mx-auto"
            priority
            width={400}
            height={400}           
          />
        </div>

        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800">{product?.title}</h1>
          <p className="text-green-600 font-bold text-xl mt-2">
            ${product?.price}
          </p>
          <p className="text-gray-600 mt-4">{product?.description}</p>
          <p className="text-sm text-gray-500 mt-2">
            Category: {product?.category}
          </p>
          <AddToCartButton product={product} />
        </div>
      </div>
    </section>
  );
}

// export const getStaticPaths: GetStaticPaths = async () => {
//   const products: ProductType[] = await getProducts();

//   const paths = products?.map((product) => ({
//     params: { id: product?.id.toString() },
//   }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

export async function generateStaticParams() {
  const products: ProductType[] = await getProducts();

  return products.map((product) => ({
    id: product?.id.toString(),
  }));
}
