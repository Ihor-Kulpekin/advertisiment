import {inject, injectable} from "inversify";
import {IDBFactory} from 'advertisiment-service-framework';
import {AvailableCollections, IEntitiesDataLayer} from "./IEntitiesDataLayer";

@injectable()
export class EntitiesDataLayer implements IEntitiesDataLayer{
    constructor(@inject('DBFactory') private dbFactory: IDBFactory) {}

    aggregate(tableName: AvailableCollections, pipeline: object[]): Promise<object[]> {
        return Promise.resolve([]);
    }

    bulkUpdate(tableName: AvailableCollections, documents: { selector: object; modifier: object }[]): Promise<number> {
        return Promise.resolve(0);
    }

    bulkUpsert(tableName: AvailableCollections, documents: { selector: object; modifier: object }[], keys: string[]): Promise<{ updated: number; inserted: number; insertedIds: string[] }> {
        return Promise.resolve({inserted: 0, insertedIds: [], updated: 0});
    }

    count(tableName: AvailableCollections, selector: object, fieldsTable): Promise<number> {
        return Promise.resolve(0);
    }

    createIndex(tableName: AvailableCollections, fieldOrSpec: any): Promise<string> {
        return Promise.resolve("");
    }

    deleteMany(tableName: AvailableCollections, selector: object, fieldsTable: any): Promise<number> {
        return Promise.resolve(0);
    }

    deleteOne(tableName: AvailableCollections, selector: object, fieldsTable: any): Promise<boolean> {
        return Promise.resolve(false);
    }

    distinct(tableName: AvailableCollections, key: string, selector: object): Promise<any[]> {
        return Promise.resolve([]);
    }

    findArray(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: any): Promise<any[]> {
        return Promise.resolve([]);
    }

    findMap(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: any, callback?: any): Promise<any[]> {
        return Promise.resolve([]);
    }

    public async findOne(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: any): Promise<any> {
        const table = await this.getTable(tableName, fieldsTable);
        return table;
    }

    public async getTable(tableName: AvailableCollections, fields: any): Promise<any> {
        const sql = `CREATE TABLE IF NOT EXISTS ${tableName} ${fields}`;

        return this.dbFactory.createTable(sql);
    }

    insertMany(tableName: AvailableCollections, documents: object, fieldsTable, userId?: string): Promise<string[]> {
        return Promise.resolve([]);
    }

    insertOne(tableName: AvailableCollections, document: object, fieldsTable, userId?: string): Promise<string> {
        return Promise.resolve("");
    }

    updateMany(tableName: AvailableCollections, selector: object, modifier: object, options?: object, userId?: string): Promise<number> {
        return Promise.resolve(0);
    }

    updateOne(tableName: AvailableCollections, selector: object, modifier: object, fieldsTable, options?: object, userId?: string): Promise<boolean> {
        return Promise.resolve(false);
    }
}
