import {injectable} from "inversify";
import {IDBFactory} from "./IDBFactory";
import {Connection, createConnection} from "mysql2";

@injectable()
export class DBFactory implements IDBFactory {
    private connection!: Connection;

    public async createTable(sql: string): Promise<void> {
        await this._connect();

        await this.connection.promise().query(sql);

        await this._close()
    }

    private async _connect() {
        this.connection = createConnection({
            host: 'localhost',
            user: 'user',
            password: 'password',
            database: 'advertisiment'
        });

        await this.connection.promise().connect();
    }

    private async _close() {
        await this.connection.promise().end();
    }
}
