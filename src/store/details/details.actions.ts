import { TIngredientDetails } from "../../types/types";

export enum RootDetailsAction {
    GET_DETAILS = 'ADD_DETAILS',
    DELETE_DETAILS = 'DELETE_DETAILS'
}

interface IGetDetails {
    type: RootDetailsAction.GET_DETAILS,
    payload: TIngredientDetails
}

interface IDeleteDetails {
    type: RootDetailsAction.DELETE_DETAILS,
}

export type TDetailsAction =
    | IGetDetails
    | IDeleteDetails

export const detailsActionCreator = {
    getDetails: (payload: TIngredientDetails): TDetailsAction => ({ type: RootDetailsAction.GET_DETAILS, payload }),
    deleteDetails: (): TDetailsAction => ({ type: RootDetailsAction.DELETE_DETAILS })
}