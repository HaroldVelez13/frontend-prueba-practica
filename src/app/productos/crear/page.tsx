"use client";
import ProductForm from "@/components/molecules/ProductForm";
import { IProduct } from "@/domain/interfaces/IProduct";
import ProductService from "@/domain/services/ProductService";
import { useRouter } from "next/navigation";

export default function ProdcutCreate() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/productos");
  };
  const handleSave = async (prodcut: IProduct) => {
    await ProductService.create(prodcut);
    router.push("/productos");
  };

  return <ProductForm handleBack={handleBack} handleSave={handleSave} />;
}
