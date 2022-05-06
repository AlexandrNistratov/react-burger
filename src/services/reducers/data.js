import { GET_DATA, GET_DETAILS, DELETE_DETAILS, GET_ORDERS } from "../actions/data";

const initialState = {
    ingredientsData: [],
    ingredientsDetails: {},
    currentOrder: [],
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {...state, ingredientsData: action.payload}
        }
        case GET_DETAILS: {
            return {...state, ingredientsDetails: action.payload}
        }
        case DELETE_DETAILS: {
            return {...state, ingredientsDetails: {}}
        }
        case GET_ORDERS: {
            return {...state, currentOrder: action.payload}
        }
        default: return state
    }
}


export const getIngredientsDataAction = payload => ({ type: GET_DATA, payload });
export const getCurrentOrderAction = payload => ({ type: GET_ORDERS, payload });
export const getDetailsAction = payload => ({ type: GET_DETAILS, payload });
export const deleteDetailsAction = payload => ({ type: DELETE_DETAILS, payload });
