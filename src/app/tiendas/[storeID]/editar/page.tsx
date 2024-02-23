"use client";
import StoreForm from "@/components/molecules/StoreForm";
import { IStore } from "@/domain/interfaces/IStore";
import StoreService from "@/domain/services/StoreService";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function StoreUpdate() {
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

  const handleSave = async (sto: IStore) => {
    const _store: IStore = { ...store, ...sto };
    await StoreService.update(Number(store.id), _store);
    router.push("/tiendas");
  };

  return (
    <StoreForm handleBack={handleBack} handleSave={handleSave} store={store} />
  );
}
