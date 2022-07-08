import { TAllOrders } from "../../types/types";

export enum RootSocketAction {
    start = 'WS_CONNECTION_START',
    success = 'WS_CONNECTION_SUCCESS',
    error = 'WS_CONNECTION_ERROR',
    closed = 'WS_CONNECTION_CLOSED',
    message = 'WS_GET_USER_MESSAGE',
}

export type TwsActions = {
    start: typeof RootSocketAction.start;
    success: typeof RootSocketAction.success;
    error: typeof RootSocketAction.error;
    closed: typeof RootSocketAction.closed;
    message: typeof RootSocketAction.message;
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
    | IWSStart
    | IWSSuccess
    | IWSError
    | IWSClosed
    | IWSGet

const socketStartAction = (token?: string): TSocketAction => ({ type: RootSocketAction.start, payload: { token } });
const socketSuccessAction = (): TSocketAction => ({ type: RootSocketAction.success });
const socketErrorAction = (): TSocketAction => ({ type: RootSocketAction.error });
const socketCloseAction = (): TSocketAction => ({ type: RootSocketAction.closed });
const socketGetMessageAction = (payload: TAllOrders): TSocketAction => ({ type: RootSocketAction.message, payload });

export const socketActionCreators = {
    start: socketStartAction,
    success: socketSuccessAction,
    error: socketErrorAction,
    close: socketCloseAction,
    getMessage: socketGetMessageAction,
}
