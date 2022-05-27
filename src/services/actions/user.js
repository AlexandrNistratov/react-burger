export const GET_USER_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_USER_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_USER_FAILED = 'GET_LOGIN_FAILED';

export const userRequestAction = payload => ({ type: GET_USER_REQUEST, payload });
export const userSuccessAction = payload => ({ type: GET_USER_SUCCESS, payload });
export const userFailedAction = payload => ({ type: GET_USER_FAILED, payload });