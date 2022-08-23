import 'source-map-support/register';
import {container} from "./src/common/Installer";
import { IService } from 'advertisiment-service-framework';

async function main() {
    await container.get<IService>('AdvertisimentService').start();
}

main().then(()=>{
    console.log('success1')
})
