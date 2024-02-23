"use client";
import StoreForm from "@/components/molecules/StoreForm";
import { IStore } from "@/domain/interfaces/IStore";
import StoreService from "@/domain/services/StoreService";
import { useRouter } from "next/navigation";

export default function StoreCreate() {
  const router = useRouter();

  const handleBack = () => {
    router.push("/tiendas");
  };
  const handleSave = async (store: IStore) => {
    await StoreService.create(store);
    router.push("/tiendas");
  };

  return <StoreForm handleBack={handleBack} handleSave={handleSave} />;
}
