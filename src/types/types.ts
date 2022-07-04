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
}

export type TUser = {
    name: string,
    email: string,
    password: string
}

export type TIngredientDetails = {
    calories: number;
    carbohydrates: number;
    fat: number;
    image: string;
    name: string;
    proteins: number;
};

export type TOrder = {
    order: { number: number };
};