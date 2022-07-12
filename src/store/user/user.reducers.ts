import { RootUserActions, TUserAction } from "./user.actions";
import { TUser } from "../../types/types";

type TUserInitialState = {
    user: TUser,

    token: string,

    isUser: boolean,
    isAuth: boolean,

    loginRequest: boolean,
    loginFailed: boolean,

    registrationRequest: boolean,
    registrationFailed: boolean,

    getUserRequest: boolean,
    getUserFailed: boolean,

    userUpdateRequest: boolean,
    useUpdateFailed: boolean,
}
const initialState: TUserInitialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },

    token: '',

    isUser: false,
    isAuth: false,

    loginRequest: false,
    loginFailed: false,

    registrationRequest: false,
    registrationFailed: false,

    getUserRequest: false,
    getUserFailed: false,

    userUpdateRequest: false,
    useUpdateFailed: false,
};

export const userReducer = (state: TUserInitialState = initialState, action: TUserAction): TUserInitialState => {
    switch (action.type) {
        //Регистрация
        case RootUserActions.GET_REGISTRATION_REQUEST: {
            return {...state, registrationRequest: true}
        }
        case RootUserActions.GET_REGISTRATION_SUCCESS: {
            return {...state, registrationRequest: false, user: action.payload, isUser: true, isAuth: true, registrationFailed: false}
        }
        case RootUserActions.GET_REGISTRATION_FAILED: {
            return {...state, registrationRequest: false, user: { name: '', password: '', email: '' }, isUser: false, isAuth: false, registrationFailed: true}
        }
        //Авторизация
        case RootUserActions.GET_LOGIN_REQUEST: {
            return {...state, loginRequest: true}
        }
        case RootUserActions.GET_LOGIN_SUCCESS: {
            return {...state, loginRequest: false, user: action.payload, isUser: true, isAuth: true}
        }
        case RootUserActions.GET_LOGIN_FAILED: {
            return {...state, loginRequest: false, user: { password: '', email: '', name: '' }, token: '', loginFailed: true}
        }
        //Выход
        case RootUserActions.LOG_OUT: {
            return {...state, user: { password: '', email: '', name: '' }, isUser: false, isAuth: false, loginFailed: false}
        }
        //Запрос юзера
        case RootUserActions.GET_USER_REQUEST: {
            return {...state, getUserRequest: true}
        }
        case RootUserActions.GET_USER_SUCCESS: {
            return {...state, getUserRequest: false, user: action.payload, isUser: true,  isAuth: true}
        }
        case RootUserActions.GET_USER_FAILED: {
            return {...state, getUserFailed: true}
        }
        //Редактирование юзера
        case RootUserActions.USER_UPDATE_REQUEST: {
            return {...state, userUpdateRequest: true}
        }
        case RootUserActions.USER_UPDATE_SUCCESS: {
            return {...state, userUpdateRequest: false,  user: action.payload, isUser: true}
        }
        case RootUserActions.USER_UPDATE_FAILED: {
            return {...state, useUpdateFailed: true}
        }
        //Изменение полей форм
        case RootUserActions.SET_EDIT: {
            return {...state, user: action.payload}
        }
        default: return state
    }
}