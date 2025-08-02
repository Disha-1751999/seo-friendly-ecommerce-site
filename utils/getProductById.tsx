import { ProductType } from "@/types";

export async function getProductById(id: number): Promise<ProductType | null> {
  try {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`, {
      cache: "force-cache",
    });
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}