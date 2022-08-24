import {CommonUtil} from "../util/common.util";
import {Context} from "koa";
import {container} from "../di-container/container";
import {IRedisClientNew, Queues, ServiceRequest, ServiceRequestUtil} from "advertisiment-service-framework";

export class BmlsController {
    private static redisCache = container.get<IRedisClientNew>('RedisCache')

    static async getAdvertisiment(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.bmls, new ServiceRequest({
            method: 'getAdvertisiments',
            data: {limit: 10, skip: 0}
        }))

        CommonUtil.makeResponse(ctx, result);
    }
}
