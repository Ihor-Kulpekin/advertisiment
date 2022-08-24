import {IBaseDataRepository} from './IBaseDataRepository';
import {injectable} from 'inversify';
import {Connection, createConnection} from 'mysql2';

@injectable()
export class BaseDataRepository implements IBaseDataRepository{
    private connection!: Connection;
    protected tableName: string = '';

    constructor(private createTableCallback: () => Promise<any>) {}

    public async count(query: any): Promise<any> {
        await this.init();

        return this.connection.promise().query(`SELECT COUNT(*) FROM ${this.tableName}`, [this.tableName]);
    }

    public async getAll(query: any): Promise<any> {
        await this.init();

        const results = await this.connection.promise().query(`SELECT * FROM ${this.tableName} LIMIT ? OFFSET ?`, [query.limit, query.skip]);

        await this._close();

        return results;
    }

    public async getOne(id: number): Promise<any> {
        await this.init();

        return Promise.resolve(undefined);
    }

    protected async createTable(sql: string): Promise<any> {
        await this.connection.promise().query(sql)
    }

    private async init(): Promise<void> {
        await this._connect();
        await this.createTableCallback();
    }

    private async _connect(): Promise<void> {
        this.connection = createConnection({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'advertisiment'
        });

        await this.connection.promise().connect();

        await this.connection.promise().query('CREATE DATABASE IF NOT EXISTS advertisiment;');
    }

    private async _close(): Promise<void> {
        await this.connection.promise().end()
    }
}
