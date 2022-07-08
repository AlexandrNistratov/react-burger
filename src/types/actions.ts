import { TDataAction } from '../store/data/data.actions';
import { TConstructorAction } from '../store/constructor/constructor.actions';
import { TDetailsAction } from '../store/details/details.actions';
import { TOrdersAction } from '../store/orders/orders.actions';
import { TUserAction } from '../store/user/user.actions';
import { TSocketAction } from "../store/socket/socket.actions";

export type TAppActions =
    | TDataAction
    | TConstructorAction
    | TDetailsAction
    | TOrdersAction
    | TUserAction
    | TSocketAction