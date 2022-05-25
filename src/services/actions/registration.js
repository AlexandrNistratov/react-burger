export const GET_REGISTRATION_REQUEST = 'GET_REGISTRATION_REQUEST';
export const GET_REGISTRATION_SUCCESS = 'GET_REGISTRATION_SUCCESS';
export const GET_REGISTRATION_FAILED = 'GET_REGISTRATION_FAILED';
export const SET_REGISTRATION = 'SET_REGISTRATION';

export const registrationRequestAction = payload => ({ type: GET_REGISTRATION_REQUEST, payload });
export const registrationSuccessAction = payload => ({ type: GET_REGISTRATION_SUCCESS, payload });
export const registrationFailedAction = payload => ({ type: GET_REGISTRATION_FAILED, payload });
export const setRegistrationAction = payload => ({ type: SET_REGISTRATION, payload });