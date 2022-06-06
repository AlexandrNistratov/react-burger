import { GET_REGISTRATION_REQUEST, GET_REGISTRATION_SUCCESS, GET_REGISTRATION_FAILED,
    GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED,
    LOG_OUT,
    GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED,
    USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, USER_UPDATE_FAILED,
    SET_EDIT} from "../actions/userActions";

export const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },

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

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        //Регистрация
        case GET_REGISTRATION_REQUEST: {
            return {...state, registrationRequest: true}
        }
        case GET_REGISTRATION_SUCCESS: {
            return {...state, registrationRequest: false, user: action.payload, isUser: true, isAuth: true, registrationFailed: false}
        }
        case GET_REGISTRATION_FAILED: {
            return {...state, registrationRequest: false, user: { name: '', password: '', email: '' }, isUser: false, isAuth: false, registrationFailed: true}
        }
        //Авторизация
        case GET_LOGIN_REQUEST: {
            return {...state, loginRequest: true}
        }
        case GET_LOGIN_SUCCESS: {
            return {...state, loginRequest: false, user: action.payload, isUser: true, isAuth: true}
        }
        case GET_LOGIN_FAILED: {
            return {...state, loginRequest: false, user: { password: '', email: '', name: '' }, token: '', loginFailed: true}
        }
        //Выход
        case LOG_OUT: {
            return {...state, user: { password: '', email: '', name: '' }, isUser: false, isAuth: false, loginFailed: false}
        }
        //Запрос юзера
        case GET_USER_REQUEST: {
            return {...state, getUserRequest: true}
        }
        case GET_USER_SUCCESS: {
            return {...state, getUserRequest: false, user: action.payload, isUser: true,  isAuth: true}
        }
        case GET_USER_FAILED: {
            return {...state, getUserFailed: true}
        }
        //Редактирование юзера
        case USER_UPDATE_REQUEST: {
            return {...state, userUpdateRequest: true}
        }
        case USER_UPDATE_SUCCESS: {
            return {...state, userUpdateRequest: false,  user: action.payload, isUser: true}
        }
        case USER_UPDATE_FAILED: {
            return {...state, useUpdateFailed: true}
        }
        //Изменение полей форм
        case SET_EDIT: {
            return {...state, user: action.payload}
        }
        default: return state
    }
}