import { TDataAction } from '../actions/dataActions';
import { TConstructorAction } from '../actions/constructorActions';
import { TDetailsAction } from '../actions/detailsActions';
import { TOrdersAction } from '../actions/ordersActions';
import { TUserAction } from '../actions/userActions';

export type TAppActions =
    | TDataAction
    | TConstructorAction
    | TDetailsAction
    | TOrdersAction
    | TUserAction