import { TDataAction } from '../store/data/data.actions';
import { TConstructorAction } from '../store/constructor/constructor.actions';
import { TDetailsAction } from '../store/details/details.actions';
import { TNumberOrdersAction } from '../store/numberOrders/numberOrders.actions';
import { TUserAction } from '../store/user/user.actions';
import { TSocketAction } from "../store/socket/socket.actions";

export type TAppActions =
    | TDataAction
    | TConstructorAction
    | TDetailsAction
    | TNumberOrdersAction
    | TUserAction
    | TSocketAction