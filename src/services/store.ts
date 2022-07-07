import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from "./reducers/reducers";
import { WS_URL } from "../utils/constants";
import thunk from "redux-thunk";
import { socketMiddleware } from "./middleware/socketMiddleware";
import { RootSocketAction } from "./actions/socketActions";


declare global {
    interface Window {
        __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}

const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(WS_URL, RootSocketAction)));

export const store = createStore(rootReducer, enhancer)