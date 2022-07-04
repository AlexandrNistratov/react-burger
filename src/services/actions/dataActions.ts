import { TData } from "../../utils/types";

export enum RootDataAction {
    GET_DATA_REQUEST = 'GET_ITEM_REQUEST',
    GET_DATA_SUCCESS = 'GET_ITEMS_SUCCESS',
    GET_DATA_FAILED = 'GET_ITEMS_FAILED'
}

interface IDataRequest {
    type: RootDataAction.GET_DATA_REQUEST,
}

interface IDataSuccess {
    type: RootDataAction.GET_DATA_SUCCESS,
    payload: TData[]
}

interface IDataFailed {
    type: RootDataAction.GET_DATA_FAILED,
}

export type TDataAction =
    | IDataRequest
    | IDataSuccess
    | IDataFailed

export const dataRequestAction = (): TDataAction => ({ type: RootDataAction.GET_DATA_REQUEST });
export const dataSuccessAction = (payload: TData[]): TDataAction => ({ type: RootDataAction.GET_DATA_SUCCESS, payload });
export const dataFailedAction = (): TDataAction => ({ type: RootDataAction.GET_DATA_FAILED });