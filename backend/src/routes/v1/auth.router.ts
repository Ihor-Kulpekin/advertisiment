import {BaseRouter} from "../base.router";
import {AuthController} from "../../controllers/auth.controller";

export class AuthRouter extends BaseRouter {
    protected init(): void {
        this.router.get(
            '/register',
            AuthController.register
        )
    }
}
