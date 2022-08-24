import {inject, injectable} from "inversify";
import {IAdvertisimentLogic} from "./IAdvertisimentLogic";
import {ServiceRequest} from "advertisiment-service-framework";
import {IAdvertisimentRepository} from "../../repositories/advertisiment/IAdvertisimentRepository";

@injectable()
export class AdvertisimentLogic implements IAdvertisimentLogic{
    constructor(
        @inject('AdvertisimentRepository') private advertisimentRepository: IAdvertisimentRepository
    ) {
    }

    public async getAdvertisiments(request: ServiceRequest): Promise<any> {
        return this.advertisimentRepository.getAdvertisiments(request);
    }
}
