import {compose, createStore, applyMiddleware, combineReducers} from 'redux';

import thunk from "redux-thunk";
import { dataReducer } from "./reducers/data";
import { constructorReducers } from "./reducers/constructor";

const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
        : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk));

export const rootReducer = combineReducers({
    data: dataReducer,
    constructorData: constructorReducers
})

export const store = createStore(rootReducer, enhancer)