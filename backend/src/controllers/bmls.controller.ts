import {CommonUtil} from "../util/common.util";
import {Context} from "koa";
import {container} from "../di-container/container";
import {IRedisClientNew, Queues, ServiceRequest, ServiceRequestUtil} from "advertisiment-service-framework";

export class BmlsController {
    private static redisCache = container.get<IRedisClientNew>('RedisCache')

    static async getAdvertisiment(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.bmls, new ServiceRequest({
            method: 'getAdvertisiment'
        }))

        CommonUtil.makeResponse(ctx, result);
    }
}
