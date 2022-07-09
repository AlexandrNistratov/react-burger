import { constructorReducer } from '../store/constructor/constructor.reducers';
import { dataReducer } from '../store/data/data.reducers';
import { detailsReducer } from '../store/details/details.reducers';
import { userReducer } from '../store/user/user.reducers';
import { numberOrderReducer } from '../store/numberOrders/numberOrders.reducers';
import { combineReducers } from "redux";
import { socketReducer } from "../store/socket/socket.reducers";
import  { ordersDetailsReducer } from '../store/ordersDetails/orderDetails.reducers';

export const rootReducer = combineReducers({
    data: dataReducer,
    constructorData: constructorReducer,
    numberOrder: numberOrderReducer,
    details: detailsReducer,
    userReducer: userReducer,
    socket: socketReducer,
    oderDetails: ordersDetailsReducer
})

