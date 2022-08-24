import { Container } from "inversify";
import {IDBFactory, IRedisClientNew, IService, RedisClient} from "advertisiment-service-framework";
import {AdvertisimentService} from "../services/advertisiment.service";
import {IAdvertisimentLogic} from "../BusinessLogic/advertisiment/IAdvertisimentLogic";
import {AdvertisimentLogic} from "../BusinessLogic/advertisiment/AdvertisimentLogic";
import {IAdvertisimentRepository} from "../repositories/advertisiment/IAdvertisimentRepository";
import {AdvertisimentRepository} from "../repositories/advertisiment/AdvertisimentRepository";
import {AdvertisimentFactory} from "../factory/AdvertisimentFactory";

export const container = new Container()

container.bind<IService>('AdvertisimentService').to(AdvertisimentService);

//Repositories
container.bind<IAdvertisimentRepository>('AdvertisimentRepository').to(AdvertisimentRepository)

container.bind<IAdvertisimentLogic>('AdvertisimentLogic').to(AdvertisimentLogic);

container.bind<IRedisClientNew>('RedisCache').to(RedisClient).inSingletonScope();

// DBFactory
container.bind<IDBFactory>('DBFactory').to(AdvertisimentFactory).inSingletonScope();
