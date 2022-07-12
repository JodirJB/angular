export interface Properties {
    _id: string;
    title: string;
    address: string;
    location: string;
    currency: string;
    price: string;
    description: string;
    isFavorite: boolean;
    tags: string
    propertyType: string;
    levels: number;
    lotSize: number;
    garage: number;
    rooms: number;
    bathrooms: number;
    airAconditioner: boolean;
    terrace: boolean;
    garden: boolean;
    serviceRoom: boolean;
    warehouse: boolean;
    security: boolean;

}

export interface Images {
    propertyId: string;
    images: string;
}