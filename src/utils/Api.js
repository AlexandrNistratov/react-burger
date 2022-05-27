import { API_URL } from "./constants";
import { dataRequestAction, dataSuccessAction, dataFailedAction } from "../services/actions/data";
import { ordersRequestAction, ordersSuccessAction, ordersFailedAction } from "../services/actions/orders";
import { registrationRequestAction, registrationSuccessAction, registrationFailedAction } from "../services/actions/registration";
import { loginRequestAction, loginSuccessAction, loginFailedAction, setLoginAction } from "../services/actions/login";
import { setCookie, getCookie, deleteCookie } from "./cookie";
import { userRequestAction, userSuccessAction, userFailedAction } from "../services/actions/user";
import {userUpdateFailedAction, userUpdateRequestAction, userUpdateSuccessAction} from "../services/actions/updateUser";

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
            .then(res => {
                console.log(res)
                checkResponse(res)
            })
            .then(data => dispatch(ordersSuccessAction(data)))
            .catch(err => {
                console.log(err)
                dispatch(ordersFailedAction())})
    }
};

export const forgotPassword = (email) => {
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

export const resetPassword = (password, token) => {
    return fetch(`${ API_URL }/password-reset/reset`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            password: password,
            token: token
        })
    })
        .then(res => checkResponse(res))
        .catch(err => console.log(err))
}

export const getUser = () => {
    return dispatch => {
        dispatch(userRequestAction())
        fetch(`${ API_URL }/auth/user`, {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: getCookie("accessToken")
            }
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res && res.success) {
                    dispatch(userSuccessAction(res.user))
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(userFailedAction())})
    }
};

export const userUpdate = (data) => {
    return dispatch => {
        dispatch(userUpdateRequestAction())
        fetch(`${ API_URL }/auth/user`, {
            method: 'PATCH',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: getCookie("accessToken")
            },
            body: JSON.stringify({data})
        })
            .then(res => checkResponse(res))
            .then(res => {
                if (res && res.success) {
                    dispatch(userUpdateSuccessAction(res.user))
                    getUser();
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(userUpdateFailedAction())})
    }
};

export const register = (data) => {
    return dispatch => {
        dispatch(registrationRequestAction())
        fetch(`${ API_URL }/auth/register`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: data.name,
                email: data.email,
             password: data.password
            })
        })
            .then(res => checkResponse(res))
            .then(data => dispatch(registrationSuccessAction(data)))
            .catch(err => {
                console.log(err)
                dispatch(registrationFailedAction())})
    }
};

export const login = (data) => {
    return dispatch => {
        dispatch(loginRequestAction)
        fetch(`${ API_URL }/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                authorization: getCookie("accessToken")
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(res => checkResponse(res))
            .then(data => {
                setCookie('accessToken', data.accessToken);
                setCookie('refreshToken', data.refreshToken);
                dispatch(getUser(data.user))
                dispatch(loginSuccessAction(data))
            })
            .catch(err => {
                console.log(err)
                dispatch(loginFailedAction())})
    }
};

export const logOut = () => {
    fetch(`${ API_URL }/auth/logout`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: getCookie("refreshToken")
        })
    })
        .then(res => checkResponse(res))
        .then(res => {
            deleteCookie('accessToken');
            deleteCookie('refreshToken')
        })
        .catch(err => console.log(err))
};