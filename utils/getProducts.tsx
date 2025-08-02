import { ProductType } from "@/types";

export async function getProducts(): Promise<ProductType[]> {
  const res = await fetch('https://fakestoreapi.com/products');
  return res.json();
}