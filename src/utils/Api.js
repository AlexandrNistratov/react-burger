import { API_URL } from "./constants";
import { dataRequestAction, dataSuccessAction, dataFailedAction } from "../services/actions/data";
import { ordersRequestAction, ordersSuccessAction, ordersFailedAction } from "../services/actions/orders";

const checkResponse = (res) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getData = () => {
    return dispatch => {
        dispatch(dataRequestAction)
        fetch(`${ API_URL }/ingredients`)
            .then(res =>  checkResponse(res))
            .then(data => dispatch(dataSuccessAction(data.data)))
            .catch(err => {
                console.log(err)
                dispatch(dataFailedAction())
            })
    }
};

export const getOrders = (data) => {
    return dispatch => {
        dispatch(ordersRequestAction())
        fetch(`${ API_URL }/orders`, {
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
            .then(data => dispatch(ordersSuccessAction(data)))
            .catch(err => {
                console.log(err)
                dispatch(ordersFailedAction())})
    }
};

export const handleForgotPassword = (email) => {
    return fetch(`${ API_URL }/password-reset`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
        .then(res => checkResponse(res))
        .catch(err => console.log(err))
}