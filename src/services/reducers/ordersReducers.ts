import {RootOrdersActions, TOrdersAction} from "../actions/ordersActions";

type TInitialState = {
    ordersRequest: boolean,
    ordersFailed: boolean,
    orders: null | object
}

const initialState: TInitialState = {
    ordersRequest: false,
    ordersFailed: false,
    orders: null
};

export const orderReducer = (state: TInitialState = initialState, action: TOrdersAction): TInitialState => {
    switch (action.type) {
        case RootOrdersActions.GET_ORDERS_REQUEST: {
            return {...state, ordersRequest: true, ordersFailed: false}
        }
        case RootOrdersActions.GET_ORDERS_SUCCESS: {
            return {...state, ordersRequest: false, orders: action.payload, ordersFailed: false}
        }
        case RootOrdersActions.GET_ORDERS_FAILED: {
            return {...state, ordersRequest: false, ordersFailed: true}
        }
        default: return state
    }
}
