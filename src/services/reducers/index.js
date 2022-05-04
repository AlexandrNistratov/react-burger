import { combineReducers } from "redux";
import { GET_DATA, GET_INGREDIENTS, ADD_DETAILS, DELETE_DETAILS, GET_ORDERS } from "../actions";

const initialState = {
    ingredientsData: [],
    constructorData: [],
    currentIngredients: {},
    currentOrder: []
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA: {
            return {...state, ingredientsData: action.payload}
        }
        case GET_INGREDIENTS: {
            return {...state, constructorData: action.payload}
        }
        case ADD_DETAILS: {
            return {...state, currentIngredients: action.payload}
        }
        case DELETE_DETAILS: {
            return {...state, currentIngredients: {}}
        }
        case GET_ORDERS: {
            return {...state, currentOrder: action.payload}
        }
        default: return state
    }
}


export const getIngredientsDataAction = payload => ({type: GET_DATA, payload})
export const getCurrentOrderAction = payload => ({type: GET_ORDERS, payload})

export const rootReducer = combineReducers({
    getData: dataReducer
})