import {BaseRouter} from "../base.router";
import {AdvertisimentRouter} from "./advertisiment.router";

export class ApiV1 extends BaseRouter {
    public init(): void {
        this.router.use(
            '/advertisiment',
            new AdvertisimentRouter().routes
        )
    }
}
