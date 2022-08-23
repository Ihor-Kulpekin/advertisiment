export class ServiceRequest {
    method: string;
    data: any;

    constructor(options?: any) {
        if (options) {
            for (let key in options) {
                (<any>this)[key] = options[key];
            }
        }
    }
}

export interface IService {
    start(): Promise<any>;
    close(): Promise<any>;
}
