import { ADD_BUNS, ADD_INGREDIENTS, DELETE_INGREDIENT, MOVE_INGREDIENT, ClEAR_INGREDIENT } from "../actions/constructor";

const initialState = {
    bun: null,
    ingredients: [],
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
        case ClEAR_INGREDIENT: {
            return {...state, ingredients: [], bun: null}
        }
        default: return state
    }
}
