import {Container} from "inversify";
import {IService} from "advertisiment-service-framework";
import {AuthService} from "../services/Auth.service";
import {IAuthLogic} from "../BusinessLogic/auth-logic/IAuthLogic";
import {AuthLogic} from "../BusinessLogic/auth-logic/AuthLogic";

export const container = new Container();

container.bind<IService>('AuthService').to(AuthService);

container.bind<IAuthLogic>('AuthLogic').to(AuthLogic);
