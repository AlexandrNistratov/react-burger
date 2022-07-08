import { constructorReducer } from '../store/constructor/constructor.reducers';
import { dataReducer } from '../store/data/data.reducers';
import { detailsReducer } from '../store/details/details.reducers';
import { userReducer } from '../store/user/user.reducers';
import { orderReducer } from '../store/orders/orders.reducers';
import { combineReducers } from "redux";
import { socketReducer } from "../store/socket/socket.reducers";

export const rootReducer = combineReducers({
    data: dataReducer,
    constructorData: constructorReducer,
    order: orderReducer,
    details: detailsReducer,
    userReducer: userReducer,
    socket: socketReducer
})

