import { GET_DATA_REQUEST, GET_DATA_SUCCESS, GET_DATA_FAILED } from "../actions/data";

const initialState = {
    ingredientsData: [],
    dataRequest: false,
    dataFailed: false
}

export const dataReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DATA_REQUEST: {
            return {...state, dataRequest: true, dataFailed: false}
        }
        case GET_DATA_SUCCESS: {
            return {...state, dataRequest: false, ingredientsData: action.payload, dataFailed: false}
        }
        case GET_DATA_FAILED: {
            return {...state, dataRequest: false, ingredientsData: [], dataFailed: true}
        }
        default: return state
    }
}
