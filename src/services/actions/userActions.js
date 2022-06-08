export const GET_REGISTRATION_REQUEST = 'GET_REGISTRATION_REQUEST';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_FAILED = 'GET_REGISTRATION_FAILED';

export const GET_LOGIN_REQUEST = 'GET_LOGIN_REQUEST';
export const GET_LOGIN_SUCCESS = 'GET_LOGIN_SUCCESS';
export const GET_LOGIN_FAILED = 'GET_LOGIN_FAILED';

export const LOG_OUT = 'LOG_OUT';

export const GET_USER_REQUEST = 'GET_USER_REQUEST';
export const GET_USER_SUCCESS = 'GET_USER_SUCCESS';
export const GET_USER_FAILED = 'GET_USER_FAILED';

export const USER_UPDATE_REQUEST = 'USER_UPDATE_REQUEST';
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS';
export const USER_UPDATE_FAILED = 'USER_UPDATE_FAILED';

export const SET_EDIT = 'SET_EDIT';

export const registrationRequestAction = payload => ({ type: GET_REGISTRATION_REQUEST, payload });
export const registrationSuccessAction = payload => ({ type: GET_REGISTRATION_SUCCESS, payload });
export const registrationFailedAction = payload => ({ type: GET_REGISTRATION_FAILED, payload });

export const loginRequestAction = payload => ({ type: GET_LOGIN_REQUEST, payload });
export const loginSuccessAction = payload => ({ type: GET_LOGIN_SUCCESS, payload });
export const loginFailedAction = payload => ({ type: GET_LOGIN_FAILED, payload });

export const logOutAction = payload => ({ type: LOG_OUT, payload });

export const getUserRequestAction = payload => ({ type: GET_USER_REQUEST, payload });
export const getUserSuccessAction = payload => ({ type: GET_USER_SUCCESS, payload });
export const getUserFailedAction = payload => ({ type: GET_USER_FAILED, payload });

export const userUpdateRequestAction = payload => ({ type: USER_UPDATE_REQUEST, payload });
export const userUpdateSuccessAction = payload => ({ type: USER_UPDATE_SUCCESS, payload });
export const userUpdateFailedAction = payload => ({ type: USER_UPDATE_FAILED, payload });

export const setEditAction = payload => ({ type: SET_EDIT, payload });