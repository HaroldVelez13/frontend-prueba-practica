"use client";
import CardSkeleton from "@/components/atoms/CardSkeleton";
import StoreHeader from "@/components/molecules/StoreHeader";
import StoreItem from "@/components/molecules/StoreItem";
import { IStore } from "@/domain/interfaces/IStore";
import StoreService from "@/domain/services/StoreService";
import { Grid } from "@mui/material";
import { useEffect, useState } from "react";

export default function Stores() {
  const [stores, setStores] = useState<IStore[]>([] as IStore[]);
  const getStores = async () => {
    const _stores = await StoreService.getAll();
    setStores(_stores);
  };
  useEffect(() => {
    getStores();
  }, []);
  return (
    <>
      <StoreHeader />
      <Grid
        container
        direction="row"
        justifyContent="left"
        alignItems="center"
        spacing={2}>
        {stores.length > 0 ? (
          stores?.map((store) => <StoreItem key={store.id} store={store} />)
        ) : (
          <Grid item xs={12} md={6} lg={3}>
            <CardSkeleton />
          </Grid>
        )}
      </Grid>
    </>
  );
}
