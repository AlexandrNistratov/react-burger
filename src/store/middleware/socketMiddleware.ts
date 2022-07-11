import { AppDispatch } from "../../types";
import { Middleware, MiddlewareAPI } from "redux";
import { RootSocketAction, TWSActions } from "../socket/socket.actions";


export const socketMiddleware = (wsUrl: string, wsActions: TWSActions): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootSocketAction>) => {
        let socket: WebSocket | null = null;
        const { } = wsActions;
        return (next) => (action) => {
            const { dispatch } = store;
            const { type, payload } = action;
            const { start, success, error, closed, message } = wsActions;

            if (type === start && payload.url.length > 30) {
                console.log(payload.url)
                const url = `${ wsUrl }?token=${ payload.url }`;
                socket = new WebSocket(url);
            } else if(type === start) {
                socket = new WebSocket(`${ wsUrl }${ payload.url }`);
            }

            if (socket) {
                socket.onopen = (event) => {
                    dispatch({ type: success, payload: event });
                };

                socket.onerror = (event) => {
                    dispatch({ type: error, payload: event });
                };

                if (socket.url.includes('token')) {
                    socket.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        dispatch({ type: message, payload: data });
                    };
                } else {
                    socket.onmessage = (event) => {
                        const data = JSON.parse(event.data);
                        dispatch({ type: message, payload: data });
                    };
                }

                socket.onclose = (event) => {
                    dispatch({ type: closed, payload: event });
                };
            }
            next(action);
        }
    }
};