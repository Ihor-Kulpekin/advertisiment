export interface IAdvertisimentRepository {
    getAdvertisiments(query: any): Promise<{items: any[], totalCount: number}>
}
