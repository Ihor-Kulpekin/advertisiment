export interface IDBFactory {
    createTable(sql: string): Promise<void>;
}
