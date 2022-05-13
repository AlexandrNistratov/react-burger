export const GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST';
export const GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS';
export const GET_ORDERS_FAILED = 'GET_ORDERS_FAILED';

export const ordersRequestAction = payload => ({ type: GET_ORDERS_REQUEST, payload });
export const ordersSuccessAction = payload => ({ type: GET_ORDERS_SUCCESS, payload });
export const ordersFailedAction = payload => ({ type: GET_ORDERS_FAILED, payload });