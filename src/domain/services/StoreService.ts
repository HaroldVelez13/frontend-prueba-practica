import { IStore } from "@/domain/interfaces/IStore";
import http from "@/domain/services/HttpServices";

const getAll = () => {
    return http.get("/stores");
};

const get = (id: number): Promise<IStore[]> => {
    return http.get(`/stores/${id}`);
};

const create = (store: IStore): Promise<IStore> => {
    return http.post("/stores", store);
};

const update = (id: number, store: IStore): Promise<IStore> => {
    return http.put(`/stores/${id}`, store);
};

const remove = (id: number): Promise<number> => {
    return http.delete(`/stores/${id}`);
};

const StoreService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default StoreService;