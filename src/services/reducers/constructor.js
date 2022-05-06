import { GET_PRICE, ADD_BUNS, ADD_INGREDIENTS, ALL_ITEMS_CONSTRUCTOR, DELETE_INGREDIENT } from "../actions/constructor";

const initialState = {
    bun: null,
    ingredients: [],
    allItems: [],
    price: ''
}

export const constructorReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUNS: {
            return {...state, bun: action.payload}
        }
        case ADD_INGREDIENTS: {
            return {...state, ingredients: [...state.ingredients, action.payload]}
        }
        case DELETE_INGREDIENT: {
            return {...state, ingredients:  state.ingredients.filter(item => item._id !== action.payload)}
        }
        case GET_PRICE: {
            return {...state, price: action.payload}
        }
        case ALL_ITEMS_CONSTRUCTOR: {
            return {...state, allItems: [...state.allItems, action.payload]}
        }
        default: return state
    }
}

export const addBunsAction = payload => ({ type: ADD_BUNS, payload });
export const addNoBunsAction = payload => ({ type: ADD_INGREDIENTS, payload });
export const getPriceActions = payload => ({ type: GET_PRICE, payload });
export const allItemsActions = payload => ({ type: ALL_ITEMS_CONSTRUCTOR, payload });
export const deleteIngredientsActions = payload => ({ type: DELETE_INGREDIENT, payload })