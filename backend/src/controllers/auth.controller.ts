import {Context} from "koa";
import {Queues, ServiceRequest, ServiceRequestUtil} from "advertisiment-service-framework";
import {CommonUtil} from "../util/common.util";

export class AuthController {
    static async register(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.auth, new ServiceRequest({
            method: 'registerUser',
            data: {...ctx.query}
        }))

        CommonUtil.makeResponse(ctx, result);
    }

    static async login(ctx: Context): Promise<void> {
        const result = await ServiceRequestUtil.send(Queues.auth, new ServiceRequest({
            method: 'loginUser',
            data: {...ctx.query}
        }))

        CommonUtil.makeResponse(ctx, result);
    }
}
