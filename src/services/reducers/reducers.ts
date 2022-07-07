import { constructorReducer } from './constructorReducers';
import { dataReducer } from './dataReducers';
import { detailsReducer } from './detailsReducers';
import { userReducer } from './userReducers';
import { orderReducer } from './ordersReducers';
import { combineReducers } from "redux";
import { socketReducer } from "./socketReducers";

export const rootReducer = combineReducers({
    data: dataReducer,
    constructorData: constructorReducer,
    order: orderReducer,
    details: detailsReducer,
    userReducer: userReducer,
    socket: socketReducer
})

