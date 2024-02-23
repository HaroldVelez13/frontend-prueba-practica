import { IStore, IStoresResponse } from "@/domain/interfaces/IStore";
import http from "@/domain/services/HttpServices";

const getAll = async () => {
    const response = await http.get<IStoresResponse, any>("/stores");
    return await response.data;
};

const get = async (id: number): Promise<IStore> => {
    const response = await http.get<IStoresResponse, any>(`/stores/${id}`);
    return response.data
};

const create = async (store: IStore): Promise<IStore> => {
    return await http.post("/stores", store);
};

const update = async (id: number, store: IStore): Promise<IStore> => {
    return await http.put(`/stores/${id}`, store);
};

const remove = async (id: number): Promise<number> => {
    return await http.delete(`/stores/${id}`);
};

const StoreService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default StoreService;