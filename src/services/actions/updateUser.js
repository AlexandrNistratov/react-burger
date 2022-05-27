export const GET_USER_UPDATE_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_USER_UPDATE_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_USER_UPDATE_FAILED = 'GET_LOGIN_FAILED';

export const userUpdateRequestAction = payload => ({ type: GET_USER_UPDATE_REQUEST, payload });
export const userUpdateSuccessAction = payload => ({ type: GET_USER_UPDATE_SUCCESS, payload });
export const userUpdateFailedAction = payload => ({ type: GET_USER_UPDATE_FAILED, payload });