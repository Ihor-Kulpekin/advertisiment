import {inject, injectable} from "inversify";
import {IAuthLogic} from "./IAuthLogic";
import {IEntitiesFacade, ServiceRequest} from "advertisiment-service-framework";

@injectable()
export class AuthLogic implements IAuthLogic{
    constructor(
        @inject('EntitiesFacade') private entitiesFacade: IEntitiesFacade
    ) {
    }
    public async login(request: ServiceRequest): Promise<any> {
        return Promise.resolve(undefined);
    }

    public async register(request: ServiceRequest): Promise<any> {

        const {email} = request.data;
        const user = await this.entitiesFacade.getUserByEmail(email)

        return request;
    }
}
