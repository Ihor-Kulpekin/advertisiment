import "reflect-metadata";

import {Container} from "inversify";

import {IRedisClientNew, RedisClient} from "advertisiment-service-framework";

export const container = new Container();

container.bind<IRedisClientNew>('RedisCache').to(RedisClient).inSingletonScope()
