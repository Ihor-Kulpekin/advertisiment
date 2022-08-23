import container from "../common/container";
import {IServiceCommunication} from "../services/service-communication/IServiceCommunication";

export class ServiceRequestUtil {

    static async send(queue: any, request: any) {
        const serviceComm = await container.get<IServiceCommunication>('ServiceCommunication');

        return serviceComm.sendRequestToQueue(queue, request);
    }
}
