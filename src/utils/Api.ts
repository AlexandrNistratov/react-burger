import { API_URL } from "./constants";
import { dataRequestAction, dataSuccessAction, dataFailedAction } from "../store/data/data.actions";
import { ordersRequestAction, ordersSuccessAction, ordersFailedAction } from "../store/orders/orders.actions";
import { setCookie, getCookie, deleteCookie } from "./cookie";
import { registrationRequestAction, registrationSuccessAction, registrationFailedAction,
    loginRequestAction, loginSuccessAction, loginFailedAction,
    getUserRequestAction, getUserSuccessAction, getUserFailedAction,
    userUpdateFailedAction, userUpdateRequestAction, userUpdateSuccessAction } from "../store/user/user.actions";
import { AppDispatch, AppThunk} from "../types";

type TGetUserUpdate = {
    name?: string;
    email?: string;
    password?: string;
}

type TRegister = {
    name: string;
    email: string;
    password: string;
}

type TLogin = {
    email: string;
    password: string;
}

const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getData: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        dispatch(dataRequestAction())
        fetch(`${ API_URL }/ingredients`)
            .then(res =>  checkResponse(res))
            .then(data => dispatch(dataSuccessAction(data.data)))
            .catch(err => {
                console.log(err)
                dispatch(dataFailedAction())
            })
    }
};

export const getOrders: AppThunk = (data: {}) => {
    return (dispatch: AppDispatch) => {
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
                return checkResponse(res)
            })
            .then(data => dispatch(ordersSuccessAction(data)))
            .catch(err => {
                console.log(err)
                dispatch(ordersFailedAction())})
    }
};

export const forgotPassword = (email: string) => {
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

export const resetPassword = (password: string, token: string) => {
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

const updateToken = async (token: string) => {
    return await fetch(`${ API_URL }/auth/token`, {
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
            Authorization: getCookie("accessToken") || ''
        },
    })
        .then(res => checkResponse(res))
};

const getUserUpdateRequest = async (data: TGetUserUpdate) => {
    return await fetch(`${ API_URL }/auth/user`, {
        method: 'PATCH',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: getCookie("accessToken") || ''
        },
        body: JSON.stringify(data)
    })
        .then(res => checkResponse(res))
}

export const userUpdate: AppThunk = (data: TGetUserUpdate) => {
    return async (dispatch: AppDispatch) => {
        dispatch(userUpdateRequestAction())
        try {
            const res = await getUserUpdateRequest(data);
            (res && res.success) && dispatch(userUpdateSuccessAction(res.user));
        } catch (err) {
            if (err === "Ошибка 403") {
                deleteCookie("accessToken");
                const refreshToken = getCookie("refreshToken") || '';
                const token = await updateToken(refreshToken);
                if (token.success) {
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


export const getUser: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(getUserRequestAction())
        try {
            const res = await getUserRequest();
            (res && res.success) && await dispatch(getUserSuccessAction(res.user));
        } catch (err) {
            console.log(err)
            if (err === "Ошибка 403") {
                deleteCookie("accessToken");
                const refreshToken = getCookie("refreshToken") || '';
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

export const register: AppThunk = (data: TRegister) => {
    return (dispatch: AppDispatch) => {
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
            .then(data => {
                dispatch(registrationSuccessAction(data))
                dispatch(loginSuccessAction(data))
                getUser()})
            .catch(() => {dispatch(registrationFailedAction())})
    }
};

export const login: AppThunk = (data: TLogin) => {
    return (dispatch: AppDispatch) => {
        dispatch(loginRequestAction())
        fetch(`${ API_URL }/auth/login`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password
            })
        })
            .then(res => {
               return  checkResponse(res)
            })
            .then(data => {
                if (data) {
                    setCookie('accessToken', data.accessToken);
                    setCookie('refreshToken', data.refreshToken);
                    dispatch(loginSuccessAction(data))
                    getUser()
                }
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
            deleteCookie('refreshToken');
        })
        .catch(err => console.log(err))
};