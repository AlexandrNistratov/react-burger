import { RootDataAction, TDataAction } from "../actions/dataActions";
import { TData } from "../../utils/types";

type TInitialState = {
    ingredientsData: null | Array<TData>,
    dataRequest: boolean,
    dataFailed: boolean
}

const initialState: TInitialState = {
    ingredientsData: [],
    dataRequest: false,
    dataFailed: false
}

export const dataReducer = (state: TInitialState = initialState, action: TDataAction): TInitialState => {
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
