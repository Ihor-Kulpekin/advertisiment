import { Container } from "inversify";
import {IRedisClientNew, IService, RedisClient} from "advertisiment-service-framework";
import {AdvertisimentService} from "../services/advertisiment.service";
import {IAdvertisimentLogic} from "../BusinessLogic/advertisiment/IAdvertisimentLogic";
import {AdvertisimentLogic} from "../BusinessLogic/advertisiment/AdvertisimentLogic";

export const container = new Container()

container.bind<IService>('AdvertisimentService').to(AdvertisimentService);

//Repositories

container.bind<IAdvertisimentLogic>('AdvertisimentLogic').to(AdvertisimentLogic);

container.bind<IRedisClientNew>('RedisCache').to(RedisClient).inSingletonScope()
