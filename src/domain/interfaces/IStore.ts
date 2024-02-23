export interface IStore {
    id?: number | null,
    name: string,
    city: string,
    address: string,
    products?: string[]
}