export enum RootDetailsAction {
    GET_DETAILS = 'ADD_DETAILS',
    DELETE_DETAILS = 'DELETE_DETAILS'
}

interface IGetDetails {
    type: RootDetailsAction.GET_DETAILS,
    payload: object
}

interface IDeleteDetails {
    type: RootDetailsAction.DELETE_DETAILS,
}

export type TDetailsAction =
    | IGetDetails
    | IDeleteDetails

export const getDetailsAction = (payload: object): TDetailsAction => ({ type: RootDetailsAction.GET_DETAILS, payload });
export const deleteDetailsAction = (): TDetailsAction => ({ type: RootDetailsAction.DELETE_DETAILS });