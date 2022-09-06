import {container, IService} from "advertisiment-service-framework";
import {AuthService} from "../services/Auth.service";
import {IAuthLogic} from "../BusinessLogic/auth-logic/IAuthLogic";
import {AuthLogic} from "../BusinessLogic/auth-logic/AuthLogic";

container.bind<IService>('AuthService').to(AuthService);

container.bind<IAuthLogic>('AuthLogic').to(AuthLogic);


export {
    container
};
