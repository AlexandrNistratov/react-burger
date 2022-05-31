export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';
export const SET_USER_UPDATE = 'SET_USER_UPDATE';

export const getUserRequestAction = payload => ({ type: GET_USER_REQUEST, payload });
export const getUserSuccessAction = payload => ({ type: GET_USER_SUCCESS, payload });
export const getUserFailedAction = payload => ({ type: GET_USER_FAILED, payload });

export const userUpdateRequestAction = payload => ({ type: USER_UPDATE_REQUEST, payload });
export const userUpdateSuccessAction = payload => ({ type: USER_UPDATE_SUCCESS, payload });
export const userUpdateFailedAction = payload => ({ type: USER_UPDATE_FAILED, payload });
export const setUserUpdateAction = payload => ({ type: SET_USER_UPDATE, payload });