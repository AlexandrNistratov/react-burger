import { API_URL } from "./constants";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getData = () => {
    return fetch(`${ API_URL }/ingredients`)
        .then((res) => checkResponse(res))
};

export const getOrders = (data) => {
    return fetch(`${ API_URL }/orders`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            ingredients: data
        })
    })
        .then((res) => checkResponse(res));
};