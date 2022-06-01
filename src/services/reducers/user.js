import { GET_USER_REQUEST, GET_USER_SUCCESS, GET_USER_FAILED, USER_UPDATE_FAILED, USER_UPDATE_REQUEST, USER_UPDATE_SUCCESS, SET_USER_UPDATE } from "../actions/user";

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },
    isUser: false,
    getUserRequest: false,
    getUserFailed: false,
    userUpdateRequest: false,
    useUpdateFailed: false,
};

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_REQUEST: {
            return {...state, getUserRequest: true, getUserFailed: false}
        }
        case GET_USER_SUCCESS: {
            return {...state, getUserRequest: false, user: action.payload, isUser: true, getUserFailed: false}
        }
        case GET_USER_FAILED: {
            return {...state, getUserRequest: false, getUserFailed: true}
        }
        case USER_UPDATE_REQUEST: {
            return {...state, userUpdateRequest: true, useUpdateFailed: false}
        }
        case USER_UPDATE_SUCCESS: {
            return {...state, userUpdateRequest: false, user: action.payload, useUpdateFailed: false}
        }
        case USER_UPDATE_FAILED: {
            return {...state, userUpdateRequest: false, useUpdateFailed: true}
        }
        case SET_USER_UPDATE: {
            return {...state, user: action.payload}
        }
        default: return state
    }
}