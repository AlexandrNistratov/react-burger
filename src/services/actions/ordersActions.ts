import { TNumberOrder } from "../../types/types";

export enum RootOrdersActions {
    GET_ORDERS_REQUEST = 'GET_ORDERS_REQUEST',
    GET_ORDERS_SUCCESS = 'GET_ORDERS_SUCCESS',
    GET_ORDERS_FAILED = 'GET_ORDERS_FAILED'
}

interface IOrdersRequest {
    type: RootOrdersActions.GET_ORDERS_REQUEST,
}

interface IOrdersSuccess {
    type: RootOrdersActions.GET_ORDERS_SUCCESS,
    payload: TNumberOrder
}

interface IOrdersFailed {
    type: RootOrdersActions.GET_ORDERS_FAILED,
}

export type TOrdersAction =
    | IOrdersRequest
    | IOrdersSuccess
    | IOrdersFailed

export const ordersRequestAction = (): TOrdersAction => ({ type: RootOrdersActions.GET_ORDERS_REQUEST });
export const ordersSuccessAction = (payload: TNumberOrder): TOrdersAction => ({ type: RootOrdersActions.GET_ORDERS_SUCCESS, payload });
export const ordersFailedAction = (): TOrdersAction => ({ type: RootOrdersActions.GET_ORDERS_FAILED });