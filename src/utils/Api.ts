import { API_URL } from "./constants";
import { dataActionCreator } from "../store/data/data.actions";
import { numberOrdersActionCreator } from "../store/numberOrders/numberOrders.actions";
import { setCookie, getCookie, deleteCookie } from "./cookie";
import { userActionCreator } from "../store/user/user.actions";
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

const { registrationRequest, registrationSuccess, registrationFailed, loginRequest, loginSuccess, loginFailed, userRequest,
    userSuccess, userFailed, userUpdateRequest, userUpdateSuccess, userUpdateFailed } = userActionCreator;

const checkResponse = (res: Response) => {
    if (res.ok) {
        return res.json();
    }
    return Promise.reject(`Ошибка ${res.status}`);
};

export const getData: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        const { dataRequest, dataSuccess, dataError } = dataActionCreator;
        dispatch(dataRequest())
        fetch(`${ API_URL }/ingredients`)
            .then(res =>  checkResponse(res))
            .then(data => dispatch(dataSuccess(data.data)))
            .catch(err => {
                console.log(err)
                dispatch(dataError())
            })
    }
};

export const getNumberOrders: AppThunk = (data: {}) => {
    return (dispatch: AppDispatch) => {
        const { numberOrdersRequest, numberOrdersSuccess, numberOrdersError,} = numberOrdersActionCreator;
        dispatch(numberOrdersRequest())
        fetch(`${ API_URL }/orders`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization:  getCookie("accessToken") || ''
            },
            body: JSON.stringify({
                ingredients: data
            })
        })
            .then(res => {
                return checkResponse(res)
            })
            .then(data => dispatch(numberOrdersSuccess(data)))
            .catch(err => {
                console.log(err)
                dispatch(numberOrdersError())})
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
        dispatch(userUpdateRequest())
        try {
            const res = await getUserUpdateRequest(data);
            (res && res.success) && dispatch(userUpdateSuccess(res.user));
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
                    dispatch(userUpdateSuccess(res.user))
                }
            } else {
                dispatch(userUpdateFailed())
            }
        }
    }
};


export const getUser: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        dispatch(userRequest())
        try {
            const res = await getUserRequest();
            (res && res.success) && await dispatch(userSuccess(res.user));
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
                    dispatch(userSuccess(res.user))
                }
            } else {
                dispatch(userFailed())
            }
        }
    }
};

export const register: AppThunk = (data: TRegister) => {
    return (dispatch: AppDispatch) => {

        dispatch(registrationRequest())
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
                dispatch(registrationSuccess(data))
                dispatch(loginSuccess(data))
                getUser()})
            .catch(() => {dispatch(registrationFailed())})
    }
};

export const login: AppThunk = (data: TLogin) => {
    return (dispatch: AppDispatch) => {
        dispatch(loginRequest())
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
                    dispatch(loginSuccess(data))
                    getUser()
                }
            })
            .catch(err => {
                console.log(err)
                dispatch(loginFailed())})
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