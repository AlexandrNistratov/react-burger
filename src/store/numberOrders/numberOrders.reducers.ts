import { RootNumberOrdersActions, TNumberOrdersAction } from "./numberOrders.actions";
import { TNumberOrder } from "../../types/types";

type TNumberOrderInitialState = {
    ordersNumberRequest: boolean,
    ordersNumberFailed: boolean,
    ordersNumber: TNumberOrder
}

export const initialState: TNumberOrderInitialState = {
    ordersNumberRequest: false,
    ordersNumberFailed: false,
    ordersNumber: {
        order: {
            number: 0
        }
    }
};

export const numberOrderReducer = (state: TNumberOrderInitialState = initialState, action: TNumberOrdersAction): TNumberOrderInitialState => {
    switch (action.type) {
        case RootNumberOrdersActions.GET_NUMBER_ORDERS_REQUEST: {
            return {...state, ordersNumberRequest: true, ordersNumberFailed: false}
        }
        case RootNumberOrdersActions.GET_NUMBER_ORDERS_SUCCESS: {
            return {...state, ordersNumberRequest: false, ordersNumber: action.payload, ordersNumberFailed: false}
        }
        case RootNumberOrdersActions.GET_NUMBER_ORDERS_FAILED: {
            return {...state, ordersNumberRequest: false, ordersNumberFailed: true}
        }
        default: return state
    }
}
