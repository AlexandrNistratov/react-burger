import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from "redux-thunk";
import { dataReducer } from "./reducers/data";
import { constructorReducer } from "./reducers/constructor";
import { orderReducer } from "./reducers/orders";
import { detailsReducer } from "./reducers/details";
import { userReducer } from "./reducers/userReducers";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const rootReducer = combineReducers({
    data: dataReducer,
    constructorData: constructorReducer,
    order: orderReducer,
    details: detailsReducer,
    userReducer: userReducer
})

export const store = createStore(rootReducer, enhancer)