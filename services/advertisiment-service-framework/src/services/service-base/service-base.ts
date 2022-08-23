import {injectable} from "inversify";
import 'reflect-metadata';

import {Channel, Connection, connect} from "amqplib";
import {IService} from "./iservice";


@injectable()
export abstract class ServiceBase implements IService {
    private connection!: Connection;
    private channel!: Channel;
    protected abstract queueName: string;

    public async start() {
        await this._connect()

        await this.channel.assertQueue(this.queueName);

        await this._consume();
    }

    public async close() {
        if (this.channel) {
            await this.channel.close();
        }
    }

    protected abstract handleMessage(request: any): Promise<object>;

    private async _connect (): Promise<void> {
        this.connection = await connect(`amqp://guest:guest@localhost:5672`);
        this.channel = await this.connection.createChannel();
    }

    private async _consume() {
        await this.channel.consume(this.queueName, async (msg) => {
            const object = msg ? JSON.parse(msg.content.toString()) : {};

            const responseService = await this.handleMessage(object);
            await this.response(this.connection, responseService, this.queueName);

            this.channel.ack(msg);
        })
    }

    private async response(con, response, queue): Promise<any> {
        const channel = await con.createChannel()
        await channel.sendToQueue(`igork.${queue}`, Buffer.from(JSON.stringify(response)));
    }
}
