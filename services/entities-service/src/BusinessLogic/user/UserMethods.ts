import {inject, injectable} from "inversify";
import {IUserMethods} from "./IUserMethods";
import {AvailableCollections, IEntitiesDataLayer} from "../../data-layer/IEntitiesDataLayer";

@injectable()
export class UserMethods implements IUserMethods{
    private fieldsTable = '(' +
        'id INT AUTO_INCREMENT PRIMARY KEY,' +
        'email VARCHAR(255) NOT NULL,' +
        'password VARCHAR(255) NOT NULL,' +
        'firstName VARCHAR(255) NOT NULL,' +
        'lastName VARCHAR(255) NOT NULL)';

    constructor(
        @inject('EntitiesDataLayer') private entitiesDataLayer: IEntitiesDataLayer
    ) {
    }

    public async getUserByEmail(email: string): Promise<any> {

        const userByEmail = this.entitiesDataLayer.findOne(AvailableCollections.Users, {email}, this.fieldsTable)

        return email;
    }
}
