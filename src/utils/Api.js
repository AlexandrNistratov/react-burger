import { API_URL } from "./constants";
import { getIngredientsDataAction, getCurrentOrderAction } from "../services/reducers/data";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getData = () => {
    return dispatch => {
        return fetch(`${ API_URL }/ingredients`)
            .then(res =>  checkResponse(res))
            .then(data => dispatch(getIngredientsDataAction(data.data)))
            .catch(err => console.log(err))
    }
};

export const getOrders = (data) => {
    return dispatch => {
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
            .then(res => checkResponse(res))
            .then(data => dispatch(getCurrentOrderAction(data)))
            .catch(err => console.log(err))
    }
};