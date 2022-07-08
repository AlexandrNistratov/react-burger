import { RootSocketAction, TSocketAction } from "./socket.actions";
import { TOrders } from "../../types/types";

type TSocketInitialState = {
    connected: boolean;
    messages: Array<TOrders> | null;
    total: number | null;
    totalToday: number | null;
}

const initialState: TSocketInitialState = {
    connected: false,
    messages: null,
    total: null,
    totalToday: null,
}

export const socketReducer = (state: TSocketInitialState = initialState, action: TSocketAction): TSocketInitialState => {
    switch (action.type) {
        case RootSocketAction.success: {
            return { ...state, connected: true }
        }
        case RootSocketAction.error: {
            return { ...state, connected: false }
        }
        case RootSocketAction.closed: {
            return { ...state, connected: false }
        }
        case RootSocketAction.message: {
            return {...state, messages: action.payload.orders }
        }
        case RootSocketAction.allMessage: {
            return {...state, messages: action.payload.orders, total: action.payload.total, totalToday: action.payload.totalToday }
        }

        default: return state
    }
}