import { notFound } from "next/navigation";
import Image from "next/image";
import Modal from "@/components/Modal";
import { getProductById } from "@/utils/getProductById";
import AddToCartButton from "@/components/AddToCartButton";
import { PageProps } from "@/.next/types/app/page";


export default async function ProductDetailsPage({params}: PageProps) {
  const {id}= await params
  const product = await getProductById(Number(id));

  if (!product) return notFound();

  return (
    <Modal>
      <section className="max-w-7xl mx-auto px-4  bg-white rounded-lg ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="bg-white p-6 rounded-lg shadow">
            <Image
              src={product?.image}
              alt={product?.title}
              width={400}
              height={400}
              className="w-full object-contain max-h-[400px] mx-auto"
            />
          </div>

          <div className="px-6 flex flex-col justify-center items-start">
            <h1 className="text-2xl font-bold text-gray-800">
              {product?.title}
            </h1>
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
    </Modal>
  );
}
