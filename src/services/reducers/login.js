import { GET_LOGIN_REQUEST, GET_LOGIN_SUCCESS, GET_LOGIN_FAILED, SET_LOGIN } from "../actions/login";

const initialState = {
    form: {
        email: '',
        password: '',
    },
    isAuth: false,
    token: '',
    loginRequest: false,
    loginFailed: false,
};

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_LOGIN_REQUEST: {
            return {...state, loginRequest: true, loginFailed: false}
        }
        case GET_LOGIN_SUCCESS: {
            return {...state, loginRequest: false, form: action.payload, isAuth: true, token: action.payload, loginFailed: false}
        }
        case GET_LOGIN_FAILED: {
            return {...state, loginRequest: false, form: { password: '', email: '' }, loginFailed: true}
        }
        case SET_LOGIN: {
            return {...state, form: action.payload}
        }
        default: return state
    }
}