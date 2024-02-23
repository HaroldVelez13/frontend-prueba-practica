"use client";
import CardSkeleton from "@/components/atoms/CardSkeleton";
import ProductHeader from "@/components/molecules/ProductHeader";
import ProductItem from "@/components/molecules/ProductItem";
import { IProduct } from "@/domain/interfaces/IProduct";
import ProductService from "@/domain/services/ProductService";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Products() {
  const [products, setProducts] = useState<IProduct[]>([] as IProduct[]);
  const getProducts = async () => {
    const _prodcuts = await ProductService.getAll();
    setProducts(_prodcuts);
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <ProductHeader />
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        spacing={2}>
        {products.length > 0 ? (
          products?.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        ) : (
          <Grid item xs={12} md={6} lg={3}>
            <CardSkeleton />
          </Grid>
        )}
      </Grid>
    </>
  );
}
