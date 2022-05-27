export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';
export const SET_LOGIN = 'SET_LOGIN';
export const LOG_OUT = 'LOG_OUT';

export const loginRequestAction = payload => ({ type: GET_LOGIN_REQUEST, payload });
export const loginSuccessAction = payload => ({ type: GET_LOGIN_SUCCESS, payload });
export const loginFailedAction = payload => ({ type: GET_LOGIN_FAILED, payload });
export const setLoginAction = payload => ({ type: SET_LOGIN, payload });
export const logOutAction = payload => ({ type: LOG_OUT, payload });