import { TNumberOrder } from "../../types/types";

export enum RootNumberOrdersActions {
    GET_NUMBER_ORDERS_REQUEST = 'GET_NUMBER_ORDERS_REQUEST',
    GET_NUMBER_ORDERS_SUCCESS = 'GET_NUMBER_ORDERS_SUCCESS',
    GET_NUMBER_ORDERS_FAILED = 'GET_NUMBER_ORDERS_FAILED'
}

interface INumberOrdersRequest {
    type: RootNumberOrdersActions.GET_NUMBER_ORDERS_REQUEST,
}

interface INumberOrdersSuccess {
    type: RootNumberOrdersActions.GET_NUMBER_ORDERS_SUCCESS,
    payload: TNumberOrder
}

interface INumberOrdersFailed {
    type: RootNumberOrdersActions.GET_NUMBER_ORDERS_FAILED,
}

export type TNumberOrdersAction =
    | INumberOrdersRequest
    | INumberOrdersSuccess
    | INumberOrdersFailed

export const ordersRequestAction = (): TNumberOrdersAction => ({ type: RootNumberOrdersActions.GET_NUMBER_ORDERS_REQUEST });
export const ordersSuccessAction = (payload: TNumberOrder): TNumberOrdersAction => ({ type: RootNumberOrdersActions.GET_NUMBER_ORDERS_SUCCESS, payload });
export const ordersFailedAction = (): TNumberOrdersAction => ({ type: RootNumberOrdersActions.GET_NUMBER_ORDERS_FAILED });