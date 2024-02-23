"use client";
import ProductCard from "@/components/molecules/ProductCard";
import { IProduct } from "@/domain/interfaces/IProduct";
import ProductService from "@/domain/services/ProductService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const params = useParams();
  const { productID } = params;
  const router = useRouter();

  const getProduct = async (id: number) => {
    const _prodcut = await ProductService.get(id);
    setProduct(_prodcut);
  };

  useEffect(() => {
    const ID = Number(productID);
    getProduct(ID);
  }, [productID]);

  const handleBack = () => {
    router.push("/productos");
  };

  const handleUpdate = () => {
    const url = "/productos/" + product.id + "/editar";
    router.push(url);
  };

  const deleteProduct = async (id: number) => {
    await ProductService.remove(id);
    handleBack();
  };

  return (
    <ProductCard
      product={product}
      handleBack={handleBack}
      handleUpdate={handleUpdate}
      deleteProduct={deleteProduct}
    />
  );
}
