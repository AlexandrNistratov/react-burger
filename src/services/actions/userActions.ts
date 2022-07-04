export enum RootUserActions {
    GET_REGISTRATION_REQUEST = 'GET_REGISTRATION_REQUEST',
    GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS',
    GET_REGISTRATION_FAILED = 'GET_REGISTRATION_FAILED',

    GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST',
    GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS',
    GET_LOGIN_FAILED = 'GET_LOGIN_FAILED',

    LOG_OUT = 'LOG_OUT',

    GET_USER_REQUEST = 'GET_USER_REQUEST',
    GET_USER_SUCCESS = 'GET_USER_SUCCESS',
    GET_USER_FAILED = 'GET_USER_FAILED',

    USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST',
    USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS',
    USER_UPDATE_FAILED = 'USER_UPDATE_FAILED',

    SET_EDIT = 'SET_EDIT'
}

interface IRegistrationRequest {
    type: RootUserActions.GET_REGISTRATION_REQUEST,
}

interface IRegistrationSuccess {
    type: RootUserActions.GET_REGISTRATION_SUCCESS,
    payload: object
}

interface IRegistrationFailed {
    type: RootUserActions.GET_REGISTRATION_FAILED,
}

interface ILoginRequest{
    type: RootUserActions.GET_LOGIN_REQUEST,
}

interface ILoginSuccess {
    type: RootUserActions.GET_LOGIN_SUCCESS,
    payload: object
}

interface ILoginFailed {
    type: RootUserActions.GET_LOGIN_FAILED,
}

interface ILogOut {
    type: RootUserActions.LOG_OUT
}

interface IGetUserRequest {
    type: RootUserActions.GET_USER_REQUEST,
}

interface IGetUserSuccess {
    type: RootUserActions.GET_USER_SUCCESS,
    payload: object
}

interface IGetUserFailed {
    type: RootUserActions.GET_USER_FAILED,
}

interface IUserUpdateRequest {
    type: RootUserActions.USER_UPDATE_REQUEST,
}

interface IUserUpdateSuccess {
    type: RootUserActions.USER_UPDATE_SUCCESS,
    payload: object
}

interface IUserUpdateFailed {
    type: RootUserActions.USER_UPDATE_FAILED,
}

interface ISetEdit {
    type: RootUserActions.SET_EDIT,
    payload: object
}

export type TUserAction =
    | IRegistrationRequest
    | IRegistrationSuccess
    | IRegistrationFailed
    | ILoginRequest
    | ILoginSuccess
    | ILoginFailed
    | ILogOut
    | IGetUserRequest
    | IGetUserSuccess
    | IGetUserFailed
    | IUserUpdateRequest
    | IUserUpdateSuccess
    | IUserUpdateFailed
    | ISetEdit



export const registrationRequestAction = (): TUserAction => ({ type: RootUserActions.GET_REGISTRATION_REQUEST });
export const registrationSuccessAction = (payload: object): TUserAction  => ({ type: RootUserActions.GET_REGISTRATION_SUCCESS, payload });
export const registrationFailedAction = (): TUserAction => ({ type: RootUserActions.GET_REGISTRATION_FAILED });

export const loginRequestAction = (): TUserAction => ({ type: RootUserActions.GET_LOGIN_REQUEST });
export const loginSuccessAction = (payload: object): TUserAction => ({ type: RootUserActions.GET_LOGIN_SUCCESS, payload });
export const loginFailedAction = (): TUserAction => ({ type: RootUserActions.GET_LOGIN_FAILED });

export const logOutAction = (): TUserAction => ({ type: RootUserActions.LOG_OUT });

export const getUserRequestAction = (): TUserAction => ({ type: RootUserActions.GET_USER_REQUEST });
export const getUserSuccessAction = (payload: object): TUserAction => ({ type: RootUserActions.GET_USER_SUCCESS, payload });
export const getUserFailedAction = (): TUserAction => ({ type: RootUserActions.GET_USER_FAILED });

export const userUpdateRequestAction = (): TUserAction => ({ type: RootUserActions.USER_UPDATE_REQUEST });
export const userUpdateSuccessAction = (payload: object): TUserAction => ({ type: RootUserActions.USER_UPDATE_SUCCESS, payload });
export const userUpdateFailedAction = (): TUserAction => ({ type: RootUserActions.USER_UPDATE_FAILED });

export const setEditAction = (payload: object): TUserAction => ({ type: RootUserActions.SET_EDIT, payload });