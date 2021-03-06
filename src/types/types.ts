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
    __v: number
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

export type TNumberOrder = {
    order: { number: number };
};

export type TOrders = {
    ingredients: Array<string>;
    _id: string;
    status: string;
    number: number;
    name: string;
    createdAt: string;
    updatedAt: string;
}

export type TAllOrders = {
    success: boolean;
    orders: TOrders[];
    total: number;
    totalToday: number;
}