import {ServiceRequest} from "advertisiment-service-framework";

export interface IAdvertisimentLogic {
    getAdvertisiments(request: ServiceRequest): Promise<any>
    createAdvertisiment(request: ServiceRequest): Promise<any>
}
