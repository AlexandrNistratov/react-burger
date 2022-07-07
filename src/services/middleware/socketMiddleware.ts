import { AppDispatch } from "../../types";
import { Middleware, MiddlewareAPI } from "redux";
import { RootSocketAction, TwsActions, socketActionCreators } from "../actions/socketActions";

export const socketMiddleware = (wsUrl: string, wsActions: TwsActions, token?: string): Middleware => {
    return (store: MiddlewareAPI<AppDispatch, RootSocketAction>) => {
        let socket: WebSocket | null = null;

        return (next) => (action) => {
            const {dispatch} = store;
            const {type, payload} = action;
            const {start} = RootSocketAction;

            if (type === start) {
                socket = new WebSocket(`${wsUrl}/all`);

            } else if (type === start && payload.token) {
                const url = `${wsUrl}?token=${token?.split("Bearer ").join("")}`;
                console.log(url)
                socket = new WebSocket(url);

                if (socket) {
                    socket.onopen = (event) => {
                        console.log("подключились")
                        dispatch(socketActionCreators.success());
                    };

                    socket.onerror = (event) => {
                        console.log('ошибочка')
                        dispatch(socketActionCreators.error());
                    };

                    socket.onmessage = (event) => {
                        console.log('получили')
                        const data = JSON.parse(event.data);
                        console.log(data)
                        dispatch(socketActionCreators.getMessage(data));
                    };

                    socket.onclose = (event) => {
                        console.log('отключились')
                        dispatch(socketActionCreators.close());
                    };
                }
                next(action);
            }
        }
    }
};