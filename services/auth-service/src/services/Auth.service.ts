import {Queues, ServiceBase, ServiceRequest} from "advertisiment-service-framework";
import {inject, injectable} from "inversify";
import {IAuthLogic} from "../BusinessLogic/auth-logic/IAuthLogic";

@injectable()
export class AuthService extends ServiceBase{
    protected queueName: string = Queues.auth;

    constructor(
        @inject('AuthLogic') private authLogic: IAuthLogic
    ) {
        super();
    }

    protected async handleMessage(request: ServiceRequest): Promise<object> {
        if (!request.method) {
            return {error: 'method is required'}
        }

        if (!this.authLogic[request.method]) {
            const error = `method ${request.method} not exists on AuthLogic`;

            throw new Error(error);
        }
        console.log('request', request);
        return this.authLogic[request.method](request.data);
    }
}
