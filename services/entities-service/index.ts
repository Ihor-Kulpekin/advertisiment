import {container} from "./src/common/Installer";
import {IService} from "advertisiment-service-framework";

async function main() {
    await container.get<IService>('EntitiesService').start();
}

main().then().catch();
