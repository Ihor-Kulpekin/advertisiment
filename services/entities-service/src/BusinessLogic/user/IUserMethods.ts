export interface IUserMethods {
    getUserByEmail(email: string): Promise<any>;
}
