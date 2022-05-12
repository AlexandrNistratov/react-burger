import { ADD_BUNS, ADD_INGREDIENTS, DELETE_INGREDIENT, MOVE_INGREDIENT } from "../actions/constructor";

const initialState = {
    bun: null,
    ingredients: [],
    allItems: [],
}

export const constructorReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUNS: {
            return {...state, bun: action.payload}
        }
        case ADD_INGREDIENTS: {
            return {...state, ingredients: [...state.ingredients, action.payload]}
        }
        case DELETE_INGREDIENT: {
            return {...state, ingredients:  state.ingredients.filter(item => item.key !== action.payload)}
        }
        case MOVE_INGREDIENT: {
            return {...state, ingredients: action.payload}
        }
        default: return state
    }
}

export const addBunsAction = payload => ({ type: ADD_BUNS, payload });
export const addIngredientsAction = payload => ({ type: ADD_INGREDIENTS, payload });
export const deleteIngredientsActions = payload => ({ type: DELETE_INGREDIENT, payload });
export const moveIngredientsActions = payload => ({ type: MOVE_INGREDIENT, payload });