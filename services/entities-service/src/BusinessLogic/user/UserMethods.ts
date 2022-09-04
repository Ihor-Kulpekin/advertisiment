import {injectable} from "inversify";
import {IUserMethods} from "./IUserMethods";

@injectable()
export class UserMethods implements IUserMethods{
    public async getUserByEmail(email: string): Promise<any> {
        return 'user';
    }
}
