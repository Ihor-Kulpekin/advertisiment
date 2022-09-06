import {QueryOptions} from 'mysql2'

export enum AvailableCollections {
    Users = 'users'
}

export interface IEntitiesDataLayer {

    count(tableName: AvailableCollections, selector: object, fieldsTable): Promise<number>;

    findOne(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: QueryOptions): Promise<any | null>;

    findArray(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: QueryOptions): Promise<any[]>;

    findMap(tableName: AvailableCollections, selector: object, fieldsTable: any, options?: QueryOptions, callback?: any): Promise<any[]>;

    deleteMany(tableName: AvailableCollections, selector: object, fieldsTable: any): Promise<number>;

    deleteOne(tableName: AvailableCollections, selector: object, fieldsTable: any): Promise<boolean>;

    insertMany(tableName: AvailableCollections, documents: object, fieldsTable, userId?: string): Promise<string[]>;

    insertOne(tableName: AvailableCollections, document: object, fieldsTable,  userId?: string): Promise<string>;

    updateOne(tableName: AvailableCollections, selector: object, modifier: object, fieldsTable, options?: object, userId?: string): Promise<boolean>;

    updateMany(tableName: AvailableCollections, selector: object, modifier: object, options?: object, userId?: string): Promise<number>;

    distinct(tableName: AvailableCollections, key: string, selector: object): Promise<any[]>;

    aggregate(tableName: AvailableCollections, pipeline: object[]): Promise<object[]>;

    bulkUpdate(tableName: AvailableCollections, documents: { selector: object, modifier: object }[]): Promise<number>;

    bulkUpsert(
        tableName: AvailableCollections,
        documents: { selector: object, modifier: object }[],
        keys: string[]
    ): Promise<{ updated: number, inserted: number, insertedIds: string[] }>;

    getTable(tableName: AvailableCollections, fields: any): Promise<any>;

    createIndex(tableName: AvailableCollections, fieldOrSpec: string | any): Promise<string>;
}
