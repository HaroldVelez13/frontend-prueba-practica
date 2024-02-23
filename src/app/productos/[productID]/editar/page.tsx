"use client";
import ProductForm from "@/components/molecules/ProductForm";
import { IProduct } from "@/domain/interfaces/IProduct";
import ProductService from "@/domain/services/ProductService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ProductUpdate() {
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

  const handleSave = async (prod: IProduct) => {
    const _product = { ...product, ...prod };
    await ProductService.update(Number(product.id), _product);
    router.push("/productos");
  };

  return (
    <ProductForm
      handleBack={handleBack}
      handleSave={handleSave}
      product={product}
    />
  );
}
