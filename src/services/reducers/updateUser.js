import { GET_USER_UPDATE_REQUEST, GET_USER_UPDATE_SUCCESS, GET_USER_UPDATE_FAILED } from "../actions/updateUser";

const initialState = {
    user: {
        name: '',
        email: '',
        password: '',
    },
    isUpdate: false,
    userUpdateRequest: false,
    useUpdaterFailed: false,
};

export const userUpdateReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_USER_UPDATE_REQUEST: {
            return {...state, userUpdateRequest: true, useUpdaterFailed: false}
        }
        case GET_USER_UPDATE_SUCCESS: {
            return {...state, userUpdateRequest: false, user: action.payload, isUpdate: true, useUpdaterFailed: false}
        }
        case GET_USER_UPDATE_FAILED: {
            return {...state, userUpdateRequest: false, useUpdaterFailed: true}
        }
        default: return state
    }
}