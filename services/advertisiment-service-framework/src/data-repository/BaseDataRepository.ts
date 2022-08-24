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

        const result = await this.connection.promise().query(`SELECT COUNT(*) FROM ${this.tableName}`, [this.tableName]);

        await this._close();

        return result;
    }

    public async getAll(query: any): Promise<any> {
        await this.init();

        const sort = query.sort.split(':');

        const sql = `SELECT * FROM ${this.tableName} ORDER BY ${sort[0]} ${sort[1].toUpperCase()} LIMIT ?, ?;`

        const results = await this.connection.promise().query(sql, [Number(query.skip), Number(query.limit)]);

        await this._close();

        return results;
    }

    public async getOne(id: number): Promise<any> {
        await this.init();

        return Promise.resolve(undefined);
    }

    public async create(body: any): Promise<any> {
        await this.init();

        const fields = Object.keys(body);
        const values = [
            Object.values(body)
        ];

        const sql = `INSERT INTO ${this.tableName} (${fields}) VALUES ?`;

        const result = await this.connection.promise().query(sql, [values]);

        await this._close();

        return result;
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
            database: 'advertisiment',
            connectTimeout: 28800,
            waitForConnections: true
        });

        await this.connection.promise().connect();

        await this.connection.promise().query('CREATE DATABASE IF NOT EXISTS advertisiment;');
    }

    private async _close(): Promise<void> {
        await this.connection.promise().end()
    }
}
