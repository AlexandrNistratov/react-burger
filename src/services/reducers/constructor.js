import { ADD_BUNS, DELETE_BUNS, ADD_INGREDIENTS, ALL_ITEMS_CONSTRUCTOR, DELETE_INGREDIENT } from "../actions/constructor";

const initialState = {
    bun: null,
    ingredients: [],
    allItems: []
}

export const constructorReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUNS: {
            return {...state, bun: action.payload}
        }
        case DELETE_BUNS: {
            return {...state, bun: null }
        }
        case ADD_INGREDIENTS: {
            return {...state, ingredients: [...state.ingredients, action.payload]}
        }
        case DELETE_INGREDIENT: {
            return {...state, ingredients:  state.ingredients.filter(item => item._id !== action.payload)}
        }
        default: return state
    }
}

export const addBunsAction = payload => ({ type: ADD_BUNS, payload });
export const deleteBunsAction = payload => ({ type: DELETE_BUNS, payload });
export const addIngredientsAction = payload => ({ type: ADD_INGREDIENTS, payload });
export const deleteIngredientsActions = payload => ({ type: DELETE_INGREDIENT, payload })