import { AppDispatch } from "../../types";
import { Middleware, MiddlewareAPI } from "redux";
import { RootSocketAction, TSocketAction } from "../socket/socket.actions";

export const socketMiddleware = (wsUrl: string, wsActions: any): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootSocketAction>) => {
        let socket: WebSocket | null = null;
        const { } = wsActions;
        return (next) => (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { start, success, close, error, getMessage } = wsActions;

            if (type === start && payload.url.length > 30) {
                const url = `${ wsUrl }?token=${ payload.url }`;
                socket = new WebSocket(url);
            } else if(type === start) {
                socket = new WebSocket(`${ wsUrl }${ payload.url }`);
            }

            if (socket) {
                socket.onopen = (event) => {
                    dispatch(success());
                };

                socket.onerror = (event) => {
                    dispatch(error());
                };

                if (socket.url.includes('token')) {
                    socket.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        dispatch(getMessage(data));
                    };
                } else {
                    socket.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        dispatch(getMessage(data));
                    };
                }

                socket.onclose = (event) => {
                    dispatch(close());
                };
            }
            next(action);
        }
    }
};