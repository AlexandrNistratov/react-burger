import {RootDetailsAction, TDetailsAction} from "../actions/detailsActions";

type TInitialState = {
    ingredientsDetails: object
}

const initialState: TInitialState = {
    ingredientsDetails: {},
}

export const detailsReducer = (state: TInitialState = initialState, action: TDetailsAction): TInitialState => {
    switch (action.type) {
        case RootDetailsAction.GET_DETAILS: {
            return {...state, ingredientsDetails: action.payload}
        }
        case RootDetailsAction.DELETE_DETAILS: {
            return {...state, ingredientsDetails: {}}
        }
        default: return state
    }
}
