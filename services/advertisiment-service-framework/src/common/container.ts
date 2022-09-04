import {Container} from "inversify";
import {IServiceCommunication} from "../services/service-communication/IServiceCommunication";
import {ServiceCommunication} from "../services/service-communication/ServiceCommunication";
import {IRedisClientNew} from "../services/redis/IRedisCache";
import {RedisClient} from "../services/redis/RedisCache";
import {DBFactory} from "../factory/DBFactory";
import {IDBFactory} from "../factory/IDBFactory";
import {IEntitiesFacade} from "../facades/entities-facade/IEntitiesFacade";
import {EntitiesFacade} from "../facades/entities-facade/EntitiesFacade";

const container = new Container();

container.bind<IServiceCommunication>('ServiceCommunication').to(ServiceCommunication);

container.bind<IRedisClientNew>('RedisCache').to(RedisClient).inSingletonScope();

container.bind<IDBFactory>('DBFactory').to(DBFactory).inSingletonScope();

//facades

container.bind<IEntitiesFacade>('EntitiesFacade').to(EntitiesFacade);

export default container;
