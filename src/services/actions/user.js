export const GET_USER_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_USER_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_USER_FAILED = 'GET_LOGIN_FAILED';

export const USER_UPDATE_REQUEST = 'GET_LOGIN_REQUEST';
export const USER_UPDATE_SUCCESS = 'GET_LOGIN_SUCCESS';
export const USER_UPDATE_FAILED = 'GET_LOGIN_FAILED';

export const getUserRequestAction = payload => ({ type: GET_USER_REQUEST, payload });
export const getUserSuccessAction = payload => ({ type: GET_USER_SUCCESS, payload });
export const getUserFailedAction = payload => ({ type: GET_USER_FAILED, payload });

export const userUpdateRequestAction = payload => ({ type: USER_UPDATE_REQUEST, payload });
export const userUpdateSuccessAction = payload => ({ type: USER_UPDATE_SUCCESS, payload });
export const userUpdateFailedAction = payload => ({ type: USER_UPDATE_FAILED, payload });