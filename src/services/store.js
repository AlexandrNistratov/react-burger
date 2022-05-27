import { compose, createStore, applyMiddleware, combineReducers } from 'redux';

import thunk from "redux-thunk";
import { dataReducer } from "./reducers/data";
import { constructorReducer } from "./reducers/constructor";
import { orderReducer } from "./reducers/orders";
import { detailsReducer } from "./reducers/details";
import { registrationReducer } from "./reducers/registration";
import { loginReducer } from "./reducers/login";
import { userReducer } from "./reducers/user";
// import { userUpdateReducer } from "./reducers/updateUser";

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
    register: registrationReducer,
    login: loginReducer,
    user: userReducer,
    // updateUser: userUpdateReducer
})

export const store = createStore(rootReducer, enhancer)