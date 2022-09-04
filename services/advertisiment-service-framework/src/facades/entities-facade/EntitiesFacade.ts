import {inject, injectable} from "inversify";
import {IEntitiesFacade} from "./IEntitiesFacade";
import {ServiceRequest} from "../../services/service-base/iservice";
import {IServiceCommunication} from "../../services/service-communication/IServiceCommunication";
import {Queues} from "../../constants/constants";

export enum EntitiesModules {
    Users = 'users'
}

@injectable()
export class EntitiesFacade implements IEntitiesFacade{

    constructor(
        @inject('ServiceCommunication') private serviceComm: IServiceCommunication
    ) {
    }

    public async getUserByEmail(email: string): Promise<any> {
        return this.methodRequest(EntitiesModules.Users, 'getUserByEmail', {
            email
        });
    }

    private async methodRequest(module: EntitiesModules, method: string, options: any): Promise<any> {
        /**
         * /services/entities-service/src/BusinessLogic/EntitiesLogic.ts
         * 38:9 - return this[request.module][request.methodName](request.options, request.user);
         *
         * [options, user];
         */

        const request = new ServiceRequest({
            module,
            method,
            options
        });

        const result = await this.serviceComm.sendRequestToQueue(Queues.entities, request);

        if (typeof result === 'object' && result !== null && 'error' in result) {
            const instanceError = new Error(result['error']);

            instanceError.name = '';

            throw instanceError;
        }

        return result;
    }

}
