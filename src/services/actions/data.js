export const GET_DATA_REQUEST = 'GET_ITEM_REQUEST';
export const GET_DATA_SUCCESS = 'GET_ITEMS_SUCCESS';
export const GET_DATA_FAILED = 'GET_ITEMS_FAILED';

export const dataRequestAction = payload => ({ type: GET_DATA_REQUEST, payload });
export const dataSuccessAction = payload => ({ type: GET_DATA_SUCCESS, payload });
export const dataFailedAction = payload => ({ type: GET_DATA_FAILED, payload });