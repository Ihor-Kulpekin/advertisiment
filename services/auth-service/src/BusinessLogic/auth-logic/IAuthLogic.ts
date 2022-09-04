import {ServiceRequest} from "advertisiment-service-framework";

export interface IAuthLogic {
    register(request: ServiceRequest): Promise<any>;
    login(request: ServiceRequest): Promise<any>;
}
