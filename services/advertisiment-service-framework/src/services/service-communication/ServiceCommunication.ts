import {injectable} from "inversify";
import {Channel, Connection, connect} from "amqplib";
import {IServiceCommunication} from "./IServiceCommunication";

@injectable()
export class ServiceCommunication implements IServiceCommunication {
    private connection!: Connection;
    private channel!: Channel;

    async sendRequestToQueue(queue: any, msg: any): Promise<any> {
        await this._connect();
        this.channel.sendToQueue(queue, Buffer.from(JSON.stringify(msg)));

        await this.channel.assertQueue(`igork.${queue}`);
        let msgjson = new Promise(resolve =>
        {
            this.channel.consume(`igork.${queue}`, msg =>
            {
                if (msg !== null)
                {
                    this.channel.ack(msg);
                    return resolve(JSON.parse(msg.content.toString()));
                }
                else return resolve(JSON.stringify({'error': 'error'}));
            })
        })
        await msgjson;

        this._close();

        return msgjson;
    }

    private async _connect(): Promise<void> {
        this.connection = await connect('amqp://guest:guest@localhost:5672');
        this.channel = await this.connection.createChannel();
    }

    private async _close(): Promise<void> {
        if (this.channel) {
            await this.channel.close();
        }
    }
}
