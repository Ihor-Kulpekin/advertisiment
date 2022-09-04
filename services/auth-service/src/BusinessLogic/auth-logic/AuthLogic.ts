import {injectable} from "inversify";
import {IAuthLogic} from "./IAuthLogic";
import {ServiceRequest} from "advertisiment-service-framework";

@injectable()
export class AuthLogic implements IAuthLogic{
    public async login(request: ServiceRequest): Promise<any> {
        return Promise.resolve(undefined);
    }

    public async register(request: ServiceRequest): Promise<any> {
        return request;
    }
}
