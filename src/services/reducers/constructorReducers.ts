import { RootConstructorAction, TConstructorAction } from "../actions/constructorActions";
import { TData } from "../../utils/types";

type TInitialState = {
    bun: null | TData,
    ingredients: Array<TData & { key?: number}>,
}

const initialState: TInitialState = {
    bun: null,
    ingredients: [],
}

export const constructorReducer = (state: TInitialState = initialState, action: TConstructorAction): TInitialState => {
    switch (action.type) {
        case RootConstructorAction.ADD_BUNS: {
            return {...state, bun: action.payload}
        }
        case RootConstructorAction.ADD_INGREDIENTS: {
            return {...state, ingredients: [...state.ingredients, action.payload]}
        }
        case RootConstructorAction.DELETE_INGREDIENT: {
            return {...state, ingredients:  state.ingredients.filter(item => item.key !== action.payload)}
        }
        case RootConstructorAction.MOVE_INGREDIENT: {
            return {...state, ingredients: action.payload}
        }
        case RootConstructorAction.ClEAR_INGREDIENT: {
            return {...state, ingredients: [], bun: null}
        }
        default: return state
    }
}
