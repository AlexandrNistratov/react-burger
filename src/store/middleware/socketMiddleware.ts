import { AppDispatch } from "../../types";
import { Middleware, MiddlewareAPI } from "redux";
import { RootSocketAction, TwsActions, socketActionCreators } from "../socket/socket.actions";

export const socketMiddleware = (wsUrl: string, wsActions: TwsActions): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootSocketAction>) => {
        let socket: WebSocket | null = null;
        const { success, error, close, getMessage } = socketActionCreators;
        return (next) => (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { start } = RootSocketAction;

            if (type === start && payload?.token) {
                const url = `${wsUrl}?token=${payload.token}`;
                socket = new WebSocket(url);
            } else if(type === start) {
                socket = new WebSocket(`${wsUrl}/all`);
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