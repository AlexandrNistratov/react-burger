import {TAllOrders, TData, TNumberOrder, TOrders} from "../../types/types";

const ingredientBun: TData = {
    calories: 420,
    carbohydrates: 53,
    fat: 24,
    image: "https://code.s3.yandex.net/react/code/bun-02.png",
    image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
    name: "Краторная булка N-200i",
    price: 1255,
    proteins: 80,
    type: "bun",
    __v: 0,
    id: "60d3b41abdacab0026a733c6",
    _id: "60d3b41abdacab0026a733c6",
};

const ingredient: TData = {
    calories: 100,
    carbohydrates: 100,
    fat: 99,
    image: "https://code.s3.yandex.net/react/code/sauce-01.png",
    image_large: "https://code.s3.yandex.net/react/code/sauce-01-large.png",
    image_mobile: "https://code.s3.yandex.net/react/code/sauce-01-mobile.png",
    name: "Соус с шипами Антарианского плоскоходца",
    price: 88,
    proteins: 101,
    type: "sauce",
    __v: 0,
    _id: "60d3b41abdacab0026a733cf",
    id: "60d3b41abdacab0026a733cf"
}

const numberOrder: TNumberOrder = {
    order: { number: 555 }
}

const orderDetails: TOrders = {
    createdAt: "2022-07-15T14:08:46.564Z",
    ingredients: ['60d3b41abdacab0026a733c7', '60d3b41abdacab0026a733c7', '60d3b41abdacab0026a733ca', '60d3b41abdacab0026a733d3', '60d3b41abdacab0026a733cd'],
    name: "Space метеоритный экзо-плантаго флюоресцентный бургер",
    number: 20295,
    status: "done",
    updatedAt: "2022-07-15T14:08:46.916Z",
    _id: "62d174ee42d34a001c2782b2"
}

const ordersSocket: TAllOrders = {
    success: true,
    orders: [],
    total: 555,
    totalToday: 555
}

const user = {
    email: "qwerty",
    name: "qwerty",
    password: "qwerty",
};

export { ingredientBun, ingredient, numberOrder , orderDetails, ordersSocket, user }