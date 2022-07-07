import { TDataAction } from './dataActions';
import { TConstructorAction } from './constructorActions';
import { TDetailsAction } from './detailsActions';
import { TOrdersAction } from './ordersActions';
import { TUserAction } from './userActions';

export type TAppActions =
    | TDataAction
    | TConstructorAction
    | TDetailsAction
    | TOrdersAction
    | TUserAction