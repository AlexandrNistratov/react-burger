import { ThunkAction } from 'redux-thunk';
import { Action, ActionCreator, Dispatch } from 'redux';
import { store } from "../services/store";
import {
    TypedUseSelectorHook,
    useDispatch as dispatchHook,
    useSelector as selectorHook,
} from "react-redux";
import { TAppActions } from "../services/actions/actions";


export type TRootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk<TReturn = void> = ActionCreator<
    ThunkAction<TReturn, Action, TRootState, TAppActions>
    >;

export const useSelector: TypedUseSelectorHook<TRootState> = selectorHook;

export const useDispatch = () => dispatchHook<AppDispatch | AppThunk>();