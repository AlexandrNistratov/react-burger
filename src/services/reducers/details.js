import { GET_DETAILS, DELETE_DETAILS } from "../actions/details";

const initialState = {
    ingredientsDetails: {},
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DETAILS: {
            return {...state, ingredientsDetails: action.payload}
        }
        case DELETE_DETAILS: {
            return {...state, ingredientsDetails: {}}
        }
        default: return state
    }
}

export const getDetailsAction = payload => ({ type: GET_DETAILS, payload });
export const deleteDetailsAction = payload => ({ type: DELETE_DETAILS, payload });