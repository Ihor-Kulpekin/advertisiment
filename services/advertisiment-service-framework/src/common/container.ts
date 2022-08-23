import {Container} from "inversify";
import {IServiceCommunication} from "../services/service-communication/IServiceCommunication";
import {ServiceCommunication} from "../services/service-communication/ServiceCommunication";
import {IRedisClientNew} from "../services/redis/IRedisCache";
import {RedisClient} from "../services/redis/RedisCache";

const container = new Container();

container.bind<IServiceCommunication>('ServiceCommunication').to(ServiceCommunication);

container.bind<IRedisClientNew>('RedisCache').to(RedisClient).inSingletonScope();

export default container;
