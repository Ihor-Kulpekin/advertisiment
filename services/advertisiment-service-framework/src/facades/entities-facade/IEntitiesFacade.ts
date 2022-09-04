export interface IEntitiesFacade {
    getUserByEmail(email: string): Promise<any>;
}
