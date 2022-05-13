export const GET_DETAILS = 'ADD_DETAILS';
export const DELETE_DETAILS = 'DELETE_DETAILS';

export const getDetailsAction = payload => ({ type: GET_DETAILS, payload });
export const deleteDetailsAction = payload => ({ type: DELETE_DETAILS, payload });