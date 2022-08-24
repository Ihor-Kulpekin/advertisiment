import {CommonUtil} from "../util/common.util";
import {Context} from "koa";
import {container} from "../di-container/container";
import {IRedisClientNew, Queues, ServiceRequest, ServiceRequestUtil} from "advertisiment-service-framework";

export class BmlsController {
    private static redisCache = container.get<IRedisClientNew>('RedisCache')

    static async getAdvertisiments(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.advertisiment, new ServiceRequest({
            method: 'getAdvertisiments',
            data: {...ctx.query}
        }))

        CommonUtil.makeResponse(ctx, result);
    }

    static async createAdvertisiment(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.advertisiment, new ServiceRequest({
            method: 'createAdvertisiment',
            data: {...ctx.request.body}
        }))

        CommonUtil.makeResponse(ctx, result);
    }
}
