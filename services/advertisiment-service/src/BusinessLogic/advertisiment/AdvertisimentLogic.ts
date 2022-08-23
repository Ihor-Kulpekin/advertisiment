import {injectable} from "inversify";
import {IAdvertisimentLogic} from "./IAdvertisimentLogic";

@injectable()
export class AdvertisimentLogic implements IAdvertisimentLogic{
    public async getAdvertisiment(): Promise<any> {
        return 'Hello World';
    }
}
