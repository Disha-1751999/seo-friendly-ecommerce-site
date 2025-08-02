import ProductList from "@/components/ProductList";
import { getProducts } from "@/utils/getProducts";
import { ProductType } from "@/types";

type Props = {
  searchParams: Promise<{ page?: string }>;
};

const ProductsPage = async ({ searchParams }: Props) => {
  const resolvedSearchParams = await searchParams;
  const currentPage = parseInt(resolvedSearchParams.page || "1", 10);
  const allProducts: ProductType[] = await getProducts();
  const itemsPerPage = 8;
  const totalPages = Math.ceil(allProducts.length / itemsPerPage);
  const paginated = allProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <ProductList
      title="Products"
      products={paginated}
      currentPage={currentPage}
      totalPages={totalPages}
      showPagination={true}
    />
  );
};

export default ProductsPage;
