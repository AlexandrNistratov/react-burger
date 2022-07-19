import { RootDetailsAction, TDetailsAction } from "./details.actions";
import { TIngredientDetails } from "../../types/types";

type TDetailsInitialState = {
    ingredientsDetails: TIngredientDetails
}

export const initialState: TDetailsInitialState = {
    ingredientsDetails: {
        calories: 0,
        carbohydrates: 0,
        fat: 0,
        image: '',
        name: '',
        proteins: 0
    },
}

export const detailsReducer = (state: TDetailsInitialState = initialState, action: TDetailsAction): TDetailsInitialState => {
    switch (action.type) {
        case RootDetailsAction.GET_DETAILS: {
            return {...state, ingredientsDetails: action.payload}
        }
        case RootDetailsAction.DELETE_DETAILS: {
            return {...state, ingredientsDetails: {
                    calories: 0,
                    carbohydrates: 0,
                    fat: 0,
                    image: '',
                    name: '',
                    proteins: 0}}
        }
        default: return state
    }
}
