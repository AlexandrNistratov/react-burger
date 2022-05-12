import { GET_ORDERS_REQUEST, GET_ORDERS_SUCCESS, GET_ORDERS_FAILED } from "../actions/orders";

const initialState = {
    ordersRequest: false,
    ordersFailed: false,
    orders: null
};

export const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDERS_REQUEST: {
            return {...state, ordersRequest: true, ordersFailed: false}
        }
        case GET_ORDERS_SUCCESS: {
            return {...state, ordersRequest: false, orders: action.payload, ordersFailed: false}
        }
        case GET_ORDERS_FAILED: {
            return {...state, ordersRequest: false, orders: null, ordersFailed: true}
        }
        default: return state
    }
}

export const ordersRequestAction = payload => ({ type: GET_ORDERS_REQUEST, payload });
export const ordersSuccessAction = payload => ({ type: GET_ORDERS_SUCCESS, payload });
export const ordersFailedAction = payload => ({ type: GET_ORDERS_FAILED, payload });
