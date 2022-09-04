import {Container} from "inversify";
import {IService} from "advertisiment-service-framework";
import {EntitiesService} from "../services/EntitiesService";
import {IUserMethods} from "../BusinessLogic/user/IUserMethods";
import {UserMethods} from "../BusinessLogic/user/UserMethods";

export const container = new Container();

container.bind<IService>('EntitiesService').to(EntitiesService);

container.bind<IUserMethods>('EntitiesService').to(UserMethods);
