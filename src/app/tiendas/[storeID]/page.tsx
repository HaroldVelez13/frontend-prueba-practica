"use client";
import StoreCard from "@/components/molecules/StoreCard";
import { IStore } from "@/domain/interfaces/IStore";
import StoreService from "@/domain/services/StoreService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function StoreDetail() {
  const [store, setStore] = useState<IStore>({} as IStore);
  const params = useParams();
  const { storeID } = params;
  const router = useRouter();

  const getStore = async (id: number) => {
    const _store = await StoreService.get(id);
    setStore(_store);
  };

  useEffect(() => {
    const ID = Number(storeID);
    getStore(ID);
  }, [storeID]);

  const handleBack = () => {
    router.push("/tiendas");
  };

  const handleUpdate = () => {
    const url = "/tiendas/" + store.id + "/editar";
    router.push(url);
  };

  const deleteProduct = async (id: number) => {
    await StoreService.remove(id);
    handleBack();
  };

  return (
    <StoreCard
      store={store}
      handleBack={handleBack}
      handleUpdate={handleUpdate}
      deleteProduct={deleteProduct}
    />
  );
}
