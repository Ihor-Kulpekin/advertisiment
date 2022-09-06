import {container, IService} from "advertisiment-service-framework";
import {EntitiesService} from "../services/EntitiesService";
import {IUserMethods} from "../BusinessLogic/user/IUserMethods";
import {UserMethods} from "../BusinessLogic/user/UserMethods";
import {IEntitiesDataLayer} from "../data-layer/IEntitiesDataLayer";
import {EntitiesDataLayer} from "../data-layer/EntitiesDataLayer";

container.bind<IService>('EntitiesService').to(EntitiesService);

container.bind<IUserMethods>('UserMethods').to(UserMethods);

container.bind<IEntitiesDataLayer>('EntitiesDataLayer').to(EntitiesDataLayer);

export {
    container
}
