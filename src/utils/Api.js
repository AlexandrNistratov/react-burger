import { API_URL } from "./constants";
import { dataRequestAction, dataSuccessAction, dataFailedAction } from "../services/actions/data";
import { ordersRequestAction, ordersSuccessAction, ordersFailedAction } from "../services/actions/orders";
import { registrationRequestAction, registrationSuccessAction, registrationFailedAction } from "../services/actions/registration";
import { loginRequestAction, loginSuccessAction, loginFailedAction, setLoginAction } from "../services/actions/login";
import { setCookie, getCookie, deleteCookie } from "./cookie";
import { getUserRequestAction, getUserSuccessAction, getUserFailedAction, userUpdateFailedAction, userUpdateRequestAction, userUpdateSuccessAction } from "../services/actions/user";

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

const updateToken = async (token) => {
    return await fetch(API_URL + "auth/token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            token: token,
        }),
    }).then(res => checkResponse(res))
};

const getUserRequest = async () => {
    return await fetch(`${ API_URL }/auth/user`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: getCookie("accessToken")
        },
    })
        .then(res => checkResponse(res))
};


export const getUser = () => {
    return async dispatch => {
        dispatch(getUserRequestAction())
        try {
            const res = await getUserRequest();
            (res && res.success) && getUserSuccessAction(res.user);
        } catch (err) {
            if (err.message === "jwt expired") {
                deleteCookie("accessToken");
                const refreshToken = getCookie("refreshToken");
                const token = await updateToken(refreshToken);
                if (token.success) {
                    setCookie("accessToken", token.accessToken);
                    setCookie("refreshToken", token.refreshToken);
                }
                const res = await getUserRequest();
                if (res && res.success) {
                    dispatch(getUserSuccessAction(res.user))
                }
            } else {
                dispatch(getUserFailedAction())
            }
        }
    }
};

const getUserUpdateRequest = async (data) => {
    return await fetch(`${ API_URL }/auth/user`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: getCookie("accessToken")
        },
        body: JSON.stringify(data)
    })
        .then(res => checkResponse(res))
}

export const userUpdate = (data) => {
    return async dispatch => {
        dispatch(userUpdateRequestAction())
        try {
            const res = await getUserUpdateRequest(data);
            (res && res.success) && userUpdateSuccessAction(res.user);
        } catch (err) {
            if (err.message === "jwt expired") {
                deleteCookie("accessToken");
                const refreshToken = getCookie("refreshToken");
                const token = await updateToken(refreshToken);
                if (updateToken.success) {
                    setCookie("accessToken", token.accessToken);
                    setCookie("refreshToken", token.refreshToken);
                }
                const res = await getUserUpdateRequest(data);
                if (res && res.success) {
                    dispatch(userUpdateSuccessAction(res.user))
                }
            } else {
                dispatch(userUpdateFailedAction())
            }
        }
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
            .then(res => {
                 return checkResponse(res)
            })
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
        .then(() => {
            deleteCookie('accessToken');
            deleteCookie('refreshToken')
        })
        .catch(err => console.log(err))
};