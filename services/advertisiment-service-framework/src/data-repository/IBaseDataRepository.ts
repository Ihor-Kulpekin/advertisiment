export interface IBaseDataRepository {
    getAll(query: any): Promise<any>;
    getOne(id: number): Promise<any>;
    create(body: any): Promise<any>;
    count(query: any): Promise<any>;
}
