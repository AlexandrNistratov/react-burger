import { RootOrdersActions, TOrdersAction } from "../actions/ordersActions";
import { TNumberOrder } from "../../types/types";

type TOrderInitialState = {
    ordersRequest: boolean,
    ordersFailed: boolean,
    orders: TNumberOrder
}

const initialState: TOrderInitialState = {
    ordersRequest: false,
    ordersFailed: false,
    orders: {
        order: {
            number: 0
        }
    }
};

export const orderReducer = (state: TOrderInitialState = initialState, action: TOrdersAction): TOrderInitialState => {
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
