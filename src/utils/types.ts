export type TData = {
    _id: string;
    id: string;
    name: string;
    type: string;
    proteins: number;
    fat: number;
    carbohydrates: number;
    calories: number;
    price: number;
    image: string;
    image_mobile: string;
    image_large: string;
    key?: number;
    index: string;
}

export type TConstructorList = {
    item: TData;
    key: TData['key'];
    index: number;
}