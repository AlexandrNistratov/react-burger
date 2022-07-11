import { TAllOrders } from "../../types/types";

export enum RootSocketAction {
    start = 'WS_CONNECTION_START',
    success = 'WS_CONNECTION_SUCCESS',
    error = 'WS_CONNECTION_ERROR',
    closed = 'WS_CONNECTION_CLOSED',
    message = 'WS_GET_MESSAGE',
}

interface IWSStart {
    type: RootSocketAction.start,
    payload: object
}

interface IWSSuccess {
    type: RootSocketAction.success
}

interface IWSError {
    type: RootSocketAction.error
}

interface IWSClosed {
    type: RootSocketAction.closed
}

interface IWSGet {
    type: RootSocketAction.message,
    payload: TAllOrders
}

export type TSocketAction =
    start: IWSStart,
    | IWSSuccess
    | IWSError
    | IWSClosed
    | IWSGet

export const socketActionCreators = {
    start: (url: string): IWSStart => ({ type: RootSocketAction.start, payload: { url } }),
    success: (): IWSSuccess => ({ type: RootSocketAction.success }),
    error: (): IWSError => ({ type: RootSocketAction.error }),
    close: (): IWSClosed => ({ type: RootSocketAction.closed }),
    getMessage: (payload: TAllOrders): IWSGet => ({ type: RootSocketAction.message, payload }),
}
