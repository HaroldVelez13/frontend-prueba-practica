import { IProduct, IProductResponse, IProductsResponse } from "@/domain/interfaces/IProduct";
import http from "@/domain/services/HttpServices";

const getAll = async (): Promise<IProduct[]> => {
    const response = await http.get<IProductsResponse, any>("/products")
    return response.data;
};

const get = async (id: number): Promise<IProduct> => {
    const response = await http.get<IProductResponse, any>(`/products/${id}`);
    return response.data;
};

const create = async (product: IProduct): Promise<IProduct> => {
    return await http.post("/products", product);
};

const update = (id: number, product: IProduct): Promise<IProduct> => {
    return http.put(`/products/${id}`, product);
};

const remove = async (id: number): Promise<number> => {
    return await http.delete(`/products/${id}`);
};

const ProductService = {
    getAll,
    get,
    create,
    update,
    remove
};

export default ProductService;