import {BaseRouter} from "../base.router";
import {AdvertisimentRouter} from "./advertisiment.router";
import {AuthRouter} from "./auth.router";

export class ApiV1 extends BaseRouter {
    public init(): void {
        this.router.use(
            '/advertisiment',
            new AdvertisimentRouter().routes
        )

        this.router.use(
            '/auth',
            new AuthRouter().routes
        )
    }
}
