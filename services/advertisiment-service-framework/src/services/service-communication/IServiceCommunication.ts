export interface IServiceCommunication {
    sendRequestToQueue(queue: any, msg: any): Promise<any>
}
