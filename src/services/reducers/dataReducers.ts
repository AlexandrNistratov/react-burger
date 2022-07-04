import { RootDataAction, TDataAction } from "../actions/dataActions";
import { TData } from "../../types/types";

type TDataInitialState = {
    ingredientsData: Array<TData>,
    dataRequest: boolean,
    dataFailed: boolean
}

const initialState: TDataInitialState = {
    ingredientsData: [],
    dataRequest: false,
    dataFailed: false
}

export const dataReducer = (state: TDataInitialState = initialState, action: TDataAction): TDataInitialState => {
    switch (action.type) {
        case RootDataAction.GET_DATA_REQUEST: {
            return {...state, dataRequest: true, dataFailed: false}
        }
        case RootDataAction.GET_DATA_SUCCESS: {
            return {...state, dataRequest: false, ingredientsData: action.payload, dataFailed: false}
        }
        case RootDataAction.GET_DATA_FAILED: {
            return {...state, dataRequest: false, ingredientsData: [], dataFailed: true}
        }
        default: return state
    }
}
