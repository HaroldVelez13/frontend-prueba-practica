export interface IProduct {
    id?: number | null,
    name: string,
    price: number,
    type: string,
    stores?: string[]
}

export interface IProductsResponse {
    status: string;
    data: {
        prodcuts: IProduct[];
    };
}

export interface IProductResponse {
    status: string;
    data: {
        prodcuts: IProduct;
    };
}