import { TOrders } from "../../types/types";

export enum RootOrdersDetailsAction {
    GET_ORDERS_DETAILS = 'GET_ORDERS_DETAILS',
    DELETE_ORDERS_DETAILS = 'DELETE_ORDERS_DETAILS'
}

interface IGetOrdersDetails {
    type: RootOrdersDetailsAction.GET_ORDERS_DETAILS,
    payload: TOrders
}

interface IDeleteOrdersDetails {
    type: RootOrdersDetailsAction.DELETE_ORDERS_DETAILS,
}

export type TOrdersDetailsAction =
    | IGetOrdersDetails
    | IDeleteOrdersDetails

export const getOrdersDetailsAction = (payload: TOrders): TOrdersDetailsAction => ({ type: RootOrdersDetailsAction.GET_ORDERS_DETAILS, payload });
export const deleteOrdersDetailsAction = (): TOrdersDetailsAction => ({ type: RootOrdersDetailsAction.DELETE_ORDERS_DETAILS });