import {inject, injectable} from "inversify";
import {Queues, ServiceBase, ServiceRequest} from "advertisiment-service-framework";
import {IUserMethods} from "../BusinessLogic/user/IUserMethods";

@injectable()
export class EntitiesService extends ServiceBase{
    protected queueName: string = Queues.entities;

    constructor(
        @inject('UserMethods') users: IUserMethods
    ) {
        super();
    }

    protected async handleMessage(request: ServiceRequest): Promise<object> {
        if (!request.method) {
            return {error: 'method is required'}
        }

        if (!request.module) {
            return {error: 'module is required'}
        }

        return this[request.module][request.method](request.options);
    }
}
