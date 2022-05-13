export const ADD_BUNS = 'ADD_BUNS';
export const ADD_INGREDIENTS = 'ADD_INGREDIENTS';
export const MOVE_INGREDIENT = 'MOVE_INGREDIENT';
export const DELETE_INGREDIENT = 'DELETE_INGREDIENT';

export const addBunsAction = payload => ({ type: ADD_BUNS, payload });
export const addIngredientsAction = payload => ({ type: ADD_INGREDIENTS, payload });
export const deleteIngredientsActions = payload => ({ type: DELETE_INGREDIENT, payload });
export const moveIngredientsActions = payload => ({ type: MOVE_INGREDIENT, payload });