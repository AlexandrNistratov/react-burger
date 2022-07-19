import {RootOrdersDetailsAction, TOrdersDetailsAction} from './ordersDetails.actions';
import {TOrders} from "../../types/types";

type TOrdersDetailsInitialState = {
    orderDetails: TOrders
}

export const initialState: TOrdersDetailsInitialState = {
   orderDetails: {
       ingredients: [],
       _id: '',
       status: '',
       number: 0,
       name: '',
       createdAt: '',
       updatedAt: ''
   }
}

export const ordersDetailsReducer = (state: TOrdersDetailsInitialState = initialState, action: TOrdersDetailsAction): TOrdersDetailsInitialState => {
    switch (action.type) {
        case RootOrdersDetailsAction.GET_ORDERS_DETAILS: {
            return {...state, orderDetails: action.payload }
        }
        case RootOrdersDetailsAction.DELETE_ORDERS_DETAILS: {
            return {...state, orderDetails: {
                    ingredients: [],
                    _id: '',
                    status: '',
                    number: 0,
                    name: '',
                    createdAt: '',
                    updatedAt: ''
            }
            }
        }
        default: return state
    }
}
