import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED } from "../actions/user";

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },
    userRequest: false,
    userFailed: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {...state, userRequest: true, userFailed: false}
        }
        case GET_USER_SUCCESS: {
            return {...state, userRequest: false, user: action.payload, userFailed: false}
        }
        case GET_USER_FAILED: {
            return {...state, userRequest: false, userFailed: true}
        }
        default: return state
    }
}