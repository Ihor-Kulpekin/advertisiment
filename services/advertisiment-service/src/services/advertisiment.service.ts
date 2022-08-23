import 'source-map-support/register';

import {Queues, ServiceBase} from "advertisiment-service-framework";
import {inject, injectable} from "inversify";
import {IAdvertisimentLogic} from "../BusinessLogic/advertisiment/IAdvertisimentLogic";

interface ServiceRequest {
    data: any,
    method: string
}

@injectable()
export class AdvertisimentService extends ServiceBase {
    protected queueName: string = Queues.bmls;

    constructor(
        @inject('AdvertisimentLogic') private advertisimentLogic: IAdvertisimentLogic
    ) {
        super();
    }

    protected async handleMessage(request: ServiceRequest): Promise<object> {
        if (!request.method) {
            return {error: 'method is required'}
        }

        if (!this.advertisimentLogic[request.method]) {
            const error = `method ${request.method} not exists on BmlLogic`;
            console.log('request', request);
            throw new Error(error);
        }

        return this.advertisimentLogic[request.method](request.data);
    }
}
