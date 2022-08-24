import {injectable} from "inversify";
import {DBFactory} from 'advertisiment-service-framework';

import {IAdvertisimentFactory} from "./IAdvertisimentFactory";


@injectable()
export class AdvertisimentFactory extends DBFactory implements IAdvertisimentFactory{
    public async Advertisiment(): Promise<void> {
        const sql = 'CREATE TABLE IF NOT EXISTS advertisiment ' +
            '(id INT AUTO_INCREMENT PRIMARY KEY, ' +
            'name VARCHAR(255), ' +
            'price FLOAT,' +
            'description VARCHAR(1000),' +
            'createdAt DATE,' +
            'mainPhoto VARCHAR(255),' +
            'firstPhoto VARCHAR(255))';


        await this.createTable(sql);
    }
}
