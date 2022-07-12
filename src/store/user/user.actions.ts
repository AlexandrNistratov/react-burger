import { TUser } from "../../types/types";

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
    payload: TUser
}

interface IRegistrationFailed {
    type: RootUserActions.GET_REGISTRATION_FAILED,
}

interface ILoginRequest{
    type: RootUserActions.GET_LOGIN_REQUEST,
}

interface ILoginSuccess {
    type: RootUserActions.GET_LOGIN_SUCCESS,
    payload: TUser
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
    payload: TUser
}

interface IGetUserFailed {
    type: RootUserActions.GET_USER_FAILED,
}

interface IUserUpdateRequest {
    type: RootUserActions.USER_UPDATE_REQUEST,
}

interface IUserUpdateSuccess {
    type: RootUserActions.USER_UPDATE_SUCCESS,
    payload: TUser
}

interface IUserUpdateFailed {
    type: RootUserActions.USER_UPDATE_FAILED,
}

interface ISetEdit {
    type: RootUserActions.SET_EDIT,
    payload: TUser
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


export const userActionCreator = {
    registrationRequest: (): TUserAction => ({ type: RootUserActions.GET_REGISTRATION_REQUEST }),
    registrationSuccess: (payload: TUser): TUserAction  => ({ type: RootUserActions.GET_REGISTRATION_SUCCESS, payload }),
    registrationFailed: (): TUserAction => ({ type: RootUserActions.GET_REGISTRATION_FAILED }),

    loginRequest: (): TUserAction => ({ type: RootUserActions.GET_LOGIN_REQUEST }),
    loginSuccess: (payload: TUser): TUserAction => ({ type: RootUserActions.GET_LOGIN_SUCCESS, payload }),
    loginFailed: (): TUserAction => ({ type: RootUserActions.GET_LOGIN_FAILED }),

    out: (): TUserAction => ({ type: RootUserActions.LOG_OUT }),

    userRequest: (): TUserAction => ({ type: RootUserActions.GET_USER_REQUEST }),
    userSuccess: (payload: TUser): TUserAction => ({ type: RootUserActions.GET_USER_SUCCESS, payload }),
    userFailed: (): TUserAction => ({ type: RootUserActions.GET_USER_FAILED }),

    userUpdateRequest: (): TUserAction => ({ type: RootUserActions.USER_UPDATE_REQUEST }),
    userUpdateSuccess: (payload: TUser): TUserAction => ({ type: RootUserActions.USER_UPDATE_SUCCESS, payload }),
    userUpdateFailed: (): TUserAction => ({ type: RootUserActions.USER_UPDATE_FAILED }),

    setEdit: (payload: TUser): TUserAction => ({ type: RootUserActions.SET_EDIT, payload })
}


