import { GET_PRICE, ADD_BUNS, ADD_NO_BUNS } from "../actions/constructor";

const initialState = {
    bun: null,
    noBun: [],
    price: ''
}

export const constructorReducers = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BUNS: {
            return {...state, bun: action.payload}
        }
        case ADD_NO_BUNS: {
            return {...state, noBun: [...state.noBun, action.payload]}
        }
        case GET_PRICE: {
            return {...state, price: action.payload}
        }
        default: return state
    }
}

export const addBunsAction = payload => ({ type: ADD_BUNS, payload });
export const addNoBunsAction = payload => ({ type: ADD_NO_BUNS, payload });
export const getPriceActions = payload => ({ type: GET_PRICE, payload })