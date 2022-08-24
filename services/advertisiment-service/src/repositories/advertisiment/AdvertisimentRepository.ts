import {IAdvertisimentRepository} from "./IAdvertisimentRepository";
import {BaseDataRepository} from "advertisiment-service-framework";
import {inject, injectable} from "inversify";
import {IAdvertisimentFactory} from "../../factory/IAdvertisimentFactory";

@injectable()
export class AdvertisimentRepository extends BaseDataRepository implements IAdvertisimentRepository{
    protected tableName = 'advertisiment';

    constructor(
        @inject('DBFactory') protected dbFactory: IAdvertisimentFactory
    ) {
        // @ts-ignore
        super(()=>{
            this.dbFactory.Advertisiment().then();
        });
    }

    public async getAdvertisiments(query: any): Promise<{ items: any[]; totalCount: number }> {
        const items: any = await this.getAll(query);
        const totalCount: any = await this.count(query);

        return {
            items: items[0],
            totalCount: totalCount[0][0]['COUNT(*)']
        };
    }
}
