export interface IStore {
    id?: number | null,
    name: string,
    city: string,
    address: string,
    products?: string[]
}

export interface IStoresResponse {
    status: string;
    data: {
        stores: IStore[];
    };
}

export interface IStoreResponse {
    status: string;
    data: {
        store: IStore;
    };
}