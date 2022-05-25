import { GET_REGISTRATION_REQUEST, GET_REGISTRATION_SUCCESS, GET_REGISTRATION_FAILED, SET_REGISTRATION } from "../actions/registration";

const initialState = {
    form: {
        name: '',
        email: '',
        password: '',
    },
    isReg: false,
    registrationRequest: false,
    registrationFailed: false,
};

export const registrationReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_REGISTRATION_REQUEST: {
            return {...state, registrationRequest: true, registrationFailed: false}
        }
        case GET_REGISTRATION_SUCCESS: {
            return {...state, registrationRequest: false, form: action.payload, isReg: true,  registrationFailed: false}
        }
        case GET_REGISTRATION_FAILED: {
            return {...state, registrationRequest: false, form: { name: '', password: '', email: '' }, registrationFailed: true}
        }
        case SET_REGISTRATION: {
            return {...state, form: action.payload}
        }
        default: return state
    }
}
