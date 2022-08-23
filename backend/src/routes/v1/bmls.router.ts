import {BaseRouter} from "../base.router";
import {BmlsController} from "../../controllers/bmls.controller";

export class BmlsRouter extends BaseRouter{
    public init(): void {
        this.router.get(
            '/',
            BmlsController.getAdvertisiment
        );
    }
}
